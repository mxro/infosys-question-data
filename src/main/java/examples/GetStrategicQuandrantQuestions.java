package examples;

import java.util.List;

import com.appjangle.i110.data.Types;

import one.core.domain.OneClient;
import one.core.dsl.CoreDsl;
import one.core.dsl.callbacks.WhenChildrenSelected;
import one.core.dsl.callbacks.results.WithChildrenSelectedResult;
import one.core.nodes.OneNode;
import one.core.nodes.OneTypedReference;

public class GetStrategicQuandrantQuestions {

	public static interface GetQuestionsCallback {
		public void onSuccess(List<OneTypedReference<Object>> questions);

		public void onFailure(Throwable t);
	}

	/**
	 * Give a refernece to a question bag, this method will determine all the
	 * questions within the given question bag.
	 */
	public static void getStrategicQuandrantQuestions(
			final OneNode questionBag, final OneClient client,
			final GetQuestionsCallback callback) {
		final CoreDsl dsl = client.one();

		dsl.selectFrom(questionBag).theChildren()
				.linkingTo(dsl.reference(Types.aStrategyQuadrantQuestion))
				.in(client)
				.and(new WhenChildrenSelected<OneTypedReference<Object>>() {

					@Override
					public void thenDo(
							WithChildrenSelectedResult<OneTypedReference<Object>> result) {
						callback.onSuccess(result.children());
					}
				});

	}

}
