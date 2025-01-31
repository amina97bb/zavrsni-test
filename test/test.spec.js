import { WebDriver, Browser, Builder } from "selenium-webdriver";
import { expect } from "chai";
import { Login } from "../pages/prvitest.js";

describe("Prvi test", function () {
    /** @type {WebDriver} */
    let driver;
    let LoginPage;

    beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        LoginPage = new Login(driver);
        await driver.get("https://www.saucedemo.com");
        await driver.manage().window().maximize();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("Prvi test", async function () {
        await LoginPage.clickloginbutton();
        await LoginPage.usernameerror();
        await LoginPage.passworderror();
        let errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).to.equal("Epic sadface: Username is required");

        await LoginPage.closeErrorMessage();
        const isErrorMessageVisible = await LoginPage.isErrorMessageVisible();
        expect(isErrorMessageVisible).to.be.false;
    });

    it("Drugi Test", async function () {
        await LoginPage.fillInUsernameField("standard_user");
        await LoginPage.fillInPasswordField("pogresnaSifra");
        await LoginPage.clickloginbutton();
        await LoginPage.usernameerror();
        await LoginPage.passworderror();
        let errorMessage = await LoginPage.getErrorMessage();

        expect(errorMessage).to.equal("Epic sadface: Username and password do not match any user in this service");

        await LoginPage.closeErrorMessage();
        const isErrorMessageVisible = await LoginPage.isErrorMessageVisible();
        expect(isErrorMessageVisible).to.be.false;
    });

    it("treći Test", async function () {
        await LoginPage.fillInUsername("standard_user");
        await LoginPage.fillInPassword("secret_sauce");
        await LoginPage.clickloginbutton();
        let isOnProductsPage = await LoginPage.verifyProductsPage();
        expect(isOnProductsPage).to.be.true;
        await LoginPage.firstProduct();
        await LoginPage.secondProduct();
        await LoginPage.cartBadgeIcon();
        let isInYourCart= await LoginPage.cartHeader();
        expect(isInYourCart).to.be.true;
        let yourBackpack= await LoginPage.cartHeader();
        expect(yourBackpack).to.be.true;
        let bikeLight= await LoginPage.cartHeader();
        expect(bikeLight).to.be.true;
        await LoginPage.clickcheckoutbutton();
        let isOnCheckOutPage = await LoginPage.verifyCheckOutPage();
        expect(isOnCheckOutPage).to.be.true;
        await LoginPage.fillInYourName("Amina");
        await LoginPage.fillInYourLastName("Bilčević-Begović");
        await LoginPage.fillInYourZipCode("71210");
        await LoginPage.clickcontinuebutton();
        let CheckOutOverviewPage = await LoginPage.verifyCheckOutOverview();
        expect(CheckOutOverviewPage).to.be.true;
        let Backpack = await LoginPage.verifyBackpack();
        expect(Backpack).to.be.true;
        let yourbikeLight = await LoginPage.verifybikelight();
        expect(yourbikeLight).to.be.true;
        await LoginPage.clickFinishButton();
        let checkoutcomplite = await LoginPage.verifyChekOutComplitePage();
        expect(checkoutcomplite).to.be.true;
        await LoginPage.clickBurgerMenu();
        await LoginPage.clickLogOut();
        let loginpage = await LoginPage.verifyLogInPage();
        expect(loginpage).to.be.true;

        
        
    });


});

  