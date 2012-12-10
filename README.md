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

The question data defined in abovementioned files can be instantiated within a local database in both Java and JavaScript.

This project contains examples how this data initialization can be performend.

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

### JavaScript



 
