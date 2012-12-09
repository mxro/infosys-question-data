package com.appjangle.i110.data;

import io.nextweb.Node;
import io.nextweb.Query;
import io.nextweb.Session;

public class CaseData {

	public static void writeCaseData(Session session, Node node) {

		Types t = new Types(session);

		// ---------
		// CASE 1 STARBUCKS

		Query case1 = node.append("c1", "./c1");

		defineCase1Starbucks(t, case1);

		// ---------
		// CASE 2 NIKE

		Query case2 = node.append("c2", "./c2");

		defineCase2Nike(t, case2);

		session.commit().get();

	}

	private static void defineCase2Nike(Types t, Query c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/docs/case2-nike -->

		// Common case data
		c.append("Nike", "./brandName").append(t.brandName);
		c.append("http://vince08.edublogs.org/files/2008/11/logonike.gif",
				"./brandImage").append(t.brandImage);
		c.append("http://www.youtube.com/watch?v=45mMioJ5szc", "./brandVideo")
				.append(t.brandVideo);
		c.append(
				"To bring inspiration and innovation to every athlete in the world.",
				"./brandVision").append(t.vision);
		c.append("Sporting Apparel Footwear and Accessories", "./industry")
				.append(t.industry);

		// Game 1, Strategy

		c.append("differentiation", "./correctStrategy").append(
				t.correctStrategy);

		c.append(
				"Broad market – Nike appeals to a wide range of diverse consumers at all ends of the spectrum.",
				"./competitveScope").append(t.competitiveScope);

		c.append(
				"High cost – Nike sells high quality products and therefore can sell at inflated prices. It also attempts to use its brand name as a distinctive selling point.",
				"./costStrategy").append(t.costStrategy);

		// Game 2, Porter's five forces

		// see
		// http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry_Structure
		c.append("low:low:high:high:high", "./industryStructure").append(
				t.correctIndustryStructure);

		c.append(
				"In this day and age where nearly everyone who engages in physical activity ‘must have’ appropriate gear, there is no adequate substitute for sporting apparel footwear.",
				"./threatOfSubsitutes").append(t.threatOfSubsitutes);

		c.append(
				"Most of the raw materials used in this industry are not difficult to procure, and are widely available.",
				"./supplierPower").append(t.supplierPower);

		c.append(
				"There is a lot of competition between the already established companies as they have to distinguish between very similar products. Brand loyalty is very high and so competitors struggle to gain market share.",
				"./rivarly").append(t.rivarly);

		c.append(
				"In this day and age there are many players in the industry that make what are traditionally similar products. However the players in the industry seek to reduce this by product innovation.",
				"./buyerPower").append(t.buyerPower);

		c.append(
				"The technology behind the apparel can be easily manufactured. However, the existing brand loyalty shown by customers will make it extremely hard for any new entrant to gain traction once in the market place.",
				"./newEntrants").append(t.newEntrants);

		// Game 3, Value chain

		// see
		// http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Value_Chain_Activites
		c.append("marketing,makeProjectOrService,technologyDevelopment",
				"./valueChainActivites").append(t.correctValueChainActivites);

		c.append(
				"Market and Sell the Product or Service: As shown in the video above, Nike relies on its marketing to enhance its famous brand image (which is its highest selling point). Nike focuses on the importance of self-belief and true effort in order to be the best, and attempts to show how their products can take you there.\n"
						+ "Make the product or service: Nike has to ensure that its products are of the highest quality to ensure that it stands up to the image that it portrays in its marketing strategy.\n"
						+ "Research and Development: In order to differentiate their product, and compete with rivals, Nike must continually produce new offerings. ",
				"./valueChainJustification").append(t.valueChainJustification);
		// <!-- one.end -->
	}

	private static void defineCase1Starbucks(Types t, Query c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/docs/case1-starbucks -->
		// Common case data
		c.append("Starbucks", "./brandName").append(t.brandName);
		c.append(
				"http://hollywoodandswine.com/wp-content/uploads/2012/03/Starbucks-2.jpg",
				"./brandImage").append(t.brandImage);
		c.append("http://www.youtube.com/watch?v=JagNph-q9LU&feature=relmfu",
				"./brandVideo").append(t.brandVideo);
		c.append(
				"To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time.",
				"./brandVision").append(t.vision);
		c.append("Cafe industry", "./industry").append(t.industry);

		// Game 1, Strategy

		c.append("differentiation", "./correctStrategy").append(
				t.correctStrategy);

		c.append(
				"Starbucks markets to all customers of the cafe industry, which is broad market.",
				"./competitveScope").append(t.competitiveScope);

		c.append(
				"Starbucks has a focus on high quality and customer service, indicative of a high cost strategy.",
				"./costStrategy").append(t.costStrategy);

		// Game 2, Porter's five forces

		// see
		// http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry_Structure
		c.append("high:low:high:high:high", "./industryStructure").append(
				t.correctIndustryStructure);

		c.append(
				"A substitute to the café industry is to prepare food and drink at home, or purchase from a supermarket.",
				"./threatOfSubsitutes").append(t.threatOfSubsitutes);

		c.append(
				"Suppliers provide mainly commodity products, such as milk and coffee beans, where there are plenty of alternative suppliers to choose from.",
				"./supplierPower").append(t.supplierPower);

		c.append(
				"There are many participants in this industry, all doing similar things. Rivalry can be reduced through innovation and differentiation.",
				"./rivarly").append(t.rivarly);

		c.append(
				"Buyer power can be reduced through loyalty programmes, product differentiation, and switching costs.",
				"./buyerPower").append(t.buyerPower);

		c.append(
				"There are low start-up costs required to enter the cafe industry.",
				"./newEntrants").append(t.newEntrants);

		// Game 3, Value chain

		// see
		// http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Value_Chain_Activites
		c.append("procurement,makeProjectOrService,technologyDevelopment",
				"./valueChainActivites").append(t.correctValueChainActivites);

		c.append(
				"Procurement: Starbucks needs to get the best quality, certified fairtrade coffee beans.\n"
						+ "Make the product or service: Starbucks’ strategy involves quality, and pleasing people – this is achieved through providing the best possible cup of coffee\n"
						+ "Research and Development: In order to differentiate their product, and compete with rivals,  Starbucks must continually produce new offerings. ",
				"./valueChainJustification").append(t.valueChainJustification);
		// <!-- one.end -->
	}
}
