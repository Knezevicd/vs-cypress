class Navigation{
    get loginButton(){
        return cy.get("a[href='/login']");
    }
    get logoutButton(){
        return cy.get("a[role='button']");
    }
    get addNewOrganizationButton(){
        return cy.get("a[href='/create']");
    }
    clickOnLoginButton(){
        this.loginButton.click();
    }
    clickOnLogoutButton(){
        this.logoutButton.click();
    }
    clickOnNewOrganizationButton(){
        this.addNewOrganizationButton.click();
    }
}
export const navigation = new Navigation();