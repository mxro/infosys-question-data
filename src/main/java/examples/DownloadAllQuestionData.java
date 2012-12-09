package examples;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.CountDownLatch;

import com.appjangle.i110.data.game1.GetStrategicQuandrantQuestionDataCallback;
import com.appjangle.i110.data.game1.StrategicQuandrantQuestion;

import one.async.joiner.CallbackLatch;
import one.client.jre.OneJre;
import one.core.domain.OneClient;
import one.core.dsl.CoreDsl;
import one.core.nodes.OneNode;
import one.core.nodes.OneTypedReference;
import examples.GetQuestionBags.GetQuestionBagsCallback;
import examples.GetStrategicQuandrantQuestions.GetQuestionsCallback;


public class DownloadAllQuestionData {

	public static void main(String[] args) {

		// the initial entry point for ALL question data
		// is the question bag repository.

		// the URL of this might change in the deployed version
		final String questionBagRepository = "http://slicnet.com/seed1/seed1/9/1/h/sd";

		// initializing database engine
		CoreDsl dsl = OneJre.init();

		// initializing client context
		OneClient client = dsl.createClient();

		step1_get_question_bags(questionBagRepository, dsl, client);

	}

	private static void step1_get_question_bags(
			final String questionBagRepository, final CoreDsl dsl,
			final OneClient client) {

		GetQuestionBags.getQuestionBags(dsl.reference(questionBagRepository),
				client, new GetQuestionBagsCallback() {

					@Override
					public void onSuccess(
							List<OneTypedReference<Object>> questionBags) {
						System.out.println("The repository contained ["
								+ questionBags.size() + "] question bags.");

						// download the questions for all found repositories
						for (OneNode questionBag : questionBags) {
							
							// note that if there are multiple question bags
							// found, they will be processed in parallel.
							
							
							// synchronous way to download all questions
							step2_get_questions(questionBag, dsl, client);
							
							// asynchronoys way to downlod all questions
							step2_get_questions_async(questionBag, dsl, client, new QuestionsDownloadedCallback() {
								
								@Override
								public void onDownloaded(List<StrategicQuandrantQuestion> questions) {
									System.out.println("ALL Questions downloaded ASYNC");
									System.out.println(questions.size());
								}
							});
						}
					}

					@Override
					public void onFailure(Throwable t) {
						throw new RuntimeException(t);
					}
				});
	}

	private static void step2_get_questions(final OneNode questionBag,
			final CoreDsl dsl, final OneClient client) {

		// this 'count down' will require TWO notifications before it will be satisifed
		final CountDownLatch downloadQuestionProcess = new CountDownLatch(2);
		
		// this list will 'collect' all the downloaded questions
		final List<StrategicQuandrantQuestion> downloadedQuestions = 
				Collections.synchronizedList(new LinkedList<StrategicQuandrantQuestion>());
		
		
		GetStrategicQuandrantQuestions.getStrategicQuandrantQuestions(
				questionBag, client, new GetQuestionsCallback() {

					@Override
					public void onSuccess(
							List<OneTypedReference<Object>> questions) {
						System.out.println("The question bag contained ["
								+ questions.size() + "] questions.");

						// this 'count down' will require as many notifactions as there are question in the bag.
						final CountDownLatch allQuestionsLatch = new CountDownLatch(questions.size());

						for (OneNode question : questions) {
							
							step3_get_question_data(question, dsl, client, new QuestionDownloadedCallback() {
								
								@Override
								public void onDownloaded(StrategicQuandrantQuestion question) {
									downloadedQuestions.add(question);
									System.out.println("Count down questions. "+allQuestionsLatch.getCount());
									
									// notify count down waiting for questions
									allQuestionsLatch.countDown();
								}
							});
						}
						
						// wait for the count down awaiting a notification for each question in the bag
						// must wait in another thread for not to hold the execution of the overall app.
						new Thread(new Runnable() {
							public void run() {
								try {
									allQuestionsLatch.await();
									System.out.println("All questions passed.");
								} catch (InterruptedException e) {
									throw new RuntimeException(e);
								}
								
								// only when a notification to the 'inner' counter for each question is received,
								// send a notification to the 'outer' counter.
								downloadQuestionProcess.countDown();
							}
						}).start();
						
						
					}

					@Override
					public void onFailure(Throwable t) {
						throw new RuntimeException(t);
					}
				});
		
		// notifiy outer counter once - this is to signify that the question download process has been started
		downloadQuestionProcess.countDown();
		
		new Thread(new Runnable() {

			@Override
			public void run() {
				try {
					downloadQuestionProcess.await();
				} catch (InterruptedException e) {
					throw new RuntimeException(e);
				}

				System.out.println("ALL Questions downloaded");
				
				System.out.println(downloadedQuestions.size());
			}
			
		}).start();
		
		
		
	}

	// this callback is used to inform step2 of each completion of step3
	public static interface QuestionDownloadedCallback {
		public void onDownloaded(StrategicQuandrantQuestion question);
	}

	private static void step3_get_question_data(final OneNode question,
			CoreDsl dsl, OneClient client, final QuestionDownloadedCallback callback) {

		GetStrategicQuandrantQuestionData.getStrategicQuandrantQuestionData(
				question, client,
				new GetStrategicQuandrantQuestionDataCallback() {

					@Override
					public void onSuccess(StrategicQuandrantQuestion question) {
						System.out.println("Question downloaded:\n"
								+ "  brandName: " + question.getBrandName()
								+ "\n" + "  brandImage: "
								+ question.getBrandImageLink() + "\n"
								+ "  correctStrategy: "
								+ question.getCorrectStrategy());
						callback.onDownloaded(question);
					}

					@Override
					public void onFailure(Throwable t) {
						throw new RuntimeException(t);
					}
				});
	}
	
	
	public static interface QuestionsDownloadedCallback {
		public void onDownloaded(List<StrategicQuandrantQuestion> questions);
	}
	
	private static void step2_get_questions_async(final OneNode questionBag,
			final CoreDsl dsl, final OneClient client, final QuestionsDownloadedCallback callback) {
		
		
		GetStrategicQuandrantQuestions.getStrategicQuandrantQuestions(
				questionBag, client, new GetQuestionsCallback() {

					@Override
					public void onSuccess(
							List<OneTypedReference<Object>> questions) {
						
						final List<StrategicQuandrantQuestion> downloadedQuestions = 
								Collections.synchronizedList(new LinkedList<StrategicQuandrantQuestion>());
						
						final CallbackLatch asyncCollector = new CallbackLatch(questions.size()) {
							
							
							@Override
							public void onCompleted() {
								callback.onDownloaded(downloadedQuestions);
							}
							
							@Override
							public void onFailed(Throwable t) {
								throw new RuntimeException
								(t);
							}
							
						};
						
						for (OneTypedReference<Object> question: questions){
						
						GetStrategicQuandrantQuestionData.getStrategicQuandrantQuestionData(
								question, client,
								new GetStrategicQuandrantQuestionDataCallback() {

									@Override
									public void onSuccess(
											StrategicQuandrantQuestion question) {
										downloadedQuestions.add(question);
										asyncCollector.registerSuccess();
									}

									@Override
									public void onFailure(Throwable t) {
										throw new RuntimeException(t);
									}
									
								});
						}
						
					}

					@Override
					public void onFailure(Throwable t) {
						throw new RuntimeException(t);
					}
				});
	}

}
