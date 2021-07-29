class PricesService {
    constructor() {
        this.prices = {};
    }
    getNBSC() {
        if (this.prices.NBSC) {
            return this.prices.NBSC;
        }
        this.prices.NBSC = this.callApi("NBSC")
            .then(response => response.json());
        return this.prices.NBSC;
    }

    getGBSC() {
        if (this.prices.GBSC) {
            return this.prices.GBSC;
        }
        this.prices.GBSC = this.callApi("GBSC")
            .then(response => response.json());
        return this.prices.GBSC;
    }

    getNETH() {

        if (this.eth) {
            return this.eth ;
        }

        this.eth = this.callApi("NETH")
            .then(response => response.json());
        return this.eth;
    }

    getGN() {
        if (this.prices.GN) {
            return this.prices.GN;
        }
        this.prices.GN = this.callApi("GN")
            .then(response => response.json());
        return this.prices.GN;
    }

    callApi(Url) {
        return fetch("/api/"+Url )
    }


}

const pricesService = new PricesService();

export default pricesService;