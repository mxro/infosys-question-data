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
		
		StrategicQuandrantQuestion q1 = LoadStrategicQuandrantQuestion.getQuestionFromNode(session, session.node(cases.uri()+"/c1"));
		
		System.out.println(q1.getBrandName());
		
		
		session.close().get();
		server.shutdown().get();
		
	}
	
}
