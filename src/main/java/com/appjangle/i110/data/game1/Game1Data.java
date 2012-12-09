package com.appjangle.i110.data.game1;

import com.appjangle.i110.data.Types;

import io.nextweb.Link;
import io.nextweb.Node;
import io.nextweb.Query;
import io.nextweb.Session;

public class Game1Data {

	public static void writeData(Session session, Node node) {

		Query case1 = node.append("q1", "./q1");
		
		Link brandName = session.node(Types.aBrandName);
		Link vision = session.node(Types.aVision);
		Link brandImage = session.node(Types.aBrandImage);

		Link correctStrategy = session.node(Types.aCorrectStrategy);
		
		Link buyerPower = session.node(Types.aBuyerPowerDescription);
		
		case1.append("Starbucks").append(brandName);
		case1
				.append("http://hollywoodandswine.com/wp-content/uploads/2012/03/Starbucks-2.jpg")
				.append(brandImage);
		case1
				.append("To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time.")
				.append(vision);
		
		case1.append("differentiation").append(correctStrategy);
		
		case1.append("High: Buyer power can be reduced through loyalty programmes, product differentiation, and switching costs.").append(buyerPower);
		
	}

	

}
