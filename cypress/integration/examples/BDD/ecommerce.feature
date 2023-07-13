Feature: End to end Ecommerce validation

    application regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to Cart
    And Validate the total prices 
    Then Select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    |name|gender|
    |eddy|Female|
    Then Validate the from behaviour
    And Select the Shop page