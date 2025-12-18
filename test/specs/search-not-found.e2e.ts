import { HomePage } from "../pageobjects/home.page";
import { SearchPage } from "../pageobjects/search.page";

const homePage = new HomePage()
const searchPage = new SearchPage()

xdescribe("Este teste ", () => {

    it("Deve verificar mensagem de pesquisa nao encontrada", () => {

        browser.url("https://www.williams-sonoma.com/")
        browser.maximizeWindow()
        expect(homePage.homePageSilder.isDisplayed()).toBeTruthy;

    })
    it("pesquisar pela palavra pan", async () => {

        await searchPage.searchBar.waitForExist({ timeout: 20000 });
        await searchPage.searchBar.setValue("%%%%%%%%%%%%%%%%")
        await searchPage.btnSearch.waitForExist({ timeout: 20000 });
        await searchPage.btnSearch.click();
        await searchPage.searchNotFound.waitForExist({ timeout: 20000 });
        expect(await searchPage.searchNotFound.isDisplayed()).toBeTruthy;

    })
})

