package com.appjangle.i110.data.cases;

import io.nextweb.Query;

import com.appjangle.i110.data.Types;

public class Case17Dell {
	public static void injectData(Types t, Query c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case17-dell -->
// https://docs.google.com/spreadsheet/ccc?key=0AtPhkJX5BurudHNKcHpqeDJ6VFpwSEhMZ0NGZVhyS2c

c.append("Dell", "./brandName").append(t.brandName);
c.append("The power to do more.", "./vision").append(t.vision);
c.append("https://dl.dropboxusercontent.com/u/7045962/Vision2ActionLogos/dell.png", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=yS5rHgGheHk", "./brandVideo").append(t.brandVideo);
c.append("Computer Hardware Retail and Manufacturing", "./industry").append(t.industry);

c.append("Cost Leadership", "./correctStrategy").append(t.correctStrategy);
c.append("Broad market as Dell targets both home and business buyers.", "./competitiveScope").append(t.competitiveScope);
c.append("Low as Dell aims to provide low cost computers through the power of it's supply chain efficiencies.", "./costStrategy").append(t.costStrategy);

c.append("high:low:high:high:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("Computing devices have become ubiquitous and there are no real substitutes available.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("Overall low as there are a wide variety of manufacturers making computer components.", "./supplierPower").append(t.supplierPower);
c.append("There are many participants in this industry, all doing similar things. Rivalry can be reduced through innovation and differentiation.", "./rivarly").append(t.rivarly);
c.append("Buyers have a wide variety of manufacturers that they can purchase from.", "./buyerPower").append(t.buyerPower);
c.append("It is relatively easy to get into the computer retail and manufacturing business as anyone can source components and put them together for resale.", "./newEntrants").append(t.newEntrants);

c.append("procurement,technologyDevelopment,marketing", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Procurement is vital as Dell needs to source components so that it can make the computing devices.\n"+
"Research and Technology Development is also vital as Dell needs to come up with new devices in order to attract customers.\n"+
"Marketing is vital as there are a lot of players in the industry and Dell needs to compete for market share."
, "./valueChainJustification").append(t.valueChainJustification);

c.append("Custom Manufacturing Process", "./processName").append(t.processName);
c.append("This process is important to Dell as they custom manufacture each computer for their clients.", "./importantProcess").append(t.importantProcess);
c.append("Customer phones in order:Dell manufactures computing device:The computing device is delivered.", "./processSteps").append(t.processSteps);

c.append("Order Processing System:Manufacturing Scheduling System:Logistics Management System", "./systems").append(t.systems);
c.append("Manufacturing:Accounting:Manufacturing management", "./orgUnits").append(t.orgUnits);

// <!-- one.end -->
	}
}
