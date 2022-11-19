import { Api as RentalStoreApi } from "./RentalStoreApi";

class Api {
  static instance: any;

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new RentalStoreApi({
        baseUrl: "http://localhost:5174",
      });
    }
    return this.instance;
  }
}

export default Api.getInstance().api;
