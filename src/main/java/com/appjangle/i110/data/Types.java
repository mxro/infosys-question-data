package com.appjangle.i110.data;

import io.nextweb.Link;
import io.nextweb.Session;

public class Types {

	public Link brandName;

	public Link vision;

	public Link brandImage;

	public Link brandVideo;

	public Link industry;

	public Link correctStrategy;

	public Link competitiveScope;

	public Link costStrategy;

	public Link correctIndustryStructure;

	public Link threatOfSubsitutes;

	public Link supplierPower;

	public Link rivarly;

	public Link buyerPower;

	public Link newEntrants;

	public Link correctValueChainActivites;

	public Object valueChainJustification;

	public Types(Session session) {
		// required data types

		brandName = session.node(Types.aBrandName);
		vision = session.node(Types.aVision);
		brandImage = session.node(Types.aBrandImage);
		brandVideo = session.node(Types.aBrandVideo);
		industry = session.node(Types.anIndustry);

		// game 1 types
		correctStrategy = session.node(Types.aCorrectStrategy);
		competitiveScope = session.node(Types.aCompetitiveScope);
		costStrategy = session.node(Types.aCostStrategy);

		// game 2 types
		correctIndustryStructure = session
				.node(Types.aCorrectIndustryStructure);
		threatOfSubsitutes = session.node(Types.aThreatOfSubsitutesDescription);
		supplierPower = session.node(Types.aSupplierPowerDescription);
		rivarly = session.node(Types.aRivalryAmongCompetitorsDescription);
		buyerPower = session.node(Types.aBuyerPowerDescription);
		newEntrants = session.node(Types.aThreatofNewEntrantsDescription);

		// game 3 types
		correctValueChainActivites = session
				.node(Types.aCorrectValueChainActivites);
		valueChainJustification = session.node(Types.aValueChainJustification);
	}

	/**
	 * @see <a
	 *      href="http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Question_Bag">Question
	 *      Bag Repository type</a>
	 */
	public static final String aQuestionBag = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Question_Bag";

	public static final String aStrategyQuadrantQuestion = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Strategy_Quadrant_Questi";

	public static final String aBrandName = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Brand_Name";

	public static final String aVision = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Vision";

	public static final String aBrandImage = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Brand_Image";

	public static final String aBrandVideo = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Video_Link";

	public static final String anIndustry = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry";

	// Game 1

	public static final String aCorrectStrategy = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Correct_Strategy";

	public static final String aCompetitiveScope = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Competitive_Scope";

	public static final String aCostStrategy = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Cost_Strategy";

	// Game 2

	public static final String aCorrectIndustryStructure = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry_Structure";

	public static final String aThreatOfSubsitutesDescription = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Threat_of_Substitutes";

	public static final String aRivalryAmongCompetitorsDescription = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Rivalry_Among_Competitors";

	public static final String aThreatofNewEntrantsDescription = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Threat_of_New_Entrants";

	public static final String aBuyerPowerDescription = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Buyer_Power";

	public static final String aSupplierPowerDescription = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Supplier_Power";

	// Game 3

	public static final String aCorrectValueChainActivites = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Value_Chain_Activites";

	public static final String aValueChainJustification = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Activities_Justiciation";
}
