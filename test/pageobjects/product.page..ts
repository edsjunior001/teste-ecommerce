
export class ProductPage {

    get lblItem() {
        const lblItem = $(`//a[contains(text(), "GreenPan™ Reserve Pro Ceramic Nonstick Fry Pan, Set of 2")]`)
        return lblItem

    }
    get lblProductTitle() {
        const lblProductTitle = $(`h1[contains(text(), "GreenPan™ Reserve Pro Ceramic Nonstick Fry Pan, Set of 2")]`)
        return lblProductTitle
    }
}

