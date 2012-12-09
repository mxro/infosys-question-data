package com.appjangle.i110.data;

import io.nextweb.Link;
import io.nextweb.Node;
import io.nextweb.Query;
import io.nextweb.Session;

public class CaseData {

	public static void writeCaseData(Session session, Node node) {

		// required data types
		
		Link brandName = session.node(Types.aBrandName);
		Link vision = session.node(Types.aVision);
		Link brandImage = session.node(Types.aBrandImage);
		Link brandVideo = session.node(Types.aBrandVideo);

		// game 1 types
		Link correctStrategy = session.node(Types.aCorrectStrategy);
		Link strategyJustification = session.node(Types.aStrategyJustification);

		// game 2 types
		Link correctIndustryStructure = session
				.node(Types.aCorrectIndustryStructure);
		Link threatOfSubsitutes = session
				.node(Types.aThreatOfSubsitutesDescription);
		Link supplierPower = session.node(Types.aSupplierPowerDescription);
		Link rivarly = session.node(Types.aRivalryAmongCompetitorsDescription);
		Link buyerPower = session.node(Types.aBuyerPowerDescription);
		Link newEntrants = session.node(Types.aThreatofNewEntrantsDescription);

		// game 3 types
		Link correctValueChainActivites = session
				.node(Types.correctValueChainActivites);
		Link valueChainJustification = session
				.node(Types.valueChainJustification);

		// ---------
		// CASE 1 STARBUCKS
		
		Query case1 = node.append("c1", "./c1");
		
		// Common case data
		case1.append("Starbucks", "./brandName").append(brandName);
		case1.append(
				"http://hollywoodandswine.com/wp-content/uploads/2012/03/Starbucks-2.jpg",
				"./brandImage").append(brandImage);
		case1.append(
				"http://www.youtube.com/watch?v=JagNph-q9LU&feature=relmfu",
				"./brandVideo").append(brandVideo);
		case1.append(
				"To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time.",
				"./brandVision").append(vision);

		// Game 1, Strategy

		case1.append("differentiation", "./correctStrategy").append(
				correctStrategy);

		case1.append(
				"Justification: Starbucks has a focus on high quality and customer service, indicative of a high cost strategy. They also market to all customers of the café industry, which is broad market.",
				"./strategyJustification").append(strategyJustification);

		// Game 2, Porter's five forces

		// see
		// http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry_Structure
		case1.append("high:low:high:high:high", "./industryStructure").append(
				correctIndustryStructure);

		case1.append(
				"A substitute to the café industry is to prepare food and drink at home, or purchase from a supermarket.",
				"./threatOfSubsitutes").append(threatOfSubsitutes);

		case1.append(
				"Suppliers provide mainly commodity products, such as milk and coffee beans, where there are plenty of alternative suppliers to choose from.",
				"./supplierPower").append(supplierPower);

		case1.append(
				"There are many participants in this industry, all doing similar things. Rivalry can be reduced through innovation and differentiation.",
				"./rivarly").append(rivarly);

		case1.append(
				"Buyer power can be reduced through loyalty programmes, product differentiation, and switching costs.",
				"./buyerPower").append(buyerPower);

		case1.append(
				"There are low start-up costs required to enter the cafe industry.",
				"./newEntrants").append(newEntrants);

		// Game 3, Value chain

		case1.append("procurement,makeProjectOrService,technologyDevelopment",
				"./valueChainActivites").append(correctValueChainActivites);

		case1.append(
				"Procurement: Starbucks needs to get the best quality, certified fairtrade coffee beans.\n"
						+ "Make the product or service: Starbucks’ strategy involves quality, and pleasing people – this is achieved through providing the best possible cup of coffee\n"
						+ "Research and Development: In order to differentiate their product, and compete with rivals,  Starbucks must continually produce new offerings. ",
				"./valueChainJustification").append(valueChainJustification);
		
		System.out.println("all appended!");
		session.commit().get();

	}
}
