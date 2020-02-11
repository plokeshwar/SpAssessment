Feature: This feature includes scenarios related to program repo page
  As a user, I should be able to navigate across the repos per program page
  and verify the number repos available per programming language

  Scenario: Validate the navigation to repos per programming link
    When I navigate to site https://webuildsg.github.io/data/
    Then I land on We Build SG Data
    When I click on repositories per programming language data link
    Then I should be navigated to repositories per programming languages page

    When I click on Ruby language radio button
    Then the total number of repos for Ruby should display is 10

    When I click on Java language radio button
    Then the total number of repos for Java should display is 30