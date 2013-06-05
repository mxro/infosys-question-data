package com.appjangle.i110.data;

import com.appjangle.i110.data.game1.LoadStrategicQuandrantQuestion;
import com.appjangle.i110.data.game1.StrategicQuandrantQuestion;
import com.appjangle.i110.data.game3.LoadValueChainQuestion;
import com.appjangle.i110.data.game3.ValueChainQuestion;

import io.nextweb.Node;
import io.nextweb.Session;
import io.nextweb.common.LocalServer;
import io.nextweb.jre.Nextweb;

public class TestApp {

	public static void main(String[] args) {

		LocalServer server = Nextweb.startServer(8991);

		Session session = Nextweb.createSession();

		Node cases = session.seed("local").get();

		GameData.writeCaseData(session, cases);

		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("Loading data for game type 1 from case 1 ....");

		// the 'c1' at the end indicates that we select case 1!
		StrategicQuandrantQuestion case1game1 = LoadStrategicQuandrantQuestion
				.getQuestionFromNode(session, session.node(cases.uri() + "/c1"));

		System.out.println("Brand name: " + case1game1.getBrandName());
		System.out.println("Brand image: " + case1game1.getBrandImageLink());
		System.out.println("Brand vision: " + case1game1.getBrandVision());
		System.out.println("Correct strategy: "
				+ case1game1.getCorrectStrategy());
		System.out.println("Strategy justification:");
		System.out.println(" Competitive scope: "
				+ case1game1.getCorrectCompetiveScope());
		System.out.println(" Cost strategy: "
				+ case1game1.getCorrectCostStrategy());
		System.out.println(" Therefore, the correct strategy is: "
				+ case1game1.getCorrectStrategy());


		
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("Loading data for game type 1 from case 2 ....");
		
		// the 'c2' at the end indicates that we select case 2!
		StrategicQuandrantQuestion case2game1 = LoadStrategicQuandrantQuestion
				.getQuestionFromNode(session, session.node(cases.uri() + "/c2"));

		System.out.println("Brand name: " + case2game1.getBrandName());
		System.out.println("Brand image: " + case2game1.getBrandImageLink());
		System.out.println("Brand vision: " + case2game1.getBrandVision());
		System.out.println("Correct strategy: "
				+ case2game1.getCorrectStrategy());
		System.out.println("Strategy justification:");
		System.out.println(" Competitive scope: "
				+ case2game1.getCorrectCompetiveScope());
		System.out.println(" Cost strategy: "
				+ case2game1.getCorrectCostStrategy());
		System.out.println(" Therefore, the correct strategy is: "
				+ case2game1.getCorrectStrategy());

		
		
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("Loading data for game type 3 from case 1 ....");

		ValueChainQuestion case1game3 = LoadValueChainQuestion
				.getQuestionFromNode(session, session.node(cases.uri() + "/c1"));

		System.out.println("Brand name: " + case1game3.getBrandName());
		System.out.println("Brand image: " + case1game3.getBrandImageLink());
		System.out.println("Brand vision: " + case1game3.getBrandVision());
		System.out.println("Key activites: "
				+ case1game3.getCorrectValueChainActivites());
		System.out.println("Justification:");

		System.out.println(case1game3.getValueChainJustification());
		
		session.close().get();
		server.shutdown().get();
		System.out.println("Example completed.");
	}

}
