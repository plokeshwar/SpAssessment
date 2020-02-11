Feature: This feature includes scenarios related to active user page
  As a user, I should be able to navigate across the active users page,
  navigate through the meetup links and verify the mouse hover functionality

  Scenario: Validate the navigation to active user groups link
    When I navigate to site https://webuildsg.github.io/data/
    Then I land on We Build SG Data
    When I click on active user groups data link
    Then I should be navigated to active user groups with > 5 events page


  Scenario: Validate the mouse hover functionality
    When I navigate to site https://webuildsg.github.io/data/
    Then I land on We Build SG Data
    When I click on active user groups data link
    Then I should be navigated to active user groups with > 5 events page

    When I mouse hover DataKind event
    Then I should be displayed with hover text 06 Sep 2017, Wed, 7:00 pm

    When I mouse hover Hackware event
    Then I should be displayed with hover text 02 Jan 2018, Tue, 7:30 pm


  Scenario: Validate the meetup links navigation
    When I navigate to site https://webuildsg.github.io/data/
    Then I land on We Build SG Data
    When I click on active user groups data link
    Then I should be navigated to active user groups with > 5 events page

    When I click on Hackware meetup link
    Then I should be taken to new tab with title Hackware (Singapore, Singapore) | Meetup

    When I click on Agile Singapore meetup link
    Then I should be taken to new tab with title Agile Singapore (Singapore, Singapore) | Meetup
