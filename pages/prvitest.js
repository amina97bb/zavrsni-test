import { WebDriver, By, until } from "selenium-webdriver";

class Login {
    constructor(driver) {
        /** @type {WebDriver} */
        this.driver = driver;
        this.loginbutton = By.id("login-button");
        this.userNameErrorIcon = By.css("#user-name + svg");
        this.passwordErrorIcon = By.css("#password + svg");
        this.errorWindow = By.css(".error-message-container.error");
        this.closeErrorIcon = By.css(".svg-inline--fa.fa-times.fa-w-11");
        this.usernameField = By.id("user-name");
        this.passwordField = By.id("password");
        this.headerContainer = By.css(".header_secondary_container");
        this.firstProductButton = By.id('add-to-cart-sauce-labs-backpack');
        this.secondProductButton = By.id('add-to-cart-sauce-labs-bike-light');
        this.cartBadge = By.css('.shopping_cart_badge');
        this.yourCart = By.css(".header_secondary_container");
        this.backpack = By.id("item_4_title_link");
        this.bikelight = By.id("item_0_title_link");
        this.checkoutButton = By.id("checkout");
        this.checkOutPage = By.css(".header_secondary_container");
        this.yourName = By.id("first-name");
        this.yourLastName = By.id("last-name");
        this.yourZipCode = By.id("postal-code");
        this.continueButton = By.id("continue");
        this.checkoutOverview = By.css(".header_secondary_container");
        this.finishButton = By.id("finish");
        this.checkOutComplite = By.id ("page_wrapper");
        this.burgerMenu = By.id("react-burger-menu-btn");
        this.logOutButton =By.id("logout_sidebar_link");
        this.loginPage = By.css(".login_logo");

        
    }

    async clickloginbutton() {
        let loginbutton = await this.driver.wait(until.elementLocated(this.loginbutton), 10000);
        await loginbutton.click();
    }

    async usernameerror() {
        let userNameErrorIcon = await this.driver.wait(until.elementLocated(this.userNameErrorIcon), 10000);
        await this.driver.wait(until.elementIsVisible(userNameErrorIcon));
    }

    async passworderror() {
        let passwordErrorIcon = await this.driver.wait(until.elementLocated(this.passwordErrorIcon), 10000);
        await this.driver.wait(until.elementIsVisible(passwordErrorIcon));
    }

    async getErrorMessage() {
        let errorWindow = await this.driver.wait(until.elementLocated(this.errorWindow), 10000);
        await this.driver.wait(until.elementIsVisible(errorWindow));
        return await errorWindow.getText();
    }

    async closeErrorMessage() {
        let closeIcon = await this.driver.wait(until.elementLocated(this.closeErrorIcon), 10000);
        await closeIcon.click();
    }

    async isErrorMessageVisible() {
        try {
            await this.driver.wait(until.elementLocated(this.errorWindow), 5000);
            return true;
        } catch (error) {
            return false;
        }
    }

    async fillInUsernameField(username) {
        let usernameField = await this.driver.wait(until.elementLocated(this.usernameField), 10000);
        await this.driver.wait(until.elementIsVisible(usernameField));
        await usernameField.click();
        await usernameField.clear();
        await usernameField.sendKeys(username);
    }

    async fillInPasswordField(password) {
        let passwordField = await this.driver.wait(until.elementLocated(this.passwordField), 10000);
        await this.driver.wait(until.elementIsVisible(passwordField));
        await passwordField.click();
        await passwordField.clear();
        await passwordField.sendKeys(password);
    }

    async fillInUsername(username) {
        let usernameField = await this.driver.wait(until.elementLocated(this.usernameField), 10000);
        await this.driver.wait(until.elementIsVisible(usernameField));
        await usernameField.click();
        await usernameField.clear();
        await usernameField.sendKeys(username);
    }

