import { Api as RentalStoreApi } from "@/api/RentalStoreApi";

const getRentalStoreApi = () => {
  return new RentalStoreApi({
    baseUrl: "http://localhost:5175",
  }).api;
};

export { getRentalStoreApi };
