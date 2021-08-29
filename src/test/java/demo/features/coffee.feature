Feature:
  create new coffee

  Background:
    * def signIn = call read('authentication.feature') { username: 'marouane', password: '123456', clientId: 'karate-spring-demo', clientSecret: '19f745ce-5452-467f-bad8-ee14184240e5' }
    * def token = signIn.accessToken
    * def jsonCoffee = read('data/coffee.json')


  @nominal
  Scenario: Create coffee should return 201 status
  
    * def coffeeUrl = apiBaseUrl + 'coffees'
    # Create coffee
    Given url coffeeUrl
    And header Authorization = 'Bearer ' + token
    And request jsonCoffee
    When method POST
    Then status 201

    # Remove coffee
    Given url coffeeUrl
    And header Authorization = 'Bearer ' + token
    And form field name = espresso
    When method DELETE
    Then status 202

    # Create coffee with missing json request
    Given url coffeeUrl
    And header Authorization = 'Bearer ' + token
    When method POST
    Then status 400
  