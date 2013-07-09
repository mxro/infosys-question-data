package com.appjangle.i110.data.cases;

import io.nextweb.Query;

import com.appjangle.i110.data.Types;

public class Case15Sky {
	public static void injectData(Types t, Query c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case15-sky -->
// https://docs.google.com/spreadsheet/ccc?key=0AtPhkJX5BurudGM2NWlzTVNfaHJJSkpKbFdUWW1IZUE
c.append("Sky TV", "./brandName").append(t.brandName);
c.append("To be the pre-eminent pay television broadcasting service in New Zealand", "./vision").append(t.vision);
c.append("http://www.skytv.co.nz/Portals/0/skyhappylogo.gif", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=kxl3yAXHryY", "./brandVideo").append(t.brandVideo);
c.append("NZ Pay Television Industry", "./industry").append(t.industry);

c.append("Differentiation:", "./correctStrategy").append(t.correctStrategy);
c.append("Broad scope:  Aimed at everyone in New Zealand.  Over half of NZ households have Sky.", "./competitiveScope").append(t.competitiveScope);
c.append("High cost:  Sky TV offers a premium service and charges accordingly.", "./costStrategy").append(t.costStrategy);

c.append("high: high: low: low: low", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("High:  There are many other entertainment sources.  Online streaming of events is a major potential disruptor of the pay tv industry.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("High:  PayTV has to source premium content - primarily sport and movies.  The provider of these can and do charge a premium for access.", "./supplierPower").append(t.supplierPower);
c.append("Low:  There are a few pay TV providers in NZ but the market is so dominated by Sky TV that there is relatively little competition.", "./rivarly").append(t.rivarly);
c.append("Low:  Buyer power is currently low as there are no alternatives if you want access to pay content such as sports but the internet has the potential to change this.", "./buyerPower").append(t.buyerPower);
c.append("Low:  Sky's dominance of the market and deep pockets make the chances of success of a new entrant minimal.", "./newEntrants").append(t.newEntrants);

c.append("procurement,makeProjectOrService, delivery", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Procurement: SkyTV needs to get access to premium shows and sports content.  Make the product or service: SkyTV has to package the shows that they have into coherent content streams. Delivery:  SkyTV has to ensure that the shows screen on time especially live sports.  ", "./valueChainJustification").append(t.valueChainJustification);

c.append("Create Daily Program", "./processName").append(t.processName);
c.append("SkyTV has to package the shows that they have into coherent content streams", "./importantProcess").append(t.importantProcess);
c.append("Select Shows to be shown: Schedule Shows: Publish content stream", "./processSteps").append(t.processSteps);

c.append("SCM:Accounting System:Accounting DSS System", "./systems").append(t.systems);
c.append("Manufacturing:Accounting:Manufacturing management", "./orgUnits").append(t.orgUnits);

// <!-- one.end -->
	}
}
