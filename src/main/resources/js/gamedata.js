// <!-- one.upload https://u1.linnk.it/qc8sbw/usr/apps/textsync/docs/110-game-data -->

(function(Nextweb) {

	window.gamedata = window.gamedata || {}, priv = {};
	
	
	priv.defineCase1Starbucks = function (t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/docs/case1-starbucks -->
// Common case data
c.append("Starbucks", "./brandName").append(t.brandName);
c.append(
        "http://hollywoodandswine.com/wp-content/uploads/2012/03/Starbucks-2.jpg",
        "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=JagNph-q9LU&feature=relmfu",
        "./brandVideo").append(t.brandVideo);
c.append(
        "To inspire and nurture the human spirit - one person, one cup and one neighborhood at a time.",
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
        "A substitute to the cafe industry is to prepare food and drink at home, or purchase from a supermarket.",
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
                + "Make the product or service: Starbucks' strategy involves quality, and pleasing people - this is achieved through providing the best possible cup of coffee\n"
                + "Research and Development: In order to differentiate their product, and compete with rivals,  Starbucks must continually produce new offerings. ",
        "./valueChainJustification").append(t.valueChainJustification);
        
        
//Game 4, Business Process


c.append("Raw materials sourcing process").append(t.processName);
c.append(
        "The quality of coffee beans is very important for Starbucks. They need to select the hightest quality suppliers in order to be able to produce the best coffee ground.")
        .append(t.importantProcess);
c.append(
        "Obtain quotes from suppliers:Compare quotes:Select best supplier")
        .append(t.processSteps);

// Game 5, Systems and Org Units
c.append(
        "SCM:Accounting System:Accounting DSS System")
        .append(t.systems);
c.append("Manufacturing:Accounting:Manufacturing management").append(
        t.orgUnits);
        
// <!-- one.end -->
	};
	
	
	
	priv.defineCase2Nike = function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/docs/case2-nike -->
// Common case data
c.append("Nike", "./brandName").append(t.brandName);
c.append("http://vince08.edublogs.org/files/2008/11/logonike.gif",
        "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=45mMioJ5szc",
        "./brandVideo").append(t.brandVideo);
c.append(
        "To bring inspiration and innovation to every athlete in the world.",
        "./brandVision").append(t.vision);
c.append("Sporting Apparel Footwear and Accessories", "./industry").append(t.industry);

// Game 1, Strategy

c.append("differentiation", "./correctStrategy").append(
        t.correctStrategy);

c.append(
        "Broad market: Nike appeals to a wide range of diverse consumers at all ends of the spectrum.",
        "./competitveScope").append(t.competitiveScope);

c.append(
        "High cost: Nike sells high quality products and therefore can sell at inflated prices. It also attempts to use its brand name as a distinctive selling point.",
        
        "./costStrategy").append(t.costStrategy);

// Game 2, Porter's five forces

// see
// http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry_Structure
c.append("low:low:high:high:high", "./industryStructure").append(
        t.correctIndustryStructure);

c.append(
        "In this day and age where nearly everyone who engages in physical activity 'must have' appropriate gear, there is no adequate substitute for sporting apparel footwear.",
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

// see http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Value_Chain_Activites
c.append("marketing,makeProjectOrService,technologyDevelopment",
        "./valueChainActivites").append(t.correctValueChainActivites);

c.append(
        "Market and Sell the Product or Service: As shown in the video above, Nike relies on its marketing to enhance its famous brand image (which is its highest selling point). Nike focuses on the importance of self-belief and true effort in order to be the best, and attempts to show how their products can take you there.\n"
                + "Make the product or service: Nike has to ensure that its products are of the highest quality to ensure that it stands up to the image that it portrays in its marketing strategy.\n"
                + "Research and Development: In order to differentiate their product, and compete with rivals, Nike must continually produce new offerings. ",
        "./valueChainJustification").append(t.valueChainJustification);
        
// Game 4, Business Process


c.append("Manufacturing Process").append(t.processName);
c.append(
        "The Manufacturing Process is important for Nike as they must ensure that their products are constantly of the highest standard available. This process therefore concerns the direct manufacturing of the product, but also the quality testing that needs to be done in order to ensure its products are of the highest quality.")
        .append(t.importantProcess);
c.append(
        "Receive Manufacturing Request:Make Product:Test for Quality")
        .append(t.processSteps);

// Game 5, Systems and Org Units
c.append(
        "Inventory Management System:Product Specification System:Quality Control System")
        .append(t.systems);
c.append("Factory Clerk:Factory Labourer:Supervisor").append(
        t.orgUnits);
// <!-- one.end -->
	};

	priv.defineCase3 =  function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case3-michael-hill -->

c.append("Michael Hill", "./brandName").append(t.brandName);
c.append("To be the most people focused Jeweller in the world. ", "./vision").append(t.vision);
c.append("http://static.ipaustralia.com.au/store3/11/64/1164788.1.high.jpg", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=x_9z4QSBGQo", "./brandVideo").append(t.brandVideo);
c.append("Retail Fine Jewellery Industry ", "./industry").append(t.industry);

c.append("costLeadership", "./correctStrategy").append(t.correctStrategy);
c.append("Broad market: Michael Hill aims to make high-end jewellery accessible to every New Zealander, as evidenced by saturation marketing and high-profile stores in suburban malls. ", "./competitiveScope").append(t.competitiveScope);
c.append("Low Cost: Despite jewellery appearing expensive, in the retail fine jewellery industry Michael Hill is a cheaper brand. Costs are reduced by mass manufacturing in third world countries, rather than individual craftmanship in New Zealand. ", "./costStrategy").append(t.costStrategy);

c.append("high:high:high:low:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("A substitute to fine jewellery is costume jewellery, or second-hand jewellery.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("DeBeers, one of the sellers of diamonds, has huge power and controls the flow of diamonds into the market. (http://www.photopla.net/wwp0503/supplier.php). They supply half the world�s diamonds by value and can name their price. (http://www.slideshare.net/ebayworld/blue-nile-paper). Gold is a commodity, however the price for this is set by world markets in which Michael Hill has very little influence.", "./supplierPower").append(t.supplierPower);
c.append("There are no switching costs, and as each item of jewellery is different, product differentiation does not apply. The focus is on the retailer getting the customer in the door, and keeping them from visiting the competition. This is achieved through eye-catching window displays, repeat purchase lines, and advertising.", "./rivarly").append(t.rivarly);
c.append("Customers are less price sensitive in this industry than others, as it can be hard to know a base price for a specific piece. Retailers mark up diamonds between 50 and 200 percent and 100 to 400 percent for gold. This industry is focused on service, and major players use slogans containing 'Trust' and 'people focused'", "./buyerPower").append(t.buyerPower);
c.append("There are low start up costs for opening a retail fine jewellery store, other than purchase of inventory. This does not include the manufacture of jewellery, which is a different industry. ", "./newEntrants").append(t.newEntrants);

c.append("procurement,marketing,makeProjectOrService", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Procurement: As the market for precious gems is highly-controlled, MH must use their bulk-buying power to purchase the raw materials needed for jewellery production, at the best price in order to follow their cost leadership strategy.\n"+
 "Market and Sell: As MH wants to be people-focused, they need to deliver this message through their marketing in order to reach their target customer, then offer the people-based service through the sale process.\n"+
 "Make: As the fine jewellery industry has a perception of luxury, MH must create high quality pieces, while still maintaining costs. Customers expect quality that will last in their pieces.", 
 "./valueChainJustification").append(t.valueChainJustification);
 

c.append("Pricing Process", "./processName").append(t.processName);
c.append("This process adds value for Michael Hill as the markup on items determines the profit margin the business will make.  There is a fine line between to little and too much, as Michael Hill needs to offer the bet prices, while still making a profit.", "./importantProcess").append(t.importantProcess);
c.append("Cost the Item:Add markup System:Record sales price of inventory", "./processSteps").append(t.processSteps);

c.append("Accounting System:Accounting System:Inventory management system", "./systems").append(t.systems);
c.append("Accounting:Accounting:Sales", "./orgUnits").append(t.orgUnits);


// <!-- one.end -->
	};
	
	priv.defineCase4AucklandZoo =  function(t, c) { 
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case4-auckland-zoo -->

c.append("Auckland Zoo", "./brandName").append(t.brandName);
c.append("A future where people value wildlife, and species are safe from extinction.", "./vision").append(t.vision);
c.append("http://www.isitemedia.co.nz/user_files/Sponsorship/zoologo.jpg", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=pVstbADVT_U", "./brandVideo").append(t.brandVideo);
c.append("The Zoo Industry", "./industry").append(t.industry);

c.append("differentiation", "./correctStrategy").append(t.correctStrategy);
c.append("Broad Market: The Zoo targets all customers in the industry, by having a borad range of animals on exhibition, and offering events such as Zoo music and hire for Corporate Functions.", "./competitiveScope").append(t.competitiveScope);
c.append("High Cost: As a non-profit organisation, Auckland Zoo depends on donations as well as income from visitors in order to cover costs. The strategy is differentiation, as the Zoo attempts to provide a unique point of difference to donors as well as visitors, from other organisations within their industry", "./costStrategy").append(t.costStrategy);

c.append("high:high:low:low:low", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("A substitute to visiting a zoo would be to watch a nature documentary (easier), or visit the animals in their natural habitat (harder).", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("Zoos are supplied with animals, which need to be appropriately bred and selected. There is often a focus on endangered animals and conservation, so finding endangered species to house is also difficult.", "./supplierPower").append(t.supplierPower);
c.append("Each zoo is very different due to a different array of animals and exhibits. Some zoos have specific well-known animals that attract visitors.", "./rivarly").append(t.rivarly);
c.append("In New Zealand there are few choices of zoos. Each zoo is very different, so consumers do not get the same experience at different venues, and even on different visits.", "./buyerPower").append(t.buyerPower);
c.append("Because the supplier power is so high, as well as the infrastructure, training and resource costs, there is little chance of a large scale competitor entering the market. Smaller, native-species zoos pose a higher threat.", "./newEntrants").append(t.newEntrants);

c.append("firmInfrastructure,delivery,afterSales", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Infrastructure: The zoo covers a wide land area, and houses many different creatures. The physical buildings and land give value by adding to the experience for the visitor: to see wildlife in what is close to their natural habitat, while feeling safe and secure.\n"+
"Deliver the service: Visitors attend the zoo to experience the animals in their natural habitat. Value is added when they are able to see them interaction (rather than sleeping or hiding), and hear from the keepers.\n"+
"Service after the Sale: The value for the zoo is in a return visit for the customer. Programs such as Friends of the Zoo and Adopt-an-animal help to ensure there is an engagement and repeat visit from their customers.",
 "./valueChainJustification").append(t.valueChainJustification);

c.append("Facility Maintenance Process", "./processName").append(t.processName);
c.append("All facilities and exhibits are regularly maintained so as to remain safe and tidy for both visitors and animals. This process involves regular scheduling and recording of maintenance work, and includes a method of notifying teams when maintenance is due to occur, or needs performing. Value is added as the zoo maintains a clean, tidy and safe appeal.", "./importantProcess").append(t.importantProcess);
c.append("Notify scheduled maintenance:Order maintenance materials:Record maintenance performed", "./processSteps").append(t.processSteps);

c.append("ERP System:Inventory Management System:ERP System", "./systems").append(t.systems);
c.append("Maintenance:Maintenance, Accounting, Warehouse:Maintenance", "./orgUnits").append(t.orgUnits);


// <!-- one.end -->
		
	};
	
	priv.defineCase5Countdown = function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case5-countdown -->

c.append("Countdown", "./brandName").append(t.brandName);
c.append("Shop Smarter. ", "./vision").append(t.vision);
c.append("http://www.nzsca.org.nz/upload/content/CD_MS_H_Pos_cmyk%20web.jpg", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=aSuaTaefvpg", "./brandVideo").append(t.brandVideo);
c.append("Supermarket Industry", "./industry").append(t.industry);

c.append("costLeadership", "./correctStrategy").append(t.correctStrategy);
c.append("Broad market: Countdown targets all customers in the industry through the use of their advertising such as weekend windbacks (customers looking for bargains), Masterchef cooking demos (adventurous foodies), and the Colemans (the everyday New Zealand family)", "./competitiveScope").append(t.competitiveScope);
c.append("Low cost: As a large, multi-stored supermarket, Countdown uses its significant buying-power to offer customers the best price for their food.", "./costStrategy").append(t.costStrategy);

c.append("low:low:high:high:low", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("A substitute to a supermarket would be a greengrocer, or a convenience store, but neither of these offer the range that a supermarket does.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("Supermarkets buy in huge bulk quantities so are able to negotiate a good price with suppliers. Suppliers also often sell commodity products so supermarkets have many options to choose from.", "./supplierPower").append(t.supplierPower);
c.append("The NZ industry is dominated by 4 major players.  As they mostly sell the same items, the focus becomes on advertising the latest specials and offering incentives to gain business.", "./rivarly").append(t.rivarly);
c.append("Low switching costs. Companies sell the same products, so competition is based primarily on price and brand image.", "./buyerPower").append(t.buyerPower);
c.append("There are minimal startup costs to establish a small grocery store. However as the industry is dominated by 4 large companies the ability to gain market share would be doubtful.", "./newEntrants").append(t.newEntrants);

c.append("procurement,firmInfrastructure,marketing", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Procurement: As competition is based on price and margins are narrow, it is essential that a supermarket can source and negotiate the best merchandise and ideal quantity, at the best price.\n"
+"Infrastructure: Supermarkets provide convenience to consumers, and a good facility and location adds value.\n"+
"Market and sell: Supermarkets spend considerable amounts on print and television advertising in order to attract customers based on their specials.", 
"./valueChainJustification").append(t.valueChainJustification);

c.append("Inventory Order Process", "./processName").append(t.processName);
c.append("This process adds value for Countdown as it is imperative they are never out of stock of items. Inventory must be ordered at an appropriate time so as to not have too much in stock and it go off, and to have enough to meet the customers needs.", "./importantProcess").append(t.importantProcess);
c.append("Notify inventory is below re-order level:Place inventory order:Record arrival of inventory", "./processSteps").append(t.processSteps);

c.append("Inventory Management System:SCM:Inventory Management System", "./systems").append(t.systems);
c.append("Purchasing:Purchasing:Warehouse/Inbound Logistics/Inwards Goods", "./orgUnits").append(t.orgUnits);


// <!-- one.end -->
	};
	
	priv.defineCase6RainbowsEnd = function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/rainbows-end -->

c.append("Rainbows End", "./brandName").append(t.brandName);
c.append("New Zealand's premier theme park", "./vision").append(t.vision);
c.append("http://rainbowsend.co.nz/template/imgs/rainbows-end-logo.png", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=P3mMPh59ryU", "./brandVideo").append(t.brandVideo);
c.append("Theme Park Industry", "./industry").append(t.industry);

c.append("differentiation", "./correctStrategy").append(t.correctStrategy);
c.append("Broad Market: Rainbows End appeals to all customers purchasing in the theme park industry.", "./competitiveScope").append(t.competitiveScope);
c.append("High cost. As the industry is very small in New Zealand, there is no apparent competition on price and Rainbows End can charge what they like.", "./costStrategy").append(t.costStrategy);

c.append("high:high:low:low:low", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("The theme park industry provides a thrilling experience. This can be substituted by the adventure tourism industry, in the form of extreme sports such as white water rafting, bungee jumping and sky-diving, which in New Zealand are in ready supply.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("Rides are supplied by international manufacturing companies. As each ride is unique between manufacturers, theme parks have low purchasing power.", "./supplierPower").append(t.supplierPower);
c.append("Competitors are separated geographically, and in New Zealand there are only two.", "./rivarly").append(t.rivarly);
c.append("There are minimal parks to choose from, each offering completely different rides and attractions. Customers pay for an experience which is hard to place a definitive monetary value on.", "./buyerPower").append(t.buyerPower);
c.append("A theme park needs resource consent, a large land area, and has huge initial capital investment costs.", "./newEntrants").append(t.newEntrants);

c.append("firmInfrastructure,delivery,marketing", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Infrastructure: Rides must be well-maintained and meet safety standards. They are the revenue and value-generating component of the business.\n"
+"Deliver the Service: Value is generated for Rainbows End by providing a quality and trustworthy service to the public.\n"
+"Market and Sell the Service: Customers are a vital component of Rainbows End's revenue generation and this activity adds value for Rainbows End as marketing e.g. promoting new rides or activities and selling Rainbows End's services means reaching more customers and therefore generating more revenue.", 
"./valueChainJustification").append(t.valueChainJustification);

c.append("Sales Analysis Process", "./processName").append(t.processName);
c.append("This process adds value for Rainbows End, as analysis of sales data can show whether they are meeting financial targets, and provide an indication of a need for a new marketing strategy, such as the recent 'Night Rides', to attract more customers.", "./importantProcess").append(t.importantProcess);
c.append("Receive daily sales printout:Analyse data against forecasts and trends:Use information for future financial planning", "./processSteps").append(t.processSteps);

c.append("Accounting System:ERP System:DSS System (ERP)", "./systems").append(t.systems);
c.append("Accounting:Accounting:Board of Directors", "./orgUnits").append(t.orgUnits);


// <!-- one.end -->
	};
	
	window.gamedata.createTypes = function(session) {
		var t = {};
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/docs/110-types -->
// required data types
t.brandName = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Brand_Name");
t.vision = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Vision");
t.brandImage = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Brand_Image");
t.brandVideo = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Video_Link");
t.industry = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry");

// game 1 types
t.correctStrategy = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Correct_Strategy");
t.competitiveScope = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Competitive_Scope");
t.costStrategy = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Cost_Strategy");

// game 2 types
t.correctIndustryStructure = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Industry_Structure");
t.threatOfSubsitutes = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Threat_of_Substitutes");
t.supplierPower = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Supplier_Power");
t.rivarly = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Rivalry_Among_Competitors");
t.buyerPower = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Buyer_Power");
t.newEntrants = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Threat_of_New_Entrants");

// game 3 types
t.correctValueChainActivites = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Value_Chain_Activites");
t.valueChainJustification = session
        .node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Activities_Justiciation");
        
// game 4 types
t.processName = session.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Business_Process_Question/Process_Name");
t.importantProcess = session.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Business_Process_Question/Important_Process");
t.processSteps = session.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Business_Process_Question/Steps");

// game 5 types
t.systems = session.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Systems_Question/Systems");
t.orgUnits = session.node("http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Systems_Question/Organizational_Units");
// <!-- one.end -->
		return t;
	};
	
	window.gamedata.writeCaseData = function(session, node, onSuccess) {
		
		node.get(function(node) {
			var t = window.gamedata.createTypes(session);
			
			var case1 = node.append("c1", "./c1");
			
			priv.defineCase1Starbucks(t, case1);
			

			
			var case2 = node.append("c2", "./c2");
			
			priv.defineCase2Nike(t, case2);
			
			var case3 = node.append("c3", "./c3");
			
			priv.defineCase3(t, case3);
			
			//var case3MH = node.append("c3". "./c3");
			
			//priv.defineCase3MichaelHill(t, case3MH);
			
			var case4 = node.append("c4", "./c4");
			
			priv.defineCase4AucklandZoo(t, case4);
			
			var case5 = node.append("c5", "./c5");
			
			priv.defineCase5Countdown(t, case5);
			
			var case6 = node.append("c6", "./c6");
			
			priv.defineCase6RainbowsEnd(t, case6);
			
			session.commit().get(function(success) {
			
				onSuccess();
			});
		});
		
		
	};
	
	
})(window.Nextweb);

// <!-- one.end -->
