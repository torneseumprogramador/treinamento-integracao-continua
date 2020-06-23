const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');

const geckoDriverPath = "/Users/danilo/projetos/nodejsbdd/integracao_continua_treinamento/driver/chromedriver"
const serviceBuilder = new ServiceBuilder(geckoDriverPath);

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();

Given('I access the website', async function () {
  await driver.get('http://www.torneseumprogramador.com.br')
  // await driver.sleep(1000)
});

When('I fill the field in search bar', async function () {
  await driver.findElement(By.name('q')).sendKeys('integração contínua', Key.RETURN)
  await driver.sleep(1000)
});

Then('I should have on list the {string}', async function (string) {
  const dado = await driver.findElement(By.className('card-body')).getText()
  if(dado.toLowerCase().indexOf(string.toLowerCase()) === -1){
    throw `Não localizei a string ${string}`
  }
  await driver.quit();
});