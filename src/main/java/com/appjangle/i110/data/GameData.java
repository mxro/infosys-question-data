package com.appjangle.i110.data;

import io.nextweb.Node;
import io.nextweb.Query;
import io.nextweb.Session;

import com.appjangle.i110.data.cases.Case10Amazon;
import com.appjangle.i110.data.cases.Case11Orcon;
import com.appjangle.i110.data.cases.Case12Kiwibank;
import com.appjangle.i110.data.cases.Case13StateInsurance;
import com.appjangle.i110.data.cases.Case14Listerine;
import com.appjangle.i110.data.cases.Case15Sky;
import com.appjangle.i110.data.cases.Case16Domino;
import com.appjangle.i110.data.cases.Case17Dell;
import com.appjangle.i110.data.cases.Case1Starbucks;
import com.appjangle.i110.data.cases.Case2Nike;
import com.appjangle.i110.data.cases.Case3MichaelHill;
import com.appjangle.i110.data.cases.Case4AucklandZoo;
import com.appjangle.i110.data.cases.Case5Countdown;
import com.appjangle.i110.data.cases.Case6RainbowsEnd;
import com.appjangle.i110.data.cases.Case7Coke;
import com.appjangle.i110.data.cases.Case8Pandora;
import com.appjangle.i110.data.cases.Case9AjHackettBungy;

public class GameData {

	public static void writeCaseData(Session session, Node node) {

		Types t = new Types(session);

		Query case1 = node.append("c1", "./c1");
		Case1Starbucks.injectData(t, case1);

		Query case2 = node.append("c2", "./c2");
		Case2Nike.injectData(t, case2);

		Query case3 = node.append("c3", "./c3");
		Case3MichaelHill.injectData(t, case3);
		
		Query case4 = node.append("c4", "./c4");
		Case4AucklandZoo.injectData(t, case4);
		
		Query case5 = node.append("c5", "./c5");
		Case5Countdown.injectData(t, case5);
		
		Query case6 = node.append("c6", "./c6");
		Case6RainbowsEnd.injectData(t, case6);
		
		Query case7 = node.append("c7", "./c7");
		Case7Coke.injectData(t, case7);
		
		Query case8 = node.append("c8", "./c8");
		Case8Pandora.injectData(t, case8);
		
		Query case9 = node.append("c9", "./c9");
		Case9AjHackettBungy.injectData(t, case9);
		
		Query case10 = node.append("c10", "./c10");
		Case10Amazon.injectData(t, case10);
		
		Query case11 = node.append("c11", "./c11");
		Case11Orcon.injectData(t, case11);
		
		Query case12 = node.append("c12", "./c12");
		Case12Kiwibank.injectData(t, case12);
		
		Query case13 = node.append("c13", "./c13");
		Case13StateInsurance.injectData(t, case13);
		
		Query case14 = node.append("c14", "./c14");
		Case14Listerine.injectData(t, case14);
		
		Query case15 = node.append("c15", "./c15");
		Case15Sky.injectData(t, case15);
		
		Query case16 = node.append("c16", "./c16");
		Case16Domino.injectData(t, case16);
		
		Query case17 = node.append("c17", "./c17");
		Case17Dell.injectData(t, case17);
		
		session.commit().get();

	}
}
