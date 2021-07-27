class PricesService {
    constructor() {
        this.prices = {};
    }
    getNBSC() {
        if (this.prices.NBSC) {
            return this.prices.NBSC;
        }
        this.prices.NBSC = fetch('http://localhost:8080/NBSC')
            .then(response => response.json());
        return this.prices.NBSC;
    }

    getGBSC() {
        if (this.prices.GBSC) {
            return this.prices.GBSC;
        }
        this.prices.GBSC = fetch('http://localhost:8080/GBSC')
            .then(response => response.json());
        return this.prices.GBSC;
    }

    getNETH() {

        if (this.eth) {
            return this.eth ;
        }

        this.eth = fetch('http://localhost:8080/NETH')
            .then(response => response.json());
        return this.eth;
    }

    getGN() {
        if (this.prices.GN) {
            return this.prices.GN;
        }
        this.prices.GN = fetch('http://localhost:8080/GN')
            .then(response => response.json());
        return this.prices.GN;
    }


}

const pricesService = new PricesService();

export default pricesService;