package examples;

import com.appjangle.i110.data.Types;
import com.appjangle.i110.data.game1.GetStrategicQuandrantQuestionDataCallback;
import com.appjangle.i110.data.game1.StrategicQuandrantQuestion;

import one.core.domain.OneClient;
import one.core.dsl.CoreDsl;
import one.core.dsl.callbacks.WhenChildrenSelected;
import one.core.dsl.callbacks.results.WithChildrenSelectedResult;
import one.core.nodes.OneNode;
import one.core.nodes.OneTypedReference;
import one.core.nodes.OneValue;

public class GetStrategicQuandrantQuestionData {

	/**
	 * <p>Given a link to a question node, this method will download the associated
	 * values for this node.</p>
	 * <p>For instance the brand name and the correct strategy.</p>
	 */
	public static void getStrategicQuandrantQuestionData(
			final OneNode question, final OneClient client,
			final GetStrategicQuandrantQuestionDataCallback callback) {

		final CoreDsl dsl = client.one();

		// select from the question node the children of the type brand name
		dsl.selectFrom(question).theChildren()
				.linkingTo(dsl.reference(Types.aBrandName)).in(client)
				.and(new WhenChildrenSelected<OneTypedReference<Object>>() {

					@SuppressWarnings("unchecked")
					@Override
					public void thenDo(
							WithChildrenSelectedResult<OneTypedReference<Object>> result) {

						// there should be only one child of the type
						// 'aBrandName'
						// this child node should contain the text representing
						// the brand name.
						final String brandName;
						if (result.values().size() > 0) {
							brandName = ((OneValue<String>) result.values()
									.get(0)).getValue();
						} else {
							brandName = null;
						}

						dsl.selectFrom(question)
								.theChildren()
								.linkingTo(dsl.reference(Types.aBrandImage))
								.in(client)
								.and(new WhenChildrenSelected<OneTypedReference<Object>>() {

									@Override
									public void thenDo(
											WithChildrenSelectedResult<OneTypedReference<Object>> result) {

										final String brandImageLink;
										if (result.values().size() > 0) {
											brandImageLink = ((OneValue<String>) result
													.values().get(0))
													.getValue();
										} else {
											brandImageLink = null;
										}

										dsl.selectFrom(question)
												.theChildren()
												.linkingTo(
														dsl.reference(Types.aCorrectStrategy))
												.in(client)
												.and(new WhenChildrenSelected<OneTypedReference<Object>>() {

													@Override
													public void thenDo(
															WithChildrenSelectedResult<OneTypedReference<Object>> result) {

														final String correctStrategy;
														if (result.values()
																.size() > 0) {
															correctStrategy = ((OneValue<String>) result
																	.values()
																	.get(0))
																	.getValue();
														} else {
															correctStrategy = null;
														}

														callback.onSuccess(new StrategicQuandrantQuestion() {

															@Override
															public String getCorrectStrategy() {
																return correctStrategy;
															}

															@Override
															public String getBrandName() {
																return brandName;
															}

															@Override
															public String getBrandImageLink() {
																return brandImageLink;
															}

															@Override
															public String getBrandVideoLink() {
																// TODO Auto-generated method stub
																return null;
															}

															@Override
															public String getBrandVision() {
																// TODO Auto-generated method stub
																return null;
															}

															@Override
															public String getCorrectStrategyJustification() {
																// TODO Auto-generated method stub
																return null;
															}
														});

													}
												});

									}
								});

					}

					@Override
					public void onFailure(Throwable t) {
						callback.onFailure(t);
					}

				});

	}
}
