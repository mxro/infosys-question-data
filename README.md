infosys-question-data
=====================

The purpose of this project is to define questions for the [Infosys 110 Game apps](http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n). 
The question data is encoded using scripts based on the [Nextweb API](http://nextweb.io).

## Question Data

The data for questions is described in a number of text files. These text files utilize the Nextweb syntax to define the data for questions.

Each text file contains the data for all game types for one case. The currently defined cases are:

[case1-starbucks.txt](https://github.com/mxro/infosys-question-data/blob/master/src/main/resources/common/case1-starbucks.txt)

[case2-nike.txt](https://github.com/mxro/infosys-question-data/blob/master/src/main/resources/common/case2-nike.txt)

There is also a file which lists all data types of relevance:

[Data Types](https://github.com/mxro/infosys-question-data/blob/master/src/main/resources/common/types.txt)

These data types are documented in more detail as part of the [110 project documentation](http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types).

## Data Initialization

The question data defined in above mentioned files can be instantiated within a local database in both Java and JavaScript.

This project contains examples how this data initialization can be performed.

### Java

[GameData.java](https://github.com/mxro/infosys-question-data/blob/master/src/main/java/com/appjangle/i110/data/GameData.java): 
This class writes the data of all currently defined cases to an arbitrary node.

[Case1Starbucks.java](https://github.com/mxro/infosys-question-data/blob/master/src/main/java/com/appjangle/i110/data/cases/Case1Starbucks.java):
This class writes the question data for Starbucks to an arbitrary node. This class is used by 
[GameData.java](https://github.com/mxro/infosys-question-data/blob/master/src/main/java/com/appjangle/i110/data/GameData.java) 
and uses the data definition in [case1-starbucks.txt](https://github.com/mxro/infosys-question-data/blob/master/src/main/resources/common/case1-starbucks.txt).

[Case2Nike.java](https://github.com/mxro/infosys-question-data/blob/master/src/main/java/com/appjangle/i110/data/cases/Case2Nike.java):
This class writes the question data for Nike to an arbitrary node. This class is used by 
[GameData.java](https://github.com/mxro/infosys-question-data/blob/master/src/main/java/com/appjangle/i110/data/GameData.java) 
and uses the data definition in [case2-nike.txt](https://github.com/mxro/infosys-question-data/blob/master/src/main/resources/common/case2-nike.txt).

[Types.java](https://github.com/mxro/infosys-question-data/blob/master/src/main/java/com/appjangle/i110/data/Types.java): 
This class initializes the data types required to read and write question data.

### JavaScript

[gamedata.js](https://github.com/mxro/infosys-question-data/blob/master/src/main/resources/js/gamedata.js): This class contains routines to initialize the required data types and the
data for all currently defined cases. The public interface to this module is provided through the global variable `window.gamedata`.

## Example Application

This project also contains an example application for Java and JavaScript. This example application will use the data initialization routines discussed above 
to create a local database containing all currently defined cases. Example data for the 
[Strategy Quandrant game](http://slicnet.com/mxrogm/mxrogm/apps/nodejump/docs/8/n/Types/Strategy_Quadrant_Questi)
 is then printed out.
 
### Java

The Java example application is defined in the file [TestApp.java](https://github.com/mxro/infosys-question-data/blob/master/src/main/java/com/appjangle/i110/data/TestApp.java).

Running the application should result in an output such as the following:

    ++++++++++++++++++++++++++++++++++++++++++++++++
    Loading data for game type 1 from case 1 ....
    Brand name: Starbucks
    Brand image: http://hollywoodandswine.com/wp-content/uploads/2012/03/Starbucks-2.jpg
    Brand vision: To inspire and nurture the human spirit - one person, one cup and one neighborhood at a time.
    Correct strategy: differentiation
    Strategy justification:
     Competitive scope: Starbucks markets to all customers of the cafe industry, which is broad market.
     Cost strategy: Starbucks has a focus on high quality and customer service, indicative of a high cost strategy.
     Therefore, the correct strategy is: differentiation
    ++++++++++++++++++++++++++++++++++++++++++++++++
    Loading data for game type 1 from case 2 ....
    Brand name: Nike
    Brand image: http://vince08.edublogs.org/files/2008/11/logonike.gif
    Brand vision: To bring inspiration and innovation to every athlete in the world.
    Correct strategy: differentiation
    Strategy justification:
     Competitive scope: Broad market: Nike appeals to a wide range of diverse consumers at all ends of the spectrum.
     Cost strategy: High cost: Nike sells high quality products and therefore can sell at inflated prices. It also attempts to use its brand name as a distinctive selling point.
     Therefore, the correct strategy is: differentiation
    Example completed.
    
### JavaScript

The JavaScript example application is defined in the file  [gamedata-exampleapp.html](https://github.com/mxro/infosys-question-data/blob/master/src/main/resources/js/gamedata-exampleapp.html).

Opening the application with a web browser on the address ...

> http://u1.linnk.it/qc8sbw/usr/apps/textsync/docs/110-gamedata-exampleapp.value.html

.. should result in text being printed on the page as follows:

![Output of Example application](https://dl.dropbox.com/u/957046/static/assets/1212/example-app-output.PNG)
