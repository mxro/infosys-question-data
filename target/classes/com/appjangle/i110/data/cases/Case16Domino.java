package com.appjangle.i110.data.cases;

import io.nextweb.Query;

import com.appjangle.i110.data.Types;

public class Case16Domino {
	public static void injectData(Types t, Query c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case16-domino -->

// https://docs.google.com/spreadsheet/ccc?key=0AtPhkJX5BurudHdlWFhZeE1QZWU4RFIxSm9LSEcyS2c

c.append("Domino's Pizza", "./brandName").append(t.brandName);
c.append("Sell more Pizza, have more fun!", "./vision").append(t.vision);
c.append("https://dl.dropboxusercontent.com/u/7045962/Vision2ActionLogos/dominos.png", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=YyZNNmgAAtA", "./brandVideo").append(t.brandVideo);
c.append("Fast food industry", "./industry").append(t.industry);

c.append("Cost Leadership", "./correctStrategy").append(t.correctStrategy);
c.append("Domino's would like to to sell pizzas to everyone in the fast food market.", "./competitiveScope").append(t.competitiveScope);
c.append("Domino's markets itself as a low cost pizza option.", "./costStrategy").append(t.costStrategy);

c.append("high:low:high:high:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("There are many substitutes to fast food.  Any home cooked meal or higher end restaurant meal would count.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("The ingredients for fast food are typicall easily sourced and widely available.", "./supplierPower").append(t.supplierPower);
c.append("Rivalry is intense in the fast food industy as there are a huge amount of players in the market.", "./rivarly").append(t.rivarly);
c.append("Buyer power is high as buyers have a huge number of choices to choose from.", "./buyerPower").append(t.buyerPower);
c.append("It is very easy to enter the fast food market as little capital or specialised knowledge is required.", "./newEntrants").append(t.newEntrants);

c.append("marketing, procurement, makeProjectOrService", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Domino's is in an intensely competitive environment so marketing it's products is vital.  It also has to source low cost yet high quality ingredients so procurement is very important.  Customers also expect their pizza to be perfect so making the product is important.", "./valueChainJustification").append(t.valueChainJustification);

c.append("Raw materials sourcing process", "./processName").append(t.processName);
c.append("The quality and cost of raw ingredients is vital to Domino's as they need to source low cost yet high quality ingredients.", "./importantProcess").append(t.importantProcess);
c.append("Obtain quotes from suppliers:Compare quotes:Select best supplier", "./processSteps").append(t.processSteps);

c.append("Supply Chain Management System:Supplier Analysis System:Supplier Analysis System", "./systems").append(t.systems);
c.append("Manufacturing:Accounting:Manufacturing management", "./orgUnits").append(t.orgUnits);

// <!-- one.end -->
	}
}
