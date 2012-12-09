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
		Link industry = session.node(Types.anIndustry);

		// game 1 types
		Link correctStrategy = session.node(Types.aCorrectStrategy);
		Link competitiveScope = session.node(Types.aCompetitiveScope);
		Link costStrategy = session.node(Types.aCostStrategy);

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
		case1.append("Cafe industry", "./industry");

		// Game 1, Strategy

		case1.append("differentiation", "./correctStrategy").append(
				correctStrategy);

		case1.append(
				"Starbucks markets to all customers of the cafe industry, which is broad market.",
				"./competitveScope").append(competitiveScope);

		case1.append(
				"Starbucks has a focus on high quality and customer service, indicative of a high cost strategy.",
				"./costStrategy").append(costStrategy);

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

		// see http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Value_Chain_Activites
		case1.append("procurement,makeProjectOrService,technologyDevelopment",
				"./valueChainActivites").append(correctValueChainActivites);

		case1.append(
				"Procurement: Starbucks needs to get the best quality, certified fairtrade coffee beans.\n"
						+ "Make the product or service: Starbucks’ strategy involves quality, and pleasing people – this is achieved through providing the best possible cup of coffee\n"
						+ "Research and Development: In order to differentiate their product, and compete with rivals,  Starbucks must continually produce new offerings. ",
				"./valueChainJustification").append(valueChainJustification);

		// ---------
		// CASE 2 NIKE

		Query case2 = node.append("c2", "./c2");

		// Common case data
		case2.append("Nike", "./brandName").append(brandName);
		case2.append("http://vince08.edublogs.org/files/2008/11/logonike.gif",
				"./brandImage").append(brandImage);
		case2.append("http://www.youtube.com/watch?v=45mMioJ5szc",
				"./brandVideo").append(brandVideo);
		case2.append(
				"To bring inspiration and innovation to every athlete* in the world.",
				"./brandVision").append(vision);
		case2.append("Sporting Apparel Footwear and Accessories", "./industry");

		// Game 1, Strategy

		case2.append("differentiation", "./correctStrategy").append(
				correctStrategy);

		case2.append(
				"Broad market – Nike appeals to a wide range of diverse consumers at all ends of the spectrum.",
				"./competitveScope").append(competitiveScope);

		case2.append(
				"High cost – Nike sells high quality products and therefore can sell at inflated prices. It also attempts to use its brand name as a distinctive selling point.",
				"./costStrategy").append(costStrategy);

		// Game 2, Porter's five forces

		// see
		// http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry_Structure
		case2.append("low:low:high:high:high", "./industryStructure").append(
				correctIndustryStructure);

		case2.append(
				"In this day and age where nearly everyone who engages in physical activity ‘must have’ appropriate gear, there is no adequate substitute for sporting apparel footwear.",
				"./threatOfSubsitutes").append(threatOfSubsitutes);

		case2.append(
				"Most of the raw materials used in this industry are not difficult to procure, and are widely available.",
				"./supplierPower").append(supplierPower);

		case2.append(
				"There is a lot of competition between the already established companies as they have to distinguish between very similar products. Brand loyalty is very high and so competitors struggle to gain market share.",
				"./rivarly").append(rivarly);

		case2.append(
				"In this day and age there are many players in the industry that make what are traditionally similar products. However the players in the industry seek to reduce this by product innovation.",
				"./buyerPower").append(buyerPower);

		case2.append(
				"The technology behind the apparel can be easily manufactured. However, the existing brand loyalty shown by customers will make it extremely hard for any new entrant to gain traction once in the market place.",
				"./newEntrants").append(newEntrants);

		// Game 3, Value chain

		// see http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Value_Chain_Activites
		case2.append("marketing,makeProjectOrService,technologyDevelopment",
				"./valueChainActivites").append(correctValueChainActivites);

		case2.append(
				"Market and Sell the Product or Service: As shown in the video above, Nike relies on its marketing to enhance its famous brand image (which is its highest selling point). Nike focuses on the importance of self-belief and true effort in order to be the best, and attempts to show how their products can take you there.\n"
						+ "Make the product or service: Nike has to ensure that its products are of the highest quality to ensure that it stands up to the image that it portrays in its marketing strategy.\n"
						+ "Research and Development: In order to differentiate their product, and compete with rivals, Nike must continually produce new offerings. ",
				"./valueChainJustification").append(valueChainJustification);

		session.commit().get();

	}
}
