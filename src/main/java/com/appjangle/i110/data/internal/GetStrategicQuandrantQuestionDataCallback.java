package com.appjangle.i110.data.internal;

import com.appjangle.i110.data.game1.StrategicQuandrantQuestion;


public interface GetStrategicQuandrantQuestionDataCallback {

	public void onSuccess(StrategicQuandrantQuestion question);

	public void onFailure(Throwable t);

}