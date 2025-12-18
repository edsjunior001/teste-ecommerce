
export class CheckoutPage {

    get btnAddChart() {
        const btnAddChart = $(`#add-to-cart-button`)
        return btnAddChart
    }

    get btnCheckout() {

        const btnCheckout = $(`//a[@data-test-id="checkout-link"]`)
        return btnCheckout
    }

    get btnCheckout2() {
        const btnCheckout2 = $(`#_ev_0`)
        return btnCheckout2

    }
    get pgLogin() {
        const pgLogin = $(`#login`)
        return pgLogin

    }
}

