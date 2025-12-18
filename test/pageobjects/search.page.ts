
export class SearchPage {

    get searchBar() {
        const searchBar = $("#search-field");

        return searchBar;

    }

    get searchResults() {
        const searchResults = $(`//*[contains(text(), "search results for")]`)
        return searchResults;
    }
       get searchNotFound() {
        const searchResults = $(`//h2[contains(text(), "We couldn't find results for")]`)
        return searchResults;
    }

    get btnSearch() {

        const btnSearch = $(`//*[@aria-label="search"]`)
        return btnSearch;
    }

}


