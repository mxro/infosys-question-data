package com.appjangle.i110.data;

import com.appjangle.i110.data.cases.Case1Starbucks;
import com.appjangle.i110.data.cases.Case2Nike;

import io.nextweb.Node;
import io.nextweb.Query;
import io.nextweb.Session;

public class GameData {

	public static void writeCaseData(Session session, Node node) {

		Types t = new Types(session);

		// ---------
		// CASE 1 STARBUCKS

		Query case1 = node.append("c1", "./c1");

		Case1Starbucks.defineCase1Starbucks(t, case1);

		// ---------
		// CASE 2 NIKE

		Query case2 = node.append("c2", "./c2");

		Case2Nike.defineCase2Nike(t, case2);

		session.commit().get();

	}
}
