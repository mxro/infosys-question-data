// <!-- one.upload https://u1.linnk.it/qc8sbw/usr/apps/textsync/docs/110-game-data -->

(function(Nextweb) {

	window.gamedata = window.gamedata || {}, priv = {};
	
	
	priv.defineCase1Starbucks = function (t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/docs/case1-starbucks -->
// Common case data
c.append("Starbucks", "./brandName").append(t.brandName);
c.append(
        "To inspire and nurture the human spirit - one person, one cup and one neighborhood at a time.",
        "./brandVision").append(t.vision);
c.append(
        "http://hollywoodandswine.com/wp-content/uploads/2012/03/Starbucks-2.jpg",
        "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=JagNph-q9LU&feature=relmfu",
        "./brandVideo").append(t.brandVideo);
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
c.append(
        "To bring inspiration and innovation to every athlete in the world.",
        "./brandVision").append(t.vision);
c.append("http://vince08.edublogs.org/files/2008/11/logonike.gif",
        "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=45mMioJ5szc",
        "./brandVideo").append(t.brandVideo);

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
c.append("DeBeers, one of the sellers of diamonds, has huge power and controls the flow of diamonds into the market. (http://www.photopla.net/wwp0503/supplier.php). They supply half the world's diamonds by value and can name their price. (http://www.slideshare.net/ebayworld/blue-nile-paper). Gold is a commodity, however the price for this is set by world markets in which Michael Hill has very little influence.", "./supplierPower").append(t.supplierPower);
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
	
	priv.defineCase7Coke = function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case7-coke -->

c.append("Coca Cola Enterprises (CCE)", "./brandName").append(t.brandName);
c.append("To refresh the world - in mind, body and spirit", "./vision").append(t.vision);
c.append("http://www.picgifs.com/wallpapers/wallpapers/coca-cola/Coca_Cola03.jpg", "./brandImage").append(t.brandImage);


c.append("http://www.youtube.com/watch?v=WVRT16-dNsw", "./brandVideo").append(t.brandVideo);
c.append("Soft drink industry", "./industry").append(t.industry);

c.append("differentiation", "./correctStrategy").append(t.correctStrategy);
c.append("Broad Market. CCE target everybody, everywhere!", "./competitiveScope").append(t.competitiveScope);
c.append("High Cost.  Coke uses it brand loyalty and market dominance to charge a premium price for it's products.  ", "./costStrategy").append(t.costStrategy);

c.append("high:low:high:high:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("People don't have to purchase soft drinks and can switch to water, tea, coffee etc.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("Suppliers provide mainly commodity products, such as sugar, cocoa, aluminium, where there are plenty of alternative suppliers for cafes to choose from.", "./supplierPower").append(t.supplierPower);
c.append("There are many participants in this industry, even though the industry is dominated by two major players (Coca Cola Enterprises and PepsiCo).", "./rivalry").append(t.rivarly);
c.append("Customers can get similar products from many sellers with little or no switching costs. Buyer power can be reduced through brand loyalty programmes.", "./buyerPower").append(t.buyerPower);
c.append("There are low start-up costs required to enter the soft drink industry although significant distribution challenges would need to be overcome.", "./newEntrants").append(t.newEntrants);

c.append("marketing,makeProjectOrService,delivery", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Market and Sell: Coke is all about brand loyalty so marketing is of the utmost importance.\n"+
        "Make the product or service:  Coke has huge product manufacturing facilities that have to churn out perfect product 24/7 in order to keep up with demand.\n"+
        "Deliver the product: Coke is sold everywhere so the logistics of delivering the product to all the resellers is of vital importance.", "./valueChainJustification").append(t.valueChainJustification);

c.append("Create Marketing Campaign", "./processName").append(t.processName);
c.append("Coke is in a fierce battle with it's rivals and has to saturate the market with advertising to maintain it's dominance.", "./importantProcess").append(t.importantProcess);
c.append("Analyse customer segment:Create creative content:Monitor campaigns", "./processSteps").append(t.processSteps);

c.append("S1:S2:S3", "./systems").append(t.systems);
c.append("O1:O2:O3", "./orgUnits").append(t.orgUnits);
// <!-- one.end -->
	};
	
	priv.defineCase8Pandora = function(t,c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case8-pandora -->

c.append("Pandora", "./brandName").append(t.brandName);
c.append("To play only music people will love", "./vision").append(t.vision);
c.append("http://cdn.thetechjournal.com/wp-content/uploads/2012/10/pandora.jpg", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=NVYHq3M1ByI", "./brandVideo").append(t.brandVideo);
c.append("Internet Radio", "./industry").append(t.industry);

c.append("costLeadership", "./correctStrategy").append(t.correctStrategy);
c.append("Pandora targets everyone who listens to music", "./competitiveScope").append(t.competitiveScope);
c.append("Pandora offers their service for free", "./costStrategy").append(t.costStrategy);

c.append("high:low:high:high:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("There are lots of alternatives to listening to music such as watching TV, Movies, browsing the web etc.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("The music labels have attempted to shut down Pandora and failed so I would suggest their power is low.  The Internet infrastructure suppliers have little power as there are many of them in the market.", "./supplierPower").append(t.supplierPower);
c.append("There are quite a few companies in the Internet radio space and they all offer their core service for free.", "./rivalry").append(t.rivarly);
c.append("Buyers can very easily switch to a rival provider.  Pandora attempts to reduce their power by using IT to make sure that customers only get music they love.", "./buyerPower").append(t.buyerPower);
c.append("There are no major impediments to starting up an online radio business.", "./newEntrants").append(t.newEntrants);

c.append("afterSales,makeProjectOrService,technologyDevelopment", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Service After The Sale is critical to Pandora to continually provide only the music that listeners love.\n"+
"Make the Product or Service is important as they need to deliver the music that listeners love when they want it.\n"+
"Technology Development is vital in that they use their music selection algorithm as their key competitive advantage over their competitors. ", "./valueChainJustification").append(t.valueChainJustification);

c.append("Acquire new music process", "./processName").append(t.processName);
c.append("Pandora has to continually add new and existing songs to it's music database for analysis and distribution to listeners.", "./importantProcess").append(t.importantProcess);
c.append("Add songs to database:Analyse songs:Generate song profiles", "./processSteps").append(t.processSteps);

c.append("S1:S2:S3", "./systems").append(t.systems);
c.append("O1:O2:O3", "./orgUnits").append(t.orgUnits);


// <!-- one.end -->
	};
	
	priv.defineCase9Bungy = function(t,c) {
		//<!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case9-aj-hackett-bungy -->


c.append("AJ Hackett Bungy", "./brandName").append(t.brandName);
c.append("Challenge drives our professional organisation.", "./vision").append(t.vision);
c.append("http://www.conventionsnz.co.nz/pics/3713,4,1,6,4,0/aj-hackett-bungy-new-zealand.jpeg", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?feature=player_embedded&v=mmrVJq4uJ0E", "./brandVideo").append(t.brandVideo);
c.append("Adventure tourism industry", "./industry").append(t.industry);

c.append("differentiation", "./correctStrategy").append(t.correctStrategy);
c.append("Broad Market. AJ Hackett targets all adventure tourists.", "./competitiveScope").append(t.competitiveScope);
c.append("High Cost. AJ Hackett offers adventure in spectacular spots.  Customers pay a premium for access to these spots.  ", "./costStrategy").append(t.costStrategy);

c.append("high:high:high:high:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("High. Although people tend to crave excitement the could get this from other entertainment such as movies etc.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("High. Adventure tourism is usually linked to a specific spot and owners of these spots have huge power.", "./supplierPower").append(t.supplierPower);
c.append("High. There are many participants in this industry such as hot air ballooning companies, guided hiking companies, skiing companies etc.", "./rivalry").append(t.rivarly);
c.append("High. There are many other sources of adventure tourism such as hot air ballooning, hiking, skiing etc.", "./buyerPower").append(t.buyerPower);
c.append("High. In tourism, new entrants always get the attention of travellers, as they have a tendency of exploring fresh destinations.", "./newEntrants").append(t.newEntrants);

c.append("makeProjectOrService:marketing:delivery", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Make the product or service: Coming up with new attractions is vital in the adventure tourism industry as tourists tend to want to try new things.\n"+
"Market and Sell: The adventure tourism industry has many players so marketing is vital.\n"+
"Deliver the product:  Safety and an awesome experience are at the heart of AJ Hackett's operations.", "./valueChainJustification").append(t.valueChainJustification);

c.append("Create New Product", "./processName").append(t.processName);
c.append("Coming up with new attractions is vital in the adventure tourism industry as tourists tend to want to try new things. ", "./importantProcess").append(t.importantProcess);
c.append("Conceptualise New Product:Product/Service Definition:Product Concept Feasibility", "./processSteps").append(t.processSteps);

c.append("S1:S2:S3", "./systems").append(t.systems);
c.append("O1:O2:O3", "./orgUnits").append(t.orgUnits);

// <!-- one.end -->
	};
	
	priv.defineCase10Amazon = function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case10-amazon -->

c.append("Amazon", "./brandName").append(t.brandName);
c.append("To be earth's most customer centric company.", "./vision").append(t.vision);
c.append("http://www.republicreport.org/wp-content/uploads/2012/04/amazonlogo.jpg", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=Ec4kWhEuhYE", "./brandVideo").append(t.brandVideo);
c.append("Global online shopping industry", "./industry").append(t.industry);

c.append("costLeadership", "./correctStrategy").append(t.correctStrategy);
c.append("Broad Market:  Amazon sells everything to everyone.  Their vision is about being 'the earth's' company.", "./competitiveScope").append(t.competitiveScope);
c.append("Low Cost: They have no physical stores so can significantly undercut traditional brick and mortar stores.", "./costStrategy").append(t.costStrategy);

c.append("low:low:high:high:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("Consumer retail is such a broad industry that all substitutes are likely to be included.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("There are a multitude of suppliers to the global online shopping industry ", "./supplierPower").append(t.supplierPower);
c.append("There are a multitude of companies competing in the global online shopping industry .", "./rivarly").append(t.rivarly);
c.append("Buyers have a wide variety of companies to choose from in the global online shopping industry .", "./buyerPower").append(t.buyerPower);
c.append("Competitors are entering every segment of the global online shopping industry  all the time.", "./newEntrants").append(t.newEntrants);

c.append("procurement,delivery,afterSales", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Procurement: Amazon needs to source all of it's products hence procurement is important.\n"+
"Customer Service is obviously important as being customer centric is part of their vision.\n"+
"Delivery is vital as Amazon doesn't have physical stores so actually getting the goods to the customer in one piece quickly is vital.", "./valueChainJustification").append(t.valueChainJustification);

c.append("Recommend Items to Customer Process", "./processName").append(t.processName);
c.append("Amazon prides itself on being customer centric and part of this is being able to suggest items to customers that they might like based on past sales data.", "./importantProcess").append(t.importantProcess);
c.append("Get Customer Data:Analyze Sales Patterns:Make Purchase Recommendation", "./processSteps").append(t.processSteps);

c.append("S1:S2:S3", "./systems").append(t.systems);
c.append("O1:O2:O3", "./orgUnits").append(t.orgUnits);


// <!-- one.end -->
	};
	
	priv.defineCase11Orcon = function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case11-orcon -->


c.append("Orcon", "./brandName").append(t.brandName);
c.append("The Internet is Everything.", "./vision").append(t.vision);
c.append("http://topnews.net.nz/data/imagecache/bigthumb/sites/default/files/orcon1.jpg", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=kxl3yAXHryY", "./brandVideo").append(t.brandVideo);
c.append("NZ Internet Service Provider Industry", "./industry").append(t.industry);

c.append("costLeadership", "./correctStrategy").append(t.correctStrategy);
c.append("Broad scope:  Aimed at everyone in New Zealand", "./competitiveScope").append(t.competitiveScope);
c.append("Low cost:  Aims to provide a low cost package", "./costStrategy").append(t.costStrategy);

c.append("low:high:high:high:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("There is not really a substitute for internet access.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("In the NZ context there is only one international backbone provider and they have significant supplier power.", "./supplierPower").append(t.supplierPower);
c.append("There is a lot of competition in the NZ ISP market.", "./rivarly").append(t.rivarly);
c.append("Consumers want the best price and switching costs are low.  However, the ISPS try to mitigate this via annual contracts.", "./buyerPower").append(t.buyerPower);
c.append("It is very easy to set up an ISP and a number of companies such as SKYTV who are not traditional ISPs are looking at entering into this space.", "./newEntrants").append(t.newEntrants);

c.append("marketing,afterSales,technologyDevelopment,makeProjectOrService", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Marketing: Marketing is vital as this is a very crowded market with plenty of substitutes all competing on price and service.\n"+
"After Salves Service: Making sure the product works as advertised is also vital.\n"+
"Technology Development: Technology development is essential as ISPs are continually having to come up with new products using new technologies.", "./valueChainJustification").append(t.valueChainJustification);

c.append("Fault diagnosis process", "./processName").append(t.processName);
c.append("If the service that the ISP delivers is unreliable then customers will switch to another ISP pretty quickly.  Hence faults need to be tracked and resolved quickly.", "./importantProcess").append(t.importantProcess);
c.append("Receive fault report: Diagnose Fault: Fix Fault", "./processSteps").append(t.processSteps);

c.append("SCM:Accounting System:Accounting DSS System", "./systems").append(t.systems);
c.append("Manufacturing:Accounting:Manufacturing management", "./orgUnits").append(t.orgUnits);


// <!-- one.end -->
	};
	
	priv.defineCase12Kiwibank = function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case12-kiwibank -->


c.append("KiwiBank", "./brandName").append(t.brandName);
c.append("Giving Kiwis better value banking.", "./vision").append(t.vision);
c.append("http://www.designworks.co.nz/uploads/images/case-studies/kiwibank/kiwibank.jpg", "./brandImage").append(t.brandImage);
c.append("https://www.youtube.com/watch?v=AOmC0NIGfRE&list=PL36471AF1A649489A", "./brandVideo").append(t.brandVideo);
c.append("New Zealand Banking Industry", "./industry").append(t.industry);

c.append("costLeadership", "./correctStrategy").append(t.correctStrategy);
c.append("Broad scope:  Aimed at everyone in New Zealand.  ", "./competitiveScope").append(t.competitiveScope);
c.append("Low Cost:  They aim at delivering value for money", "./costStrategy").append(t.costStrategy);

c.append("high:low:high:high:high", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("It is hard to imagine living in a modern society without a bank.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("Capital is the primary resource of any bank and in a NZ context the power of the market dictates that supplier power is likely to be high.", "./supplierPower").append(t.supplierPower);
c.append("Banking has been around for hundreds of years, and just about everyone who need a bank already has one. Because of this, banks must attempt to lure clients away from competitor banks. They do this by offering lower financing, higher rates, investment services, and greater conveniences than their rivals. ", "./rivarly").append(t.rivarly);
c.append("Banks often have relatively high switching costs. If a person has one bank that services their banking needs, mortgage, savings, checking, etc, it can be a huge hassle for that person to switch to another bank. However, some smart banks are using technology to make this process painless thus reducing the switching costs.", "./buyerPower").append(t.buyerPower);
c.append("Banking requires a great deal of trust and there are very stringent legal and financial requirements.", "./newEntrants").append(t.newEntrants);

c.append("technologyDevelopment,afterSales,firmInfrastructure", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Customer Service: KiwiBank prides itself on customer service.\n"+
"Technology Development: KiwiBank uses technology to give better service at a cheaper cost.\n"+
"Marketing: Marketing is important due to the intense rivalry in the banking industry.", "./valueChainJustification").append(t.valueChainJustification);

c.append("Customer support", "./processName").append(t.processName);
c.append("When a customer has a query it is vital that Kiwibank gives them the correct answer as quickly as possible.  This is especially true as they pride themselves on their customer service.", "./importantProcess").append(t.importantProcess);
c.append("Receive query:Evaluate answers:Answer query", "./processSteps").append(t.processSteps);

c.append("S1:S2:S3", "./systems").append(t.systems);
c.append("O1:O2:O3", "./orgUnits").append(t.orgUnits);

// <!-- one.end -->
	};
	
	priv.defineCase13StateInsurance = function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case12-state-insurance -->


c.append("State Insurance", "./brandName").append(t.brandName);
c.append("Keep New Zealanders moving forward by offering a premium insurance experience.", "./vision").append(t.vision);
c.append("http://www.state.co.nz/Style%20Library/statewebsite/images/state-logo.png", "./brandImage").append(t.brandImage);
c.append("http://www.youtube.com/watch?v=NBTcNMwmm2E", "./brandVideo").append(t.brandVideo);
c.append("Insurance industry", "./industry").append(t.industry);

c.append("differentiation", "./correctStrategy").append(t.correctStrategy);
c.append("Broad Market:  State manages over a million policies for more than 460,000 Kiwis.", "./competitiveScope").append(t.competitiveScope);
c.append("High Cost:  State offers a premium insurance experience, and putting the customer at the centre of everything. They 'try to set themselves apart' by doing so.", "./costStrategy").append(t.costStrategy);

c.append("low:high:high:high:low", "./correctIndustryStructure").append(t.correctIndustryStructure);
c.append("The only substitute to insurance is paying for the costs of the incident yourself.", "./threatOfSubsitutes").append(t.threatOfSubsitutes);
c.append("Suppliers for the NZ insurance industry are the large insurance corporations overseas.", "./supplierPower").append(t.supplierPower);
c.append("There are many  insurance companies in NZ: State, AA, Tower, AMI, FinTel who are in intense competition.", "./rivarly").append(t.rivarly);
c.append("Buyer power is high as the buyers have many insurance companies to choose from. However, most insurance companies provide some distinct benefits and loyalty programmes in association with other organisations. For example, State insurance earns customers Flybuy points.  They are attempting to limit the buyers power through these programmes.", "./buyerPower").append(t.buyerPower);
c.append("Insurance companies tend to have high set up costs, and most companies in the NZ market have spent several years establishing themselves. For example, State has been serving customers for 100 years!", "./newEntrants").append(t.newEntrants);

c.append("delivery,afterSales,marketing", "./correctValueChainActivites").append(t.correctValueChainActivites);
c.append("Deliver the service: State insurance aim to excel in their ability to pay claims.\n"+
"Service after Sale: It is important for them to ensure that customers are happy with the whole claims process.\n"+
"Marketing: Marketing is important because State insurance targets a broad market, always looking to expand both their personal and business customer base.", "./valueChainJustification").append(t.valueChainJustification);

c.append("Claims process", "./processName").append(t.processName);
c.append("Processing claims efficiently, and to the satisfaction of the customers is of utmost importance to State.", "./importantProcess").append(t.importantProcess);
c.append("Receive claim:Analyse claim:Reject or accept claim", "./processSteps").append(t.processSteps);

c.append("Online claims processing system: Claims analysis system: Claims processing system (DSS)", "./systems").append(t.systems);
c.append("Customer service:Customer service:Customer service", "./orgUnits").append(t.orgUnits);


// <!-- one.end -->
	};
	
	priv.defineCase14Listerine = function(t, c) {
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
	};
	
	priv.defineCase15Sky= function(t, c) {
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
	};
	
	
	priv.defineCase16Domino= function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case16-domino -->

// https://docs.google.com/spreadsheet/ccc?key=0AtPhkJX5BurudHdlWFhZeE1QZWU4RFIxSm9LSEcyS2c

c.append("Domino's Pizza", "./brandName").append(t.brandName);
c.append("LESS THAN 80 characters", "./vision").append(t.vision);
c.append("http://www.dominospizza.co.nz/media/48/logomainnew.png", "./brandImage").append(t.brandImage);
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

c.append("SCM:Accounting System:Accounting DSS System", "./systems").append(t.systems);
c.append("Manufacturing:Accounting:Manufacturing management", "./orgUnits").append(t.orgUnits);

// <!-- one.end -->
	};
	
	priv.defineCase17Dell= function(t, c) {
		// <!-- one.download https://u1.linnk.it/qc8sbw/usr/apps/textsync/files/case17-dell -->
// https://docs.google.com/spreadsheet/ccc?key=0AtPhkJX5BurudHNKcHpqeDJ6VFpwSEhMZ0NGZVhyS2c

c.append("Dell", "./brandName").append(t.brandName);
c.append("The power to do more.", "./vision").append(t.vision);
c.append("http://i.dell.com/images/global/brand/ui/logo-wt-bl.png", "./brandImage").append(t.brandImage);
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

c.append("SCM:Accounting System:Accounting DSS System", "./systems").append(t.systems);
c.append("Manufacturing:Accounting:Manufacturing management", "./orgUnits").append(t.orgUnits);

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
			
			var case4 = node.append("c4", "./c4");
			
			priv.defineCase4AucklandZoo(t, case4);
			
			var case5 = node.append("c5", "./c5");
			
			priv.defineCase5Countdown(t, case5);
			
			var case6 = node.append("c6", "./c6");
			
			priv.defineCase6RainbowsEnd(t, case6);
			
			var case7 = node.append("c7", "./c7");
			
			priv.defineCase7Coke(t, case7);
			
			var case8 = node.append("c8", "./c8");
			
			priv.defineCase8Pandora(t, case8);
			
			var case9 = node.append("c9", "./c9");
			
			priv.defineCase9Bungy(t, case9);
			
			var case10 = node.append("c10", "./c10");
			
			priv.defineCase10Amazon(t, case10);
			
			var case11 = node.append("c11", "./c11");
			
			priv.defineCase11Orcon(t, case11);
			
			var case12 = node.append("c12", "./c12");
			
			priv.defineCase12Kiwibank(t, case12);
			
			var case13 = node.append("c13", "./c13");
			
			priv.defineCase13StateInsurance(t, case13);
			
			var case14 = node.append("c14", "./c14");
			
			priv.defineCase14Listerine(t, case14);
			
			var case15 = node.append("c15", "./c15");
			
			priv.defineCase15Sky(t, case15);
			
var case16 = node.append("c16", "./c16");
			
			priv.defineCase16Domino(t, case16);
			
var case17 = node.append("c17", "./c17");
			
			priv.defineCase17Dell(t, case17);
	
			session.commit().get(function(success) {
			
				onSuccess();
			});
		});
		
		
	};
	
	
})(window.Nextweb);

// <!-- one.end -->
