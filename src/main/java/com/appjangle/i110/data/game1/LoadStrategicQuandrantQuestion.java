package com.appjangle.i110.data.game1;

import com.appjangle.i110.data.Types;

import io.nextweb.Link;
import io.nextweb.Node;
import io.nextweb.Session;

public class LoadStrategicQuandrantQuestion {

	public static StrategicQuandrantQuestion getQuestionFromNode(final Session session, final Link link) {
		
		final Node node = link.get();
		
		final Types t = new Types(session);
		
		return new StrategicQuandrantQuestion() {

			@Override
			public String getCorrectCompetiveScope() {
				return node.select(t.competitiveScope).get().value(String.class);
			}

			@Override
			public String getCorrectCostStrategy() {
				return node.select(t.costStrategy).get().value(String.class);
			}
			
			@Override
			public String getCorrectStrategy() {	
				return node.select(t.correctStrategy).get().value(String.class);
			}
			
			@Override
			public String getBrandVision() {
				return node.select(t.vision).get().value(String.class);
			}
			
			@Override
			public String getBrandVideoLink() {
				return node.select(t.brandVideo).get().value(String.class);
			}
			
			@Override
			public String getBrandName() {
				return node.select(t.brandName).get().value(String.class);
			}
			
			@Override
			public String getBrandImageLink() {
				return node.select(t.brandImage).get().value(String.class);
			}

			
		};
	}
	
}