    async fillInPassword(password) {
        let passwordField = await this.driver.wait(until.elementLocated(this.passwordField), 10000);
        await this.driver.wait(until.elementIsVisible(passwordField));
        await passwordField.click();
        await passwordField.clear();
        await passwordField.sendKeys(password);
    }
    async verifyProductsPage() {
        let header = await this.driver.wait(until.elementLocated(this.headerContainer), 10000);
        let headerText = await header.getText();
        return headerText.includes("Products");

    }
    async firstProduct() {
        let firstProductButton = await this.driver.wait(until.elementLocated(this.firstProductButton), 10000);
        await this.driver.wait(until.elementIsVisible(firstProductButton));
        await firstProductButton.click();
        
}

async secondProduct() {
    let secondtProductButton = await this.driver.wait(until.elementLocated(this.secondProductButton), 10000);
    await this.driver.wait(until.elementIsVisible(secondtProductButton));
    await secondtProductButton.click();
    
}
async cartBadgeIcon() {
    let cartBadge = await this.driver.wait(until.elementLocated(this.cartBadge), 10000);
    await cartBadge.click();
}
async cartHeader() {
    let header = await this.driver.wait(until.elementLocated(this.yourCart), 10000);
    let headerText = await header.getText();
    return headerText.includes("Your Cart");

}

async verifyBackpack() {
    let text = await this.driver.wait(until.elementLocated(this.backpack), 10000);
    let Text = await text.getText();
    return Text.includes("Sauce Labs Backpack");
}

async verifybikelight() {
    let text = await this.driver.wait(until.elementLocated(this.bikelight), 10000);
    let Text = await text.getText();
    return Text.includes("Sauce Labs Bike Light");

 }   
 async clickcheckoutbutton() {
    let checkoutButton = await this.driver.wait(until.elementLocated(this.checkoutButton), 10000);
    await checkoutButton.click();
}   
async verifyCheckOutPage() {
    let header = await this.driver.wait(until.elementLocated(this.checkOutPage), 10000);
    let headerText = await header.getText();
    return headerText.includes("Checkout: Your Information");

} 
async fillInYourName(username) {
    let userName = await this.driver.wait(until.elementLocated(this.yourName), 10000);
    await this.driver.wait(until.elementIsVisible(userName));
    await userName.click();
    await userName.clear();
    await userName.sendKeys(username);
} 
async fillInYourLastName(lastname) {
    let lastName = await this.driver.wait(until.elementLocated(this.yourLastName), 10000);
    await this.driver.wait(until.elementIsVisible(lastName));
    await lastName.click();
    await lastName.clear();
    await lastName.sendKeys(lastname);
} 
async fillInYourZipCode(zipcode) {
    let zipCode = await this.driver.wait(until.elementLocated(this.yourZipCode), 10000);
    await this.driver.wait(until.elementIsVisible(zipCode));
    await zipCode.click();
    await zipCode.clear();
    await zipCode.sendKeys(zipcode);
} 
async clickcontinuebutton() {
    let continuebutton = await this.driver.wait(until.elementLocated(this.continueButton), 10000);
    await continuebutton.click();
}
async verifyCheckOutOverview() {
    let header = await this.driver.wait(until.elementLocated(this.checkoutOverview), 10000);
    let headerText = await header.getText();
    return headerText.includes("Checkout: Overview");
}
async verifyBackpack() {
    let text = await this.driver.wait(until.elementLocated(this.backpack), 10000);
    let Text = await text.getText();
    return Text.includes("Sauce Labs Backpack");
}

async verifybikelight() {
    let text = await this.driver.wait(until.elementLocated(this.bikelight), 10000);
    let Text = await text.getText();
    return Text.includes("Sauce Labs Bike Light");

 }   
 async clickFinishButton() {
    let finishbutton = await this.driver.wait(until.elementLocated(this.finishButton), 10000);
    await finishbutton.click();
}
async verifyChekOutComplitePage() {
    let header = await this.driver.wait(until.elementLocated(this.checkOutComplite), 10000);
    let headerText = await header.getText();
    return headerText.includes("Checkout: Complete!")
} 
async clickBurgerMenu() {
    let burgermenubutton = await this.driver.wait(until.elementLocated(this.burgerMenu), 10000);
    await this.driver.wait(until.elementIsVisible(burgermenubutton), 10000); 
    await burgermenubutton.click();
} 
async clickLogOut() {
    let logout = await this.driver.wait(until.elementLocated(this.logOutButton), 10000);
    await this.driver.wait(until.elementIsVisible(logout), 10000); 
    await logout.click();
} 
async verifyLogInPage() {
    let header = await this.driver.wait(until.elementLocated(this.loginPage), 10000);
    let headerText = await header.getText();
    return headerText.includes("Swag Labs");
}
} 
export { Login };
