package com.appjangle.i110.data.game1;

import com.appjangle.i110.data.Types;

import io.nextweb.Link;
import io.nextweb.Node;
import io.nextweb.Session;

public class LoadStrategicQuandrantQuestion {

	public static StrategicQuandrantQuestion getQuestionFromNode(final Session session, final Link link) {
		
		final Node node = link.get();
		
		return new StrategicQuandrantQuestion() {
			
			
			@Override
			public String getCorrectCompetiveScope() {
				return node.select(session.node(Types.aCompetitiveScope)).get().value(String.class);
			}

			@Override
			public String getCorrectCostStrategy() {
				return node.select(session.node(Types.aCostStrategy)).get().value(String.class);
			}
			
			@Override
			public String getCorrectStrategy() {	
				return node.select(session.node(Types.aCorrectStrategy)).get().value(String.class);
			}
			
			@Override
			public String getBrandVision() {
				return node.select(session.node(Types.aVision)).get().value(String.class);
			}
			
			@Override
			public String getBrandVideoLink() {
				return node.select(session.node(Types.aBrandVideo)).get().value(String.class);
			}
			
			@Override
			public String getBrandName() {
				return node.select(session.node(Types.aBrandName)).get().value(String.class);
			}
			
			@Override
			public String getBrandImageLink() {
				return node.select(session.node(Types.aBrandVideo)).get().value(String.class);
			}

			
		};
	}
	
}
