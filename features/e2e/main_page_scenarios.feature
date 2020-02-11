Feature: This feature includes scenarios related to main page
  As a user, I should be able to filter and navigate across the main page

  Scenario: Validate the total number of search data
    When I navigate to site https://webuildsg.github.io/data/
    Then I land on We Build SG Data
    #The below search data refers to container boxes on the main page
    And the total number of search data should display is 11


  Scenario: Validate the filter on search option
    When I navigate to site https://webuildsg.github.io/data/
    Then I land on We Build SG Data

    When I search active user in the search field
    Then the filter should display active user groups
    #validating one random container box not to display
    And the filter should not display active repositories


  #Failure scenario, for reporting purpose only.
  Scenario: This scenario is to display failure scenario
    When I navigate to site https://webuildsg.github.io/data/
    Then I land on We Build SG Data

    When I search active user in the search field
    Then the filter should display active user groups
    And the filter should not display active repositories
    And the filter should display active repositories
