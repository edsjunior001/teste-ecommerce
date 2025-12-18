import { HomePage } from "../pageobjects/home.page";
import { SearchPage } from "../pageobjects/search.page";
import { ProductPage } from "../pageobjects/product.page.";
import { CheckoutPage } from "../pageobjects/checkout.page";

const homePage = new HomePage()
const searchPage = new SearchPage()
const productPage = new ProductPage()
const checkoutPage = new CheckoutPage()
describe("Este teste ", () => {

    it("Deve verificar que a home page e iniciada corretamente", () => {

        browser.url("https://www.williams-sonoma.com/")
        browser.maximizeWindow()
        expect(homePage.homePageSilder.isDisplayed()).toBeTruthy;

    })
    it("pesquisar pela palavra pan", async () => {

        await searchPage.searchBar.waitForExist({ timeout: 20000 });
        await searchPage.searchBar.setValue("pan")
        await searchPage.btnSearch.waitForExist({ timeout: 20000 });
        await searchPage.btnSearch.click();
        await searchPage.searchResults.waitForExist({ timeout: 20000 });
        expect(await searchPage.searchResults.isDisplayed()).toBeTruthy;

    })

    it(" Selecionar o item ", async () => {

        await productPage.lblItem.scrollIntoView(true)
        await productPage.lblItem.waitForExist({ timeout: 2000 });
        await productPage.lblItem.click()
        expect(await productPage.lblProductTitle.isDisplayed()).toBeTruthy;

    })

    it(" verifica que o produto é exibido no checkout", async () => {
        await checkoutPage.btnAddChart.waitForExist({ timeout: 2000 });
        await checkoutPage.btnAddChart.click()
        await checkoutPage.btnCheckout.waitForExist({ timeout: 2000 });
        await checkoutPage.btnCheckout.click()
        await checkoutPage.btnCheckout2.waitForExist({ timeout: 2000 });
        await checkoutPage.btnCheckout2.click()
        await checkoutPage.pgLogin.waitForExist({ timeout: 2000 });
        expect(await checkoutPage.pgLogin.isDisplayed()).toBeTruthy;

    })
})

