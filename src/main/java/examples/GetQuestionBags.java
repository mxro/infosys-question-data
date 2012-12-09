package examples;

import java.util.List;

import com.appjangle.i110.data.Types;

import one.core.domain.OneClient;
import one.core.dsl.CoreDsl;
import one.core.dsl.callbacks.WhenChildrenSelected;
import one.core.dsl.callbacks.results.WithChildrenSelectedResult;
import one.core.nodes.OneNode;
import one.core.nodes.OneTypedReference;

public class GetQuestionBags {

	/**
	 * This callback interface must be implemented when calling getQuestionBags.
	 * It will return a list of question bags after the method has been executed
	 * successfully.
	 * 
	 * 
	 */
	public static interface GetQuestionBagsCallback {
		public void onSuccess(List<OneTypedReference<Object>> questionBags);

		public void onFailure(Throwable t);
	}

	/**
	 * Given the address of a question bag repository, this method determines
	 * all the question bags contained in the repository.
	 */
	public static void getQuestionBags(final OneNode questionBagRepository,
			final OneClient client, final GetQuestionBagsCallback callback) {
		// get db language from client.
		CoreDsl dsl = client.one();

		// select all children from the node questionBagRepository, which link
		// to (~have the type) Types.aQuestionBag
		dsl.selectFrom(questionBagRepository).theChildren()
				.linkingTo(dsl.reference(Types.aQuestionBag)).in(client)
				.and(new WhenChildrenSelected<OneTypedReference<Object>>() {

					@Override
					public void thenDo(
							WithChildrenSelectedResult<OneTypedReference<Object>> result) {
						callback.onSuccess(result.children());
					}

					@Override
					public void onFailure(Throwable t) {
						callback.onFailure(t);
					}

				});

	}
}
