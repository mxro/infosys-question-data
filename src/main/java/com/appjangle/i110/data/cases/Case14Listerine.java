package com.appjangle.i110.data.cases;

import io.nextweb.Query;

import com.appjangle.i110.data.Types;

public class Case14Listerine {
	public static void injectData(Types t, Query c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case14-listerine -->
// https://docs.google.com/spreadsheet/ccc?key=0AtPhkJX5BurudE9xWmlHS2ZHMmJjbW9iWXEwWFV3X2c
c.append("Listerine", "./brandName").append(t.brandName);
c.append("Jumpstart to a healthier mouth.", "./vision").append(t.vision);
c.append("http://www.listerine.com/sites/default/files/products/products-totalcare-fresh-mint_0.jpg", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=wiflxvRl04M", "./brandVideo").append(t.brandVideo);
c.append("Dental mouthwash industry", "./industry").append(t.industry);

c.append("differentiation", "./correctStrategy").append(t.correctStrategy);
c.append("Broad: Listerine aims at everyone who cares about oral health.", "./competitiveScope").append(t.competitiveScope);
c.append("High: Listerine promotes itself as scientifically proven to produce results and charges a premium for this.", "./costStrategy").append(t.costStrategy);

c.append("high:low:high:high:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("Toothpaste, gum, mouth spray are all substitutes to mouthwash.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("The chemical compounds that Listerine is made from are cheap and plentiful although they are sourced from hundreds of different places around the world.", "./supplierPower").append(t.supplierPower);
c.append("There are a number of companies in the mouthwash space and they compete quite intensely.", "./rivarly").append(t.rivarly);
c.append("There are a wide variety of mouthwashes and alternative dental health products available for the consumer to choose from.", "./buyerPower").append(t.buyerPower);
c.append("Any of the major toothpaste brands (as well as others) could probably find it easy to create a mouthwash.", "./newEntrants").append(t.newEntrants);

c.append("procurement,makeProjectOrService,marketing", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Procurement is important as Listerine has to source multiple ingredients from multiple sources around the world.\n"+
"Make the product is also important as the product has to be made perfectly to the formula each and every time.\n"+
"Marketing is also important as the rivalry amongst existing competitors is intense.", "./valueChainJustification").append(t.valueChainJustification);

c.append("Manufacturing process", "./processName").append(t.processName);
c.append("It is very important that Listerine makes the product perfectly right each and every time.", "./importantProcess").append(t.importantProcess);
c.append("Select Mouthwash to Manufacture:Manufacture Mouthwash:Bottle Product", "./processSteps").append(t.processSteps);

c.append("SCM:Accounting System:Accounting DSS System", "./systems").append(t.systems);
c.append("Manufacturing:Accounting:Manufacturing management", "./orgUnits").append(t.orgUnits);


// <!-- one.end -->
	}
}
