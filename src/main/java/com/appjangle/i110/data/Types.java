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

		brandName = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Brand_Name");
		vision = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Vision");
		brandImage = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Brand_Image");
		brandVideo = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Video_Link");
		industry = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry");

		// game 1 types
		correctStrategy = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Correct_Strategy");
		competitiveScope = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Competitive_Scope");
		costStrategy = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Cost_Strategy");

		// game 2 types
		correctIndustryStructure = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry_Structure");
		threatOfSubsitutes = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Threat_of_Substitutes");
		supplierPower = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Supplier_Power");
		rivarly = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Rivalry_Among_Competitors");
		buyerPower = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Buyer_Power");
		newEntrants = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Threat_of_New_Entrants");

		// game 3 types
		correctValueChainActivites = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Value_Chain_Activites");
		valueChainJustification = session
				.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Activities_Justiciation");
	}

	/**
	 * @see <a
	 *      href="http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Question_Bag">Question
	 *      Bag Repository type</a>
	 */
	public static final String aQuestionBag = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Question_Bag";

	public static final String aStrategyQuadrantQuestion = "http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Strategy_Quadrant_Questi";

}
