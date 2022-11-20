# 10msAssessment

The branch contains 3 .sql, 1 .js, 1 .json files and Dockerfile.

**.sql FILES**

1. events.sql: Contains the table creation and input format of event details developed in Mysql database
2. workshops.sql: Contains the table creation and input format of workshop details developed in Mysql database
3. reservations.sql: Contains the table creation and input format of reservation details developed in Mysql database


**.js FILE**

10ms.js:

This .js file contains all the GET and POST endpoints for the project. The port to these APIs are set to localhost:5000.

////////// GET ENDPOINTS /////////

/EventList gets all the active event information with pagination

/EventDetails1 gets single event information for event 1
/EventDetails2 gets single event information for event 2
/EventDetails3 gets single event information for event 3

/WSList gets all the active workshops of a single event 

/WSDetails1 gets single information for workshop#1
/WSDetails2 gets single information for workshop#2
/WSDetails3 gets single information for workshop#3

////////// POST ENDPOINTS //////////

/WS_RES1 makes workshop reservation for user#1 
/WS_RES11 makes workshop reservation for user#1 
/WS_RES111 makes workshop reservation for user#1 

/WS_RES2 makes workshop reservation for user#2 
/WS_RES22 makes workshop reservation for user#2
/WS_RES222 makes workshop reservation for user#2

/WS_RES3 makes workshop reservation for user#3
/WS_RES33 makes workshop reservation for user#3
/WS_RES333 makes workshop reservation for user#3

**.json FILE**

package.json: contains all the necessary setup for the 10ms.js file. It stores the required data and other installed dependencies. 


                        ////////////////// HOW TO RUN //////////////////
                        
1. Open the .sql files in Mysql database and connect to the server 10MSQL 127.0.0.1:3306 (pass-Ankarasiuu420)
2. Open all the files in Visual Studio Code or any other developer tool
3. Go to the 10ms.js file and open terminal
4. In the terminal, type node 10ms.js or, nodemon 10ms.js
5. In terminal you'll see a prompt "App is running in port 5000"
6. Open any browser (e.g- Chrome, Firefox) and search localhost:5000
7. It'll redirect you to a page showing "Cannot GET /" error
8. Now put the GET endpoints addresses following the localhost:5000 (the endpoints are given above)
9. You'll be redirected to your selected inputs 
10. Thank You!
