# Test framework for writing BDD tests using Protractor and Cucumber

It is ready to use framework for writing BDD tests using Protractor and Cucumber. It uses latest versions of Protractor, Cucumber.js and Protractor-Cucumber-Framework which are compatible with each other. This is self installable project and you need not have Protractor etc. installed before.

# Pre-requisites

As Protractor is a Node.js program built on top of WebDriverJS, you should have Node.js installed with version 6.11 (LTS) and above.

Node.js can be downloaded using below URL:

	https://nodejs.org/en/download/


Windows users, please add installation path to system path.

After installing node.js, Node Package Manager (npm) will also be installed. please verify installation using below commands:  
	
	node -v
	
  	npm -v

# Getting started

After cloning this project into your system folder, use below steps:

1) Install protractor, cucumber and dependencies
	
		npm install

2) Update WebDriver-Manager to get latest binaries

        PS: Currently chrome driver has been hardcoded to download --versions.chrome=80.0.3987.16
       
       npm run webdriver-update
       node node_modules/protractor/bin/webdriver-manager start
          	
	 
3)  Run tests using protractor installed locally as below:
    
    	node node_modules/protractor/bin/protractor conf.js

Note: Windows users, use node at start of command to update/start webdriver-manager like below:

	node node_modules/protractor/bin/webdriver-manager update
	node node_modules/protractor/bin/webdriver-manager start

4) Reports can be seen at Reports folder with failure screenshots.
    1. After execution, normally the report will automatically open on the default browser. 
    2. If the above does not trigger, HTML reports can be found at _reports/cucumber_report.html_
    3. Cucumber json version can be found at _reports/cucumber_report.json_ 

##Scenarios Covered
	
	Feature: This feature includes scenarios related to active user page
	    1. Scenario: Validate the navigation to active user groups link
	    2. Scenario: Validate the navigation to active user groups link
	    3. Scenario: Validate the meetup links navigation
	    
	Feature: This feature includes scenarios related to main page
	    1. Scenario: Validate the total number of search data
	    2. Scenario: Validate the filter on search option
	    3. Scenario: This scenario is to display failure scenario
	 
	Feature: This feature includes scenarios related to program repo page
	    1. Scenario: Validate the navigation to repos per programming link
	

#  The reason for this structure and probable reasons for failure
	##Structure
		1. This project structure keeps the pages, steps and features separately and easy to maintain.
		2. Keeping the page class and page action methods in seperate class, makes it easy to modify and maintain, whenever required.
		3. Keeping the steps in step class, makes it easy for reusability needing little modification.
		4. With the feature files, it makes it easy to restructure or parameterize new test data with no code knowledge requirement.

	##Reasons For Failure (Probable)
		1. Reasons related to NPM or npm installation.
		2. Reasons related to network very slow or limited access.
		3. (Important) Reasons related to change in the application data, such expected messages, etc.
		4. Report folder not being able to create (permission denied) 
