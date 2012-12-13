package com.appjangle.i110.data.game1;

import com.appjangle.i110.data.CaseQuestion;

/**
 * This interface wraps the data of a strategy quadrant questions.
 *
 */
public interface StrategicQuandrantQuestion extends CaseQuestion {

	
	
	public String getCorrectStrategy();
	
	public String getCorrectCompetiveScope();
	
	public String getCorrectCostStrategy();

}