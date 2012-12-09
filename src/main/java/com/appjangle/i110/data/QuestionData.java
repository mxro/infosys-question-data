package com.appjangle.i110.data;

import com.appjangle.i110.data.game1.LoadStrategicQuandrantQuestion;
import com.appjangle.i110.data.game1.StrategicQuandrantQuestion;

import io.nextweb.Node;
import io.nextweb.Session;
import io.nextweb.common.LocalServer;
import io.nextweb.jre.Nextweb;


public class QuestionData {

	public static void main(String[] args) {
		
		LocalServer server = Nextweb.startServer(8991);
		
		Session session = Nextweb.createSession();
		
		Node cases = session.seed("local").get();
		
		CaseData.writeCaseData(session, cases);
		
		// the 'c1' at the end indicates that we select case 1!
		StrategicQuandrantQuestion game1 = LoadStrategicQuandrantQuestion.getQuestionFromNode(session, session.node(cases.uri()+"/c1"));
		
		System.out.println("Loading data for game type one from case 1 ....");
		System.out.println("Brand name: "+game1.getBrandName());
		System.out.println("Brand image: "+game1.getBrandImageLink());
		System.out.println("Brand vision: "+game1.getBrandVision());
		System.out.println("Correct strategy: "+game1.getCorrectStrategy());
		System.out.println("Strategy justification:");
		System.out.println(" Competitive scope: "+game1.getCorrectCompetiveScope());
		System.out.println(" Cost strategy: "+game1.getCorrectCostStrategy());
		
		session.close().get();
		server.shutdown().get();
		System.out.println("Example completed.");
	}
	
}
