# pipeline-demo
CICD pipeline demo using Jenkins, an angular app, and protractor.  You must have NodeJS installed on your system for this demo to work.

## Starting the Application
To start the application locally simply run:
1) `npm install`
2) `node server.js`

### Features List
* Get Sauce E2E test results to return to the develop job Jenkins console
* Add build pass fail and test pass fail status to Protractor tests
* Add nodeJS script to analyze and automatically approve/deny pull requests
* Build and run project during PR build, then run E2E test suite on Sauce using Sauce Connect
* Automate the whole project with gulp
* Move logic into NodeJS API layer
