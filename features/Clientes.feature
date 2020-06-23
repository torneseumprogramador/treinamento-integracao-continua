Feature: Its I'm in on my website
  Test with torne-seumprogramador.com.br
  Scenario: Access the website torneseumprogramador.com.br
    Given I access the website
    When I fill the field in search bar
    Then I should have on list the "integração contínua"
