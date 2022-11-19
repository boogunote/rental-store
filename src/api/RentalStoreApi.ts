/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Paginated */
export interface Paginated {
  pageSize?: number;
  totalRows?: number;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  page?: number;
}

/** Groupby */
export interface Groupby {
  /** count */
  count?: number;
  /** the value of the given column */
  column_name?: string;
}

/** Actor Response */
export interface ActorResponse {
  ActorId?: number;
  FirstName?: string;
  LastName?: string;
  LastUpdate?: string;
  "FilmActor List"?: FilmActorRequest;
  "Film List"?: FilmRequest;
}

/** Actor Request */
export interface ActorRequest {
  ActorId?: number;
  FirstName?: string;
  LastName?: string;
  LastUpdate?: string;
}

/** Actor : Actor Response */
export interface ActorActorGridResponse {
  ActorId?: number;
  FirstName?: string;
  LastName?: string;
  LastUpdate?: string;
  "FilmActor List"?: FilmActorRequest;
  "Film List"?: FilmRequest;
}

/** Actor : Actor Request */
export interface ActorActorGridRequest {
  ActorId?: number;
  FirstName?: string;
  LastName?: string;
  LastUpdate?: string;
}

/** Address Response */
export interface AddressResponse {
  AddressId?: number;
  Address?: string;
  Address2?: string;
  District?: string;
  CityId?: number;
  PostalCode?: string;
  Phone?: string;
  Location?: string;
  LastUpdate?: string;
  "Customer List"?: CustomerRequest;
  "Staff List"?: StaffRequest;
  "Store List"?: StoreRequest;
  City?: CityRequest;
  "Staff List1"?: StaffRequest;
}

/** Address Request */
export interface AddressRequest {
  AddressId?: number;
  Address?: string;
  Address2?: string;
  District?: string;
  CityId?: number;
  PostalCode?: string;
  Phone?: string;
  Location?: string;
  LastUpdate?: string;
}

/** Address : Address Response */
export interface AddressAddressGridResponse {
  AddressId?: number;
  Address?: string;
  Address2?: string;
  District?: string;
  CityId?: number;
  PostalCode?: string;
  Phone?: string;
  Location?: string;
  LastUpdate?: string;
  "Customer List"?: CustomerRequest;
  "Staff List"?: StaffRequest;
  "Store List"?: StoreRequest;
  City?: CityRequest;
  "Staff List1"?: StaffRequest;
}

/** Address : Address Request */
export interface AddressAddressGridRequest {
  AddressId?: number;
  Address?: string;
  Address2?: string;
  District?: string;
  CityId?: number;
  PostalCode?: string;
  Phone?: string;
  Location?: string;
  LastUpdate?: string;
}

/** Category Response */
export interface CategoryResponse {
  CategoryId?: number;
  Name?: string;
  LastUpdate?: string;
  "FilmCategory List"?: FilmCategoryRequest;
  "Film List"?: FilmRequest;
}

/** Category Request */
export interface CategoryRequest {
  CategoryId?: number;
  Name?: string;
  LastUpdate?: string;
}

/** Category : Category Response */
export interface CategoryCategoryGridResponse {
  CategoryId?: number;
  Name?: string;
  LastUpdate?: string;
  "FilmCategory List"?: FilmCategoryRequest;
  "Film List"?: FilmRequest;
}

/** Category : Category Request */
export interface CategoryCategoryGridRequest {
  CategoryId?: number;
  Name?: string;
  LastUpdate?: string;
}

/** City Response */
export interface CityResponse {
  CityId?: number;
  City?: string;
  CountryId?: number;
  LastUpdate?: string;
  "Address List"?: AddressRequest;
  Country?: CountryRequest;
}

/** City Request */
export interface CityRequest {
  CityId?: number;
  City?: string;
  CountryId?: number;
  LastUpdate?: string;
}

/** City : City Response */
export interface CityCityGridResponse {
  CityId?: number;
  City?: string;
  CountryId?: number;
  LastUpdate?: string;
  "Address List"?: AddressRequest;
  Country?: CountryRequest;
}

/** City : City Request */
export interface CityCityGridRequest {
  CityId?: number;
  City?: string;
  CountryId?: number;
  LastUpdate?: string;
}

/** Country Response */
export interface CountryResponse {
  CountryId?: number;
  Country?: string;
  LastUpdate?: string;
  "City List"?: CityRequest;
}

/** Country Request */
export interface CountryRequest {
  CountryId?: number;
  Country?: string;
  LastUpdate?: string;
}

/** Country : Country Response */
export interface CountryCountryGridResponse {
  CountryId?: number;
  Country?: string;
  LastUpdate?: string;
  "City List"?: CityRequest;
}

/** Country : Country Request */
export interface CountryCountryGridRequest {
  CountryId?: number;
  Country?: string;
  LastUpdate?: string;
}

/** Customer Response */
export interface CustomerResponse {
  CustomerId?: number;
  StoreId?: number;
  FirstName?: string;
  LastName?: string;
  Email?: string;
  AddressId?: number;
  Active?: number;
  CreateDate?: string;
  LastUpdate?: string;
  "Payment List"?: PaymentRequest;
  "Rental List"?: RentalRequest;
  Address?: AddressRequest;
  Store?: StoreRequest;
}

/** Customer Request */
export interface CustomerRequest {
  CustomerId?: number;
  StoreId?: number;
  FirstName?: string;
  LastName?: string;
  Email?: string;
  AddressId?: number;
  Active?: number;
  CreateDate?: string;
  LastUpdate?: string;
}

/** Customer : Customer Response */
export interface CustomerCustomerGridResponse {
  CustomerId?: number;
  StoreId?: number;
  FirstName?: string;
  LastName?: string;
  Email?: string;
  AddressId?: number;
  Active?: number;
  CreateDate?: string;
  LastUpdate?: string;
  "Payment List"?: PaymentRequest;
  "Rental List"?: RentalRequest;
  Address?: AddressRequest;
  Store?: StoreRequest;
}

/** Customer : Customer Request */
export interface CustomerCustomerGridRequest {
  CustomerId?: number;
  StoreId?: number;
  FirstName?: string;
  LastName?: string;
  Email?: string;
  AddressId?: number;
  Active?: number;
  CreateDate?: string;
  LastUpdate?: string;
}

/** Film Response */
export interface FilmResponse {
  FilmId?: number;
  Title?: string;
  Description?: string;
  ReleaseYear?: string;
  LanguageId?: number;
  OriginalLanguageId?: number;
  RentalDuration?: number;
  RentalRate?: number;
  Length?: number;
  ReplacementCost?: number;
  Rating?: string;
  SpecialFeatures?: string;
  LastUpdate?: string;
  "FilmActor List"?: FilmActorRequest;
  "FilmCategory List"?: FilmCategoryRequest;
  "Inventory List"?: InventoryRequest;
  Language?: LanguageRequest;
  Language1?: LanguageRequest;
  "Category List"?: CategoryRequest;
  "Actor List"?: ActorRequest;
  "Store List"?: StoreRequest;
}

/** Film Request */
export interface FilmRequest {
  FilmId?: number;
  Title?: string;
  Description?: string;
  ReleaseYear?: string;
  LanguageId?: number;
  OriginalLanguageId?: number;
  RentalDuration?: number;
  RentalRate?: number;
  Length?: number;
  ReplacementCost?: number;
  Rating?: string;
  SpecialFeatures?: string;
  LastUpdate?: string;
}

/** Film : Film Response */
export interface FilmFilmGridResponse {
  FilmId?: number;
  Title?: string;
  Description?: string;
  ReleaseYear?: string;
  LanguageId?: number;
  OriginalLanguageId?: number;
  RentalDuration?: number;
  RentalRate?: number;
  Length?: number;
  ReplacementCost?: number;
  Rating?: string;
  SpecialFeatures?: string;
  LastUpdate?: string;
  "FilmActor List"?: FilmActorRequest;
  "FilmCategory List"?: FilmCategoryRequest;
  "Inventory List"?: InventoryRequest;
  Language?: LanguageRequest;
  Language1?: LanguageRequest;
  "Category List"?: CategoryRequest;
  "Actor List"?: ActorRequest;
  "Store List"?: StoreRequest;
}

/** Film : Film Request */
export interface FilmFilmGridRequest {
  FilmId?: number;
  Title?: string;
  Description?: string;
  ReleaseYear?: string;
  LanguageId?: number;
  OriginalLanguageId?: number;
  RentalDuration?: number;
  RentalRate?: number;
  Length?: number;
  ReplacementCost?: number;
  Rating?: string;
  SpecialFeatures?: string;
  LastUpdate?: string;
}

/** FilmActor Response */
export interface FilmActorResponse {
  ActorId?: number;
  FilmId?: number;
  LastUpdate?: string;
  Actor?: ActorRequest;
  Film?: FilmRequest;
}

/** FilmActor Request */
export interface FilmActorRequest {
  ActorId?: number;
  FilmId?: number;
  LastUpdate?: string;
}

/** FilmActor : FilmActor Response */
export interface FilmActorFilmActorGridResponse {
  ActorId?: number;
  FilmId?: number;
  LastUpdate?: string;
  Actor?: ActorRequest;
  Film?: FilmRequest;
}

/** FilmActor : FilmActor Request */
export interface FilmActorFilmActorGridRequest {
  ActorId?: number;
  FilmId?: number;
  LastUpdate?: string;
}

/** FilmCategory Response */
export interface FilmCategoryResponse {
  FilmId?: number;
  CategoryId?: number;
  LastUpdate?: string;
  Category?: CategoryRequest;
  Film?: FilmRequest;
}

/** FilmCategory Request */
export interface FilmCategoryRequest {
  FilmId?: number;
  CategoryId?: number;
  LastUpdate?: string;
}

/** FilmCategory : FilmCategory Response */
export interface FilmCategoryFilmCategoryGridResponse {
  FilmId?: number;
  CategoryId?: number;
  LastUpdate?: string;
  Category?: CategoryRequest;
  Film?: FilmRequest;
}

/** FilmCategory : FilmCategory Request */
export interface FilmCategoryFilmCategoryGridRequest {
  FilmId?: number;
  CategoryId?: number;
  LastUpdate?: string;
}

/** FilmText Response */
export interface FilmTextResponse {
  FilmId?: number;
  Title?: string;
  Description?: string;
}

/** FilmText Request */
export interface FilmTextRequest {
  FilmId?: number;
  Title?: string;
  Description?: string;
}

/** FilmText : FilmText Response */
export interface FilmTextFilmTextGridResponse {
  FilmId?: number;
  Title?: string;
  Description?: string;
}

/** FilmText : FilmText Request */
export interface FilmTextFilmTextGridRequest {
  FilmId?: number;
  Title?: string;
  Description?: string;
}

/** Inventory Response */
export interface InventoryResponse {
  InventoryId?: number;
  FilmId?: number;
  StoreId?: number;
  LastUpdate?: string;
  "Rental List"?: RentalRequest;
  Film?: FilmRequest;
  Store?: StoreRequest;
}

/** Inventory Request */
export interface InventoryRequest {
  InventoryId?: number;
  FilmId?: number;
  StoreId?: number;
  LastUpdate?: string;
}

/** Inventory : Inventory Response */
export interface InventoryInventoryGridResponse {
  InventoryId?: number;
  FilmId?: number;
  StoreId?: number;
  LastUpdate?: string;
  "Rental List"?: RentalRequest;
  Film?: FilmRequest;
  Store?: StoreRequest;
}

/** Inventory : Inventory Request */
export interface InventoryInventoryGridRequest {
  InventoryId?: number;
  FilmId?: number;
  StoreId?: number;
  LastUpdate?: string;
}

/** Language Response */
export interface LanguageResponse {
  LanguageId?: number;
  Name?: string;
  LastUpdate?: string;
  "Film List"?: FilmRequest;
  "Film List1"?: FilmRequest;
}

/** Language Request */
export interface LanguageRequest {
  LanguageId?: number;
  Name?: string;
  LastUpdate?: string;
}

/** Language : Language Response */
export interface LanguageLanguageGridResponse {
  LanguageId?: number;
  Name?: string;
  LastUpdate?: string;
  "Film List"?: FilmRequest;
  "Film List1"?: FilmRequest;
}

/** Language : Language Request */
export interface LanguageLanguageGridRequest {
  LanguageId?: number;
  Name?: string;
  LastUpdate?: string;
}

/** Payment Response */
export interface PaymentResponse {
  PaymentId?: number;
  CustomerId?: number;
  StaffId?: number;
  RentalId?: number;
  Amount?: number;
  PaymentDate?: string;
  LastUpdate?: string;
  Customer?: CustomerRequest;
  Rental?: RentalRequest;
  Staff?: StaffRequest;
}

/** Payment Request */
export interface PaymentRequest {
  PaymentId?: number;
  CustomerId?: number;
  StaffId?: number;
  RentalId?: number;
  Amount?: number;
  PaymentDate?: string;
  LastUpdate?: string;
}

/** Payment : Payment Response */
export interface PaymentPaymentGridResponse {
  PaymentId?: number;
  CustomerId?: number;
  StaffId?: number;
  RentalId?: number;
  Amount?: number;
  PaymentDate?: string;
  LastUpdate?: string;
  Customer?: CustomerRequest;
  Rental?: RentalRequest;
  Staff?: StaffRequest;
}

/** Payment : Payment Request */
export interface PaymentPaymentGridRequest {
  PaymentId?: number;
  CustomerId?: number;
  StaffId?: number;
  RentalId?: number;
  Amount?: number;
  PaymentDate?: string;
  LastUpdate?: string;
}

/** Rental Response */
export interface RentalResponse {
  RentalId?: number;
  RentalDate?: string;
  InventoryId?: number;
  CustomerId?: number;
  ReturnDate?: string;
  StaffId?: number;
  LastUpdate?: string;
  "Payment List"?: PaymentRequest;
  Customer?: CustomerRequest;
  Inventory?: InventoryRequest;
  Staff?: StaffRequest;
}

/** Rental Request */
export interface RentalRequest {
  RentalId?: number;
  RentalDate?: string;
  InventoryId?: number;
  CustomerId?: number;
  ReturnDate?: string;
  StaffId?: number;
  LastUpdate?: string;
}

/** Rental : Rental Response */
export interface RentalRentalGridResponse {
  RentalId?: number;
  RentalDate?: string;
  InventoryId?: number;
  CustomerId?: number;
  ReturnDate?: string;
  StaffId?: number;
  LastUpdate?: string;
  "Payment List"?: PaymentRequest;
  Customer?: CustomerRequest;
  Inventory?: InventoryRequest;
  Staff?: StaffRequest;
}

/** Rental : Rental Request */
export interface RentalRentalGridRequest {
  RentalId?: number;
  RentalDate?: string;
  InventoryId?: number;
  CustomerId?: number;
  ReturnDate?: string;
  StaffId?: number;
  LastUpdate?: string;
}

/** Rental : Grid-1 Response */
export interface RentalGrid1GridResponse {
  RentalDate?: string;
  ReturnDate?: string;
  LastUpdate?: string;
  "Payment List"?: PaymentRequest;
  Customer?: CustomerRequest;
  Inventory?: InventoryRequest;
  Staff?: StaffRequest;
}

/** Rental : Grid-1 Request */
export interface RentalGrid1GridRequest {
  RentalDate?: string;
  ReturnDate?: string;
  LastUpdate?: string;
}

/** Staff Response */
export interface StaffResponse {
  StaffId?: number;
  FirstName?: string;
  LastName?: string;
  AddressId?: number;
  Picture?: string;
  Email?: string;
  StoreId?: number;
  Active?: number;
  Username?: string;
  Password?: string;
  LastUpdate?: string;
  "Payment List"?: PaymentRequest;
  "Rental List"?: RentalRequest;
  "Store List"?: StoreRequest;
  Address?: AddressRequest;
  Store?: StoreRequest;
  "Address List"?: AddressRequest;
}

/** Staff Request */
export interface StaffRequest {
  StaffId?: number;
  FirstName?: string;
  LastName?: string;
  AddressId?: number;
  Picture?: string;
  Email?: string;
  StoreId?: number;
  Active?: number;
  Username?: string;
  Password?: string;
  LastUpdate?: string;
}

/** Staff : Staff Response */
export interface StaffStaffGridResponse {
  StaffId?: number;
  FirstName?: string;
  LastName?: string;
  AddressId?: number;
  Picture?: string;
  Email?: string;
  StoreId?: number;
  Active?: number;
  Username?: string;
  Password?: string;
  LastUpdate?: string;
  "Payment List"?: PaymentRequest;
  "Rental List"?: RentalRequest;
  "Store List"?: StoreRequest;
  Address?: AddressRequest;
  Store?: StoreRequest;
  "Address List"?: AddressRequest;
}

/** Staff : Staff Request */
export interface StaffStaffGridRequest {
  StaffId?: number;
  FirstName?: string;
  LastName?: string;
  AddressId?: number;
  Picture?: string;
  Email?: string;
  StoreId?: number;
  Active?: number;
  Username?: string;
  Password?: string;
  LastUpdate?: string;
}

/** Store Response */
export interface StoreResponse {
  StoreId?: number;
  ManagerStaffId?: number;
  AddressId?: number;
  LastUpdate?: string;
  "Customer List"?: CustomerRequest;
  "Inventory List"?: InventoryRequest;
  "Staff List"?: StaffRequest;
  Address?: AddressRequest;
  Staff?: StaffRequest;
  "Film List"?: FilmRequest;
}

/** Store Request */
export interface StoreRequest {
  StoreId?: number;
  ManagerStaffId?: number;
  AddressId?: number;
  LastUpdate?: string;
}

/** Store : Store Response */
export interface StoreStoreGridResponse {
  StoreId?: number;
  ManagerStaffId?: number;
  AddressId?: number;
  LastUpdate?: string;
  "Customer List"?: CustomerRequest;
  "Inventory List"?: InventoryRequest;
  "Staff List"?: StaffRequest;
  Address?: AddressRequest;
  Staff?: StaffRequest;
  "Film List"?: FilmRequest;
}

/** Store : Store Request */
export interface StoreStoreGridRequest {
  StoreId?: number;
  ManagerStaffId?: number;
  AddressId?: number;
  LastUpdate?: string;
}

/** ActorInfo Response */
export interface ActorInfoResponse {
  ActorId?: number;
  FirstName?: string;
  LastName?: string;
  FilmInfo?: string;
}

/** ActorInfo Request */
export interface ActorInfoRequest {
  ActorId?: number;
  FirstName?: string;
  LastName?: string;
  FilmInfo?: string;
}

/** ActorInfo : ActorInfo Response */
export interface ActorInfoActorInfoGridResponse {
  ActorId?: number;
  FirstName?: string;
  LastName?: string;
  FilmInfo?: string;
}

/** ActorInfo : ActorInfo Request */
export interface ActorInfoActorInfoGridRequest {
  ActorId?: number;
  FirstName?: string;
  LastName?: string;
  FilmInfo?: string;
}

/** CustomerList Response */
export interface CustomerListResponse {
  ID?: number;
  Name?: string;
  Address?: string;
  "Zip code"?: string;
  Phone?: string;
  City?: string;
  Country?: string;
  Notes?: string;
  SID?: number;
}

/** CustomerList Request */
export interface CustomerListRequest {
  ID?: number;
  Name?: string;
  Address?: string;
  "Zip code"?: string;
  Phone?: string;
  City?: string;
  Country?: string;
  Notes?: string;
  SID?: number;
}

/** CustomerList : CustomerList Response */
export interface CustomerListCustomerListGridResponse {
  ID?: number;
  Name?: string;
  Address?: string;
  "Zip code"?: string;
  Phone?: string;
  City?: string;
  Country?: string;
  Notes?: string;
  SID?: number;
}

/** CustomerList : CustomerList Request */
export interface CustomerListCustomerListGridRequest {
  ID?: number;
  Name?: string;
  Address?: string;
  "Zip code"?: string;
  Phone?: string;
  City?: string;
  Country?: string;
  Notes?: string;
  SID?: number;
}

/** FilmList Response */
export interface FilmListResponse {
  FID?: number;
  Title?: string;
  Description?: string;
  Category?: string;
  Price?: number;
  Length?: number;
  Rating?: string;
  Actors?: string;
}

/** FilmList Request */
export interface FilmListRequest {
  FID?: number;
  Title?: string;
  Description?: string;
  Category?: string;
  Price?: number;
  Length?: number;
  Rating?: string;
  Actors?: string;
}

/** FilmList : FilmList Response */
export interface FilmListFilmListGridResponse {
  FID?: number;
  Title?: string;
  Description?: string;
  Category?: string;
  Price?: number;
  Length?: number;
  Rating?: string;
  Actors?: string;
}

/** FilmList : FilmList Request */
export interface FilmListFilmListGridRequest {
  FID?: number;
  Title?: string;
  Description?: string;
  Category?: string;
  Price?: number;
  Length?: number;
  Rating?: string;
  Actors?: string;
}

/** NicerButSlowerFilmList Response */
export interface NicerButSlowerFilmListResponse {
  FID?: number;
  Title?: string;
  Description?: string;
  Category?: string;
  Price?: number;
  Length?: number;
  Rating?: string;
  Actors?: string;
}

/** NicerButSlowerFilmList Request */
export interface NicerButSlowerFilmListRequest {
  FID?: number;
  Title?: string;
  Description?: string;
  Category?: string;
  Price?: number;
  Length?: number;
  Rating?: string;
  Actors?: string;
}

/** NicerButSlowerFilmList : NicerButSlowerFilmList Response */
export interface NicerButSlowerFilmListNicerButSlowerFilmListGridResponse {
  FID?: number;
  Title?: string;
  Description?: string;
  Category?: string;
  Price?: number;
  Length?: number;
  Rating?: string;
  Actors?: string;
}

/** NicerButSlowerFilmList : NicerButSlowerFilmList Request */
export interface NicerButSlowerFilmListNicerButSlowerFilmListGridRequest {
  FID?: number;
  Title?: string;
  Description?: string;
  Category?: string;
  Price?: number;
  Length?: number;
  Rating?: string;
  Actors?: string;
}

/** SalesByFilmCategory Response */
export interface SalesByFilmCategoryResponse {
  Category?: string;
  TotalSales?: number;
}

/** SalesByFilmCategory Request */
export interface SalesByFilmCategoryRequest {
  Category?: string;
  TotalSales?: number;
}

/** SalesByFilmCategory : SalesByFilmCategory Response */
export interface SalesByFilmCategorySalesByFilmCategoryGridResponse {
  Category?: string;
  TotalSales?: number;
}

/** SalesByFilmCategory : SalesByFilmCategory Request */
export interface SalesByFilmCategorySalesByFilmCategoryGridRequest {
  Category?: string;
  TotalSales?: number;
}

/** SalesByStore Response */
export interface SalesByStoreResponse {
  Store?: string;
  Manager?: string;
  TotalSales?: number;
}

/** SalesByStore Request */
export interface SalesByStoreRequest {
  Store?: string;
  Manager?: string;
  TotalSales?: number;
}

/** SalesByStore : SalesByStore Response */
export interface SalesByStoreSalesByStoreGridResponse {
  Store?: string;
  Manager?: string;
  TotalSales?: number;
}

/** SalesByStore : SalesByStore Request */
export interface SalesByStoreSalesByStoreGridRequest {
  Store?: string;
  Manager?: string;
  TotalSales?: number;
}

/** StaffList Response */
export interface StaffListResponse {
  ID?: number;
  Name?: string;
  Address?: string;
  "Zip code"?: string;
  Phone?: string;
  City?: string;
  Country?: string;
  SID?: number;
}

/** StaffList Request */
export interface StaffListRequest {
  ID?: number;
  Name?: string;
  Address?: string;
  "Zip code"?: string;
  Phone?: string;
  City?: string;
  Country?: string;
  SID?: number;
}

/** StaffList : StaffList Response */
export interface StaffListStaffListGridResponse {
  ID?: number;
  Name?: string;
  Address?: string;
  "Zip code"?: string;
  Phone?: string;
  City?: string;
  Country?: string;
  SID?: number;
}

/** StaffList : StaffList Request */
export interface StaffListStaffListGridRequest {
  ID?: number;
  Name?: string;
  Address?: string;
  "Zip code"?: string;
  Phone?: string;
  City?: string;
  Country?: string;
  SID?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8080";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title nocodb
 * @version 1.0
 * @baseUrl http://localhost:8080
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description List of all rows from Actor table and response data fields can be filtered based on query params.
     *
     * @tags Actor
     * @name ActorDbTableRowList
     * @summary Actor list
     * @request GET:/api/v1/db/data/v1/test/Actor
     * @secure
     */
    actorDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `FilmActor List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[FilmActor List][where]=(field1,eq,value)` */
        "nested[FilmActor List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `FilmActor List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[FilmActor List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `FilmActor List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[FilmActor List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `FilmActor List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[FilmActor List][fields]=field1,field2` */
        "nested[FilmActor List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `FilmActor List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[FilmActor List][sort]=field1,-field2` */
        "nested[FilmActor List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Film List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Film List][where]=(field1,eq,value)` */
        "nested[Film List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Film List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Film List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Film List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Film List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Film List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Film List][fields]=field1,field2` */
        "nested[Film List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Film List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Film List][sort]=field1,-field2` */
        "nested[Film List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: ActorResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Actor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Actor
     * @name ActorCreate
     * @summary Actor create
     * @request POST:/api/v1/db/data/v1/test/Actor
     * @secure
     */
    actorCreate: (data: ActorRequest, params: RequestParams = {}) =>
      this.request<ActorResponse, any>({
        path: `/api/v1/db/data/v1/test/Actor`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Actor
     * @name ActorRead
     * @summary Actor read
     * @request GET:/api/v1/db/data/v1/test/Actor/{rowId}
     * @secure
     */
    actorRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ActorResponse, any>({
        path: `/api/v1/db/data/v1/test/Actor/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Actor
     * @name ActorUpdate
     * @summary Actor update
     * @request PATCH:/api/v1/db/data/v1/test/Actor/{rowId}
     * @secure
     */
    actorUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<ActorRequest, any>({
        path: `/api/v1/db/data/v1/test/Actor/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Actor
     * @name ActorDelete
     * @summary Actor delete
     * @request DELETE:/api/v1/db/data/v1/test/Actor/{rowId}
     * @secure
     */
    actorDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Actor/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Actor
     * @name ActorCount
     * @summary Actor count
     * @request GET:/api/v1/db/data/v1/test/Actor/count
     * @secure
     */
    actorCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Actor/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Actor
     * @name ActorDbTableRowFindOne
     * @summary Actor find-one
     * @request GET:/api/v1/db/data/v1/test/Actor/find-one
     * @secure
     */
    actorDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ActorResponse, any>({
        path: `/api/v1/db/data/v1/test/Actor/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Actor
     * @name ActorGroupby
     * @summary Actor groupby
     * @request GET:/api/v1/db/data/v1/test/Actor/groupby
     * @secure
     */
    actorGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Actor/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Actor
     * @name ActorBulkCreate
     * @summary Actor bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Actor
     * @secure
     */
    actorBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Actor`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Actor
     * @name ActorBulkUpdate
     * @summary Actor bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Actor
     * @secure
     */
    actorBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Actor`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Actor
     * @name ActorBulkDelete
     * @summary Actor bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Actor
     * @secure
     */
    actorBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Actor`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Actor
     * @name ActorBulkUpdateAll
     * @summary Actor Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Actor/all
     * @secure
     */
    actorBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Actor/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Actor
     * @name ActorBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Actor/all
     * @secure
     */
    actorBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Actor/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Actor
     * @name ActorNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Actor/{rowId}/{relationType}/{columnName}
     * @secure
     */
    actorNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Actor/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Actor
     * @name ActorNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Actor/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    actorNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Actor/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Actor
     * @name ActorNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Actor/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    actorNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Actor/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Actor
     * @name ActorNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Actor/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    actorNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Actor/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Actor
     * @name ActorCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Actor/export/{type}
     * @secure
     */
    actorCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Actor/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Actor grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Actor ( Actor grid )
     * @name ActorActorRowList
     * @summary Actor list
     * @request GET:/api/v1/db/data/v1/test/Actor/views/Actor
     * @secure
     */
    actorActorRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `FilmActor List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[FilmActor List][where]=(field1,eq,value)` */
        "nested[FilmActor List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `FilmActor List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[FilmActor List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `FilmActor List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[FilmActor List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `FilmActor List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[FilmActor List][fields]=field1,field2` */
        "nested[FilmActor List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `FilmActor List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[FilmActor List][sort]=field1,-field2` */
        "nested[FilmActor List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Film List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Film List][where]=(field1,eq,value)` */
        "nested[Film List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Film List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Film List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Film List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Film List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Film List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Film List][fields]=field1,field2` */
        "nested[Film List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Film List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Film List][sort]=field1,-field2` */
        "nested[Film List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: ActorActorGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Actor/views/Actor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Actor ( Actor grid )
     * @name ActorActorRowCreate
     * @summary Actor create
     * @request POST:/api/v1/db/data/v1/test/Actor/views/Actor
     * @secure
     */
    actorActorRowCreate: (data: ActorActorGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Actor/views/Actor`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Actor ( Actor grid )
     * @name ActorActorRowCount
     * @summary Actor count
     * @request GET:/api/v1/db/data/v1/test/Actor/views/Actor/count
     * @secure
     */
    actorActorRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Actor/views/Actor/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Actor ( Actor grid )
     * @name ActorActorRowRead
     * @summary Actor read
     * @request GET:/api/v1/db/data/v1/test/Actor/views/Actor/{rowId}
     * @secure
     */
    actorActorRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<ActorActorGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Actor/views/Actor/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Actor ( Actor grid )
     * @name ActorActorRowUpdate
     * @summary Actor update
     * @request PATCH:/api/v1/db/data/v1/test/Actor/views/Actor/{rowId}
     * @secure
     */
    actorActorRowUpdate: (rowId: string, data: ActorActorGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Actor/views/Actor/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Actor ( Actor grid )
     * @name ActorActorRowDelete
     * @summary Actor delete
     * @request DELETE:/api/v1/db/data/v1/test/Actor/views/Actor/{rowId}
     * @secure
     */
    actorActorRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Actor/views/Actor/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Actor ( Actor grid )
     * @name ActorActorRowExport
     * @summary Actor export
     * @request GET:/api/v1/db/data/v1/test/Actor/views/Actor/export/{type}
     * @secure
     */
    actorActorRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Actor/views/Actor/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Address table and response data fields can be filtered based on query params.
     *
     * @tags Address
     * @name AddressDbTableRowList
     * @summary Address list
     * @request GET:/api/v1/db/data/v1/test/Address
     * @secure
     */
    addressDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `Customer List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Customer List][where]=(field1,eq,value)` */
        "nested[Customer List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Customer List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Customer List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Customer List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Customer List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Customer List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Customer List][fields]=field1,field2` */
        "nested[Customer List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Customer List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Customer List][sort]=field1,-field2` */
        "nested[Customer List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Staff List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Staff List][where]=(field1,eq,value)` */
        "nested[Staff List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Staff List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Staff List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Staff List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Staff List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Staff List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Staff List][fields]=field1,field2` */
        "nested[Staff List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Staff List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Staff List][sort]=field1,-field2` */
        "nested[Staff List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Store List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Store List][where]=(field1,eq,value)` */
        "nested[Store List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Store List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Store List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Store List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Store List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Store List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store List][fields]=field1,field2` */
        "nested[Store List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Store List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Store List][sort]=field1,-field2` */
        "nested[Store List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `City` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[City][fields]=field1,field2` */
        "nested[City][fields]"?: string;
        /** This can be used for filtering rows in nested column `Staff List1`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Staff List1][where]=(field1,eq,value)` */
        "nested[Staff List1][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Staff List1` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Staff List1][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Staff List1` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Staff List1][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Staff List1` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Staff List1][fields]=field1,field2` */
        "nested[Staff List1][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Staff List1` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Staff List1][sort]=field1,-field2` */
        "nested[Staff List1][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: AddressResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Address`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Address
     * @name AddressCreate
     * @summary Address create
     * @request POST:/api/v1/db/data/v1/test/Address
     * @secure
     */
    addressCreate: (data: AddressRequest, params: RequestParams = {}) =>
      this.request<AddressResponse, any>({
        path: `/api/v1/db/data/v1/test/Address`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Address
     * @name AddressRead
     * @summary Address read
     * @request GET:/api/v1/db/data/v1/test/Address/{rowId}
     * @secure
     */
    addressRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AddressResponse, any>({
        path: `/api/v1/db/data/v1/test/Address/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Address
     * @name AddressUpdate
     * @summary Address update
     * @request PATCH:/api/v1/db/data/v1/test/Address/{rowId}
     * @secure
     */
    addressUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<AddressRequest, any>({
        path: `/api/v1/db/data/v1/test/Address/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Address
     * @name AddressDelete
     * @summary Address delete
     * @request DELETE:/api/v1/db/data/v1/test/Address/{rowId}
     * @secure
     */
    addressDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Address/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Address
     * @name AddressCount
     * @summary Address count
     * @request GET:/api/v1/db/data/v1/test/Address/count
     * @secure
     */
    addressCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Address/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Address
     * @name AddressDbTableRowFindOne
     * @summary Address find-one
     * @request GET:/api/v1/db/data/v1/test/Address/find-one
     * @secure
     */
    addressDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AddressResponse, any>({
        path: `/api/v1/db/data/v1/test/Address/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Address
     * @name AddressGroupby
     * @summary Address groupby
     * @request GET:/api/v1/db/data/v1/test/Address/groupby
     * @secure
     */
    addressGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Address/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Address
     * @name AddressBulkCreate
     * @summary Address bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Address
     * @secure
     */
    addressBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Address`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Address
     * @name AddressBulkUpdate
     * @summary Address bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Address
     * @secure
     */
    addressBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Address`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Address
     * @name AddressBulkDelete
     * @summary Address bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Address
     * @secure
     */
    addressBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Address`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Address
     * @name AddressBulkUpdateAll
     * @summary Address Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Address/all
     * @secure
     */
    addressBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Address/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Address
     * @name AddressBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Address/all
     * @secure
     */
    addressBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Address/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Address
     * @name AddressNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Address/{rowId}/{relationType}/{columnName}
     * @secure
     */
    addressNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Customer List" | "Staff List" | "City" | "Staff List1",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Address/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Address
     * @name AddressNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Address/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    addressNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Customer List" | "Staff List" | "City" | "Staff List1",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Address/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Address
     * @name AddressNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Address/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    addressNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Customer List" | "Staff List" | "City" | "Staff List1",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Address/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Address
     * @name AddressNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Address/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    addressNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Customer List" | "Staff List" | "City" | "Staff List1",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Address/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Address
     * @name AddressCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Address/export/{type}
     * @secure
     */
    addressCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Address/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Address grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Address ( Address grid )
     * @name AddressAddressRowList
     * @summary Address list
     * @request GET:/api/v1/db/data/v1/test/Address/views/Address
     * @secure
     */
    addressAddressRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `Customer List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Customer List][where]=(field1,eq,value)` */
        "nested[Customer List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Customer List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Customer List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Customer List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Customer List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Customer List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Customer List][fields]=field1,field2` */
        "nested[Customer List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Customer List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Customer List][sort]=field1,-field2` */
        "nested[Customer List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Staff List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Staff List][where]=(field1,eq,value)` */
        "nested[Staff List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Staff List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Staff List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Staff List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Staff List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Staff List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Staff List][fields]=field1,field2` */
        "nested[Staff List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Staff List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Staff List][sort]=field1,-field2` */
        "nested[Staff List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Store List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Store List][where]=(field1,eq,value)` */
        "nested[Store List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Store List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Store List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Store List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Store List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Store List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store List][fields]=field1,field2` */
        "nested[Store List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Store List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Store List][sort]=field1,-field2` */
        "nested[Store List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `City` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[City][fields]=field1,field2` */
        "nested[City][fields]"?: string;
        /** This can be used for filtering rows in nested column `Staff List1`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Staff List1][where]=(field1,eq,value)` */
        "nested[Staff List1][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Staff List1` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Staff List1][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Staff List1` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Staff List1][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Staff List1` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Staff List1][fields]=field1,field2` */
        "nested[Staff List1][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Staff List1` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Staff List1][sort]=field1,-field2` */
        "nested[Staff List1][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: AddressAddressGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Address/views/Address`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Address ( Address grid )
     * @name AddressAddressRowCreate
     * @summary Address create
     * @request POST:/api/v1/db/data/v1/test/Address/views/Address
     * @secure
     */
    addressAddressRowCreate: (data: AddressAddressGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Address/views/Address`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Address ( Address grid )
     * @name AddressAddressRowCount
     * @summary Address count
     * @request GET:/api/v1/db/data/v1/test/Address/views/Address/count
     * @secure
     */
    addressAddressRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Address/views/Address/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Address ( Address grid )
     * @name AddressAddressRowRead
     * @summary Address read
     * @request GET:/api/v1/db/data/v1/test/Address/views/Address/{rowId}
     * @secure
     */
    addressAddressRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<AddressAddressGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Address/views/Address/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Address ( Address grid )
     * @name AddressAddressRowUpdate
     * @summary Address update
     * @request PATCH:/api/v1/db/data/v1/test/Address/views/Address/{rowId}
     * @secure
     */
    addressAddressRowUpdate: (rowId: string, data: AddressAddressGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Address/views/Address/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Address ( Address grid )
     * @name AddressAddressRowDelete
     * @summary Address delete
     * @request DELETE:/api/v1/db/data/v1/test/Address/views/Address/{rowId}
     * @secure
     */
    addressAddressRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Address/views/Address/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Address ( Address grid )
     * @name AddressAddressRowExport
     * @summary Address export
     * @request GET:/api/v1/db/data/v1/test/Address/views/Address/export/{type}
     * @secure
     */
    addressAddressRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Address/views/Address/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Category table and response data fields can be filtered based on query params.
     *
     * @tags Category
     * @name CategoryDbTableRowList
     * @summary Category list
     * @request GET:/api/v1/db/data/v1/test/Category
     * @secure
     */
    categoryDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `FilmCategory List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[FilmCategory List][where]=(field1,eq,value)` */
        "nested[FilmCategory List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `FilmCategory List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[FilmCategory List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `FilmCategory List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[FilmCategory List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `FilmCategory List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[FilmCategory List][fields]=field1,field2` */
        "nested[FilmCategory List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `FilmCategory List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[FilmCategory List][sort]=field1,-field2` */
        "nested[FilmCategory List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Film List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Film List][where]=(field1,eq,value)` */
        "nested[Film List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Film List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Film List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Film List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Film List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Film List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Film List][fields]=field1,field2` */
        "nested[Film List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Film List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Film List][sort]=field1,-field2` */
        "nested[Film List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CategoryResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Category`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Category
     * @name CategoryCreate
     * @summary Category create
     * @request POST:/api/v1/db/data/v1/test/Category
     * @secure
     */
    categoryCreate: (data: CategoryRequest, params: RequestParams = {}) =>
      this.request<CategoryResponse, any>({
        path: `/api/v1/db/data/v1/test/Category`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Category
     * @name CategoryRead
     * @summary Category read
     * @request GET:/api/v1/db/data/v1/test/Category/{rowId}
     * @secure
     */
    categoryRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryResponse, any>({
        path: `/api/v1/db/data/v1/test/Category/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Category
     * @name CategoryUpdate
     * @summary Category update
     * @request PATCH:/api/v1/db/data/v1/test/Category/{rowId}
     * @secure
     */
    categoryUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<CategoryRequest, any>({
        path: `/api/v1/db/data/v1/test/Category/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Category
     * @name CategoryDelete
     * @summary Category delete
     * @request DELETE:/api/v1/db/data/v1/test/Category/{rowId}
     * @secure
     */
    categoryDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Category/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Category
     * @name CategoryCount
     * @summary Category count
     * @request GET:/api/v1/db/data/v1/test/Category/count
     * @secure
     */
    categoryCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Category/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Category
     * @name CategoryDbTableRowFindOne
     * @summary Category find-one
     * @request GET:/api/v1/db/data/v1/test/Category/find-one
     * @secure
     */
    categoryDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryResponse, any>({
        path: `/api/v1/db/data/v1/test/Category/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Category
     * @name CategoryGroupby
     * @summary Category groupby
     * @request GET:/api/v1/db/data/v1/test/Category/groupby
     * @secure
     */
    categoryGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Category/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Category
     * @name CategoryBulkCreate
     * @summary Category bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Category
     * @secure
     */
    categoryBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Category`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Category
     * @name CategoryBulkUpdate
     * @summary Category bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Category
     * @secure
     */
    categoryBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Category`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Category
     * @name CategoryBulkDelete
     * @summary Category bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Category
     * @secure
     */
    categoryBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Category`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Category
     * @name CategoryBulkUpdateAll
     * @summary Category Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Category/all
     * @secure
     */
    categoryBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Category/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Category
     * @name CategoryBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Category/all
     * @secure
     */
    categoryBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Category/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Category/{rowId}/{relationType}/{columnName}
     * @secure
     */
    categoryNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Category/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Category/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    categoryNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Category/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Category/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    categoryNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Category/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Category/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    categoryNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Category/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Category
     * @name CategoryCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Category/export/{type}
     * @secure
     */
    categoryCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Category/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Category grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Category ( Category grid )
     * @name CategoryCategoryRowList
     * @summary Category list
     * @request GET:/api/v1/db/data/v1/test/Category/views/Category
     * @secure
     */
    categoryCategoryRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `FilmCategory List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[FilmCategory List][where]=(field1,eq,value)` */
        "nested[FilmCategory List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `FilmCategory List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[FilmCategory List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `FilmCategory List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[FilmCategory List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `FilmCategory List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[FilmCategory List][fields]=field1,field2` */
        "nested[FilmCategory List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `FilmCategory List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[FilmCategory List][sort]=field1,-field2` */
        "nested[FilmCategory List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Film List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Film List][where]=(field1,eq,value)` */
        "nested[Film List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Film List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Film List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Film List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Film List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Film List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Film List][fields]=field1,field2` */
        "nested[Film List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Film List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Film List][sort]=field1,-field2` */
        "nested[Film List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CategoryCategoryGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Category/views/Category`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Category ( Category grid )
     * @name CategoryCategoryRowCreate
     * @summary Category create
     * @request POST:/api/v1/db/data/v1/test/Category/views/Category
     * @secure
     */
    categoryCategoryRowCreate: (data: CategoryCategoryGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Category/views/Category`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category ( Category grid )
     * @name CategoryCategoryRowCount
     * @summary Category count
     * @request GET:/api/v1/db/data/v1/test/Category/views/Category/count
     * @secure
     */
    categoryCategoryRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Category/views/Category/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Category ( Category grid )
     * @name CategoryCategoryRowRead
     * @summary Category read
     * @request GET:/api/v1/db/data/v1/test/Category/views/Category/{rowId}
     * @secure
     */
    categoryCategoryRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<CategoryCategoryGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Category/views/Category/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Category ( Category grid )
     * @name CategoryCategoryRowUpdate
     * @summary Category update
     * @request PATCH:/api/v1/db/data/v1/test/Category/views/Category/{rowId}
     * @secure
     */
    categoryCategoryRowUpdate: (rowId: string, data: CategoryCategoryGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Category/views/Category/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Category ( Category grid )
     * @name CategoryCategoryRowDelete
     * @summary Category delete
     * @request DELETE:/api/v1/db/data/v1/test/Category/views/Category/{rowId}
     * @secure
     */
    categoryCategoryRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Category/views/Category/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Category ( Category grid )
     * @name CategoryCategoryRowExport
     * @summary Category export
     * @request GET:/api/v1/db/data/v1/test/Category/views/Category/export/{type}
     * @secure
     */
    categoryCategoryRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Category/views/Category/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from City table and response data fields can be filtered based on query params.
     *
     * @tags City
     * @name CityDbTableRowList
     * @summary City list
     * @request GET:/api/v1/db/data/v1/test/City
     * @secure
     */
    cityDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `Address List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Address List][where]=(field1,eq,value)` */
        "nested[Address List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Address List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Address List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Address List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Address List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Address List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Address List][fields]=field1,field2` */
        "nested[Address List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Address List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Address List][sort]=field1,-field2` */
        "nested[Address List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Country` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Country][fields]=field1,field2` */
        "nested[Country][fields]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CityResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/City`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags City
     * @name CityCreate
     * @summary City create
     * @request POST:/api/v1/db/data/v1/test/City
     * @secure
     */
    cityCreate: (data: CityRequest, params: RequestParams = {}) =>
      this.request<CityResponse, any>({
        path: `/api/v1/db/data/v1/test/City`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags City
     * @name CityRead
     * @summary City read
     * @request GET:/api/v1/db/data/v1/test/City/{rowId}
     * @secure
     */
    cityRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CityResponse, any>({
        path: `/api/v1/db/data/v1/test/City/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags City
     * @name CityUpdate
     * @summary City update
     * @request PATCH:/api/v1/db/data/v1/test/City/{rowId}
     * @secure
     */
    cityUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<CityRequest, any>({
        path: `/api/v1/db/data/v1/test/City/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags City
     * @name CityDelete
     * @summary City delete
     * @request DELETE:/api/v1/db/data/v1/test/City/{rowId}
     * @secure
     */
    cityDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/City/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags City
     * @name CityCount
     * @summary City count
     * @request GET:/api/v1/db/data/v1/test/City/count
     * @secure
     */
    cityCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/City/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags City
     * @name CityDbTableRowFindOne
     * @summary City find-one
     * @request GET:/api/v1/db/data/v1/test/City/find-one
     * @secure
     */
    cityDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CityResponse, any>({
        path: `/api/v1/db/data/v1/test/City/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags City
     * @name CityGroupby
     * @summary City groupby
     * @request GET:/api/v1/db/data/v1/test/City/groupby
     * @secure
     */
    cityGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/City/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags City
     * @name CityBulkCreate
     * @summary City bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/City
     * @secure
     */
    cityBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/City`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags City
     * @name CityBulkUpdate
     * @summary City bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/City
     * @secure
     */
    cityBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/City`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags City
     * @name CityBulkDelete
     * @summary City bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/City
     * @secure
     */
    cityBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/City`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags City
     * @name CityBulkUpdateAll
     * @summary City Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/City/all
     * @secure
     */
    cityBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/City/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags City
     * @name CityBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/City/all
     * @secure
     */
    cityBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/City/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City
     * @name CityNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/City/{rowId}/{relationType}/{columnName}
     * @secure
     */
    cityNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Address List" | "Country",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/City/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City
     * @name CityNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/City/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    cityNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Address List" | "Country",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/City/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City
     * @name CityNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/City/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    cityNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Address List" | "Country",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/City/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City
     * @name CityNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/City/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    cityNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Address List" | "Country",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/City/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags City
     * @name CityCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/City/export/{type}
     * @secure
     */
    cityCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/City/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from City grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags City ( City grid )
     * @name CityCityRowList
     * @summary City list
     * @request GET:/api/v1/db/data/v1/test/City/views/City
     * @secure
     */
    cityCityRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `Address List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Address List][where]=(field1,eq,value)` */
        "nested[Address List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Address List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Address List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Address List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Address List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Address List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Address List][fields]=field1,field2` */
        "nested[Address List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Address List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Address List][sort]=field1,-field2` */
        "nested[Address List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Country` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Country][fields]=field1,field2` */
        "nested[Country][fields]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CityCityGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/City/views/City`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags City ( City grid )
     * @name CityCityRowCreate
     * @summary City create
     * @request POST:/api/v1/db/data/v1/test/City/views/City
     * @secure
     */
    cityCityRowCreate: (data: CityCityGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/City/views/City`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City ( City grid )
     * @name CityCityRowCount
     * @summary City count
     * @request GET:/api/v1/db/data/v1/test/City/views/City/count
     * @secure
     */
    cityCityRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/City/views/City/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags City ( City grid )
     * @name CityCityRowRead
     * @summary City read
     * @request GET:/api/v1/db/data/v1/test/City/views/City/{rowId}
     * @secure
     */
    cityCityRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<CityCityGridResponse, any>({
        path: `/api/v1/db/data/v1/test/City/views/City/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags City ( City grid )
     * @name CityCityRowUpdate
     * @summary City update
     * @request PATCH:/api/v1/db/data/v1/test/City/views/City/{rowId}
     * @secure
     */
    cityCityRowUpdate: (rowId: string, data: CityCityGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/City/views/City/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags City ( City grid )
     * @name CityCityRowDelete
     * @summary City delete
     * @request DELETE:/api/v1/db/data/v1/test/City/views/City/{rowId}
     * @secure
     */
    cityCityRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/City/views/City/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags City ( City grid )
     * @name CityCityRowExport
     * @summary City export
     * @request GET:/api/v1/db/data/v1/test/City/views/City/export/{type}
     * @secure
     */
    cityCityRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/City/views/City/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Country table and response data fields can be filtered based on query params.
     *
     * @tags Country
     * @name CountryDbTableRowList
     * @summary Country list
     * @request GET:/api/v1/db/data/v1/test/Country
     * @secure
     */
    countryDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `City List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[City List][where]=(field1,eq,value)` */
        "nested[City List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `City List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[City List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `City List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[City List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `City List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[City List][fields]=field1,field2` */
        "nested[City List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `City List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[City List][sort]=field1,-field2` */
        "nested[City List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CountryResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Country`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Country
     * @name CountryCreate
     * @summary Country create
     * @request POST:/api/v1/db/data/v1/test/Country
     * @secure
     */
    countryCreate: (data: CountryRequest, params: RequestParams = {}) =>
      this.request<CountryResponse, any>({
        path: `/api/v1/db/data/v1/test/Country`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Country
     * @name CountryRead
     * @summary Country read
     * @request GET:/api/v1/db/data/v1/test/Country/{rowId}
     * @secure
     */
    countryRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CountryResponse, any>({
        path: `/api/v1/db/data/v1/test/Country/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Country
     * @name CountryUpdate
     * @summary Country update
     * @request PATCH:/api/v1/db/data/v1/test/Country/{rowId}
     * @secure
     */
    countryUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<CountryRequest, any>({
        path: `/api/v1/db/data/v1/test/Country/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Country
     * @name CountryDelete
     * @summary Country delete
     * @request DELETE:/api/v1/db/data/v1/test/Country/{rowId}
     * @secure
     */
    countryDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Country/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Country
     * @name CountryCount
     * @summary Country count
     * @request GET:/api/v1/db/data/v1/test/Country/count
     * @secure
     */
    countryCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Country/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Country
     * @name CountryDbTableRowFindOne
     * @summary Country find-one
     * @request GET:/api/v1/db/data/v1/test/Country/find-one
     * @secure
     */
    countryDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CountryResponse, any>({
        path: `/api/v1/db/data/v1/test/Country/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Country
     * @name CountryGroupby
     * @summary Country groupby
     * @request GET:/api/v1/db/data/v1/test/Country/groupby
     * @secure
     */
    countryGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Country/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Country
     * @name CountryBulkCreate
     * @summary Country bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Country
     * @secure
     */
    countryBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Country`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Country
     * @name CountryBulkUpdate
     * @summary Country bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Country
     * @secure
     */
    countryBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Country`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Country
     * @name CountryBulkDelete
     * @summary Country bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Country
     * @secure
     */
    countryBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Country`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Country
     * @name CountryBulkUpdateAll
     * @summary Country Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Country/all
     * @secure
     */
    countryBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Country/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Country
     * @name CountryBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Country/all
     * @secure
     */
    countryBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Country/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name CountryNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Country/{rowId}/{relationType}/{columnName}
     * @secure
     */
    countryNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "City List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Country/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name CountryNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Country/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    countryNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "City List",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Country/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name CountryNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Country/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    countryNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "City List",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Country/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name CountryNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Country/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    countryNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "City List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Country/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Country
     * @name CountryCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Country/export/{type}
     * @secure
     */
    countryCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Country/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Country grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Country ( Country grid )
     * @name CountryCountryRowList
     * @summary Country list
     * @request GET:/api/v1/db/data/v1/test/Country/views/Country
     * @secure
     */
    countryCountryRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `City List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[City List][where]=(field1,eq,value)` */
        "nested[City List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `City List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[City List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `City List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[City List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `City List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[City List][fields]=field1,field2` */
        "nested[City List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `City List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[City List][sort]=field1,-field2` */
        "nested[City List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CountryCountryGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Country/views/Country`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Country ( Country grid )
     * @name CountryCountryRowCreate
     * @summary Country create
     * @request POST:/api/v1/db/data/v1/test/Country/views/Country
     * @secure
     */
    countryCountryRowCreate: (data: CountryCountryGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Country/views/Country`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country ( Country grid )
     * @name CountryCountryRowCount
     * @summary Country count
     * @request GET:/api/v1/db/data/v1/test/Country/views/Country/count
     * @secure
     */
    countryCountryRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Country/views/Country/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Country ( Country grid )
     * @name CountryCountryRowRead
     * @summary Country read
     * @request GET:/api/v1/db/data/v1/test/Country/views/Country/{rowId}
     * @secure
     */
    countryCountryRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<CountryCountryGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Country/views/Country/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Country ( Country grid )
     * @name CountryCountryRowUpdate
     * @summary Country update
     * @request PATCH:/api/v1/db/data/v1/test/Country/views/Country/{rowId}
     * @secure
     */
    countryCountryRowUpdate: (rowId: string, data: CountryCountryGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Country/views/Country/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Country ( Country grid )
     * @name CountryCountryRowDelete
     * @summary Country delete
     * @request DELETE:/api/v1/db/data/v1/test/Country/views/Country/{rowId}
     * @secure
     */
    countryCountryRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Country/views/Country/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Country ( Country grid )
     * @name CountryCountryRowExport
     * @summary Country export
     * @request GET:/api/v1/db/data/v1/test/Country/views/Country/export/{type}
     * @secure
     */
    countryCountryRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Country/views/Country/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Customer table and response data fields can be filtered based on query params.
     *
     * @tags Customer
     * @name CustomerDbTableRowList
     * @summary Customer list
     * @request GET:/api/v1/db/data/v1/test/Customer
     * @secure
     */
    customerDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `Payment List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Payment List][where]=(field1,eq,value)` */
        "nested[Payment List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Payment List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Payment List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Payment List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Payment List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Payment List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Payment List][fields]=field1,field2` */
        "nested[Payment List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Payment List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Payment List][sort]=field1,-field2` */
        "nested[Payment List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Rental List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Rental List][where]=(field1,eq,value)` */
        "nested[Rental List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Rental List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Rental List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Rental List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Rental List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Rental List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Rental List][fields]=field1,field2` */
        "nested[Rental List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Rental List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Rental List][sort]=field1,-field2` */
        "nested[Rental List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Address` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Address][fields]=field1,field2` */
        "nested[Address][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Store` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store][fields]=field1,field2` */
        "nested[Store][fields]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CustomerResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Customer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Customer
     * @name CustomerCreate
     * @summary Customer create
     * @request POST:/api/v1/db/data/v1/test/Customer
     * @secure
     */
    customerCreate: (data: CustomerRequest, params: RequestParams = {}) =>
      this.request<CustomerResponse, any>({
        path: `/api/v1/db/data/v1/test/Customer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Customer
     * @name CustomerRead
     * @summary Customer read
     * @request GET:/api/v1/db/data/v1/test/Customer/{rowId}
     * @secure
     */
    customerRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerResponse, any>({
        path: `/api/v1/db/data/v1/test/Customer/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Customer
     * @name CustomerUpdate
     * @summary Customer update
     * @request PATCH:/api/v1/db/data/v1/test/Customer/{rowId}
     * @secure
     */
    customerUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<CustomerRequest, any>({
        path: `/api/v1/db/data/v1/test/Customer/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Customer
     * @name CustomerDelete
     * @summary Customer delete
     * @request DELETE:/api/v1/db/data/v1/test/Customer/{rowId}
     * @secure
     */
    customerDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Customer/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Customer
     * @name CustomerCount
     * @summary Customer count
     * @request GET:/api/v1/db/data/v1/test/Customer/count
     * @secure
     */
    customerCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Customer/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Customer
     * @name CustomerDbTableRowFindOne
     * @summary Customer find-one
     * @request GET:/api/v1/db/data/v1/test/Customer/find-one
     * @secure
     */
    customerDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerResponse, any>({
        path: `/api/v1/db/data/v1/test/Customer/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Customer
     * @name CustomerGroupby
     * @summary Customer groupby
     * @request GET:/api/v1/db/data/v1/test/Customer/groupby
     * @secure
     */
    customerGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Customer/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Customer
     * @name CustomerBulkCreate
     * @summary Customer bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Customer
     * @secure
     */
    customerBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Customer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Customer
     * @name CustomerBulkUpdate
     * @summary Customer bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Customer
     * @secure
     */
    customerBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Customer`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Customer
     * @name CustomerBulkDelete
     * @summary Customer bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Customer
     * @secure
     */
    customerBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Customer`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Customer
     * @name CustomerBulkUpdateAll
     * @summary Customer Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Customer/all
     * @secure
     */
    customerBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Customer/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Customer
     * @name CustomerBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Customer/all
     * @secure
     */
    customerBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Customer/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Customer/{rowId}/{relationType}/{columnName}
     * @secure
     */
    customerNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Rental List" | "Address" | "Store",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Customer/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Customer/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    customerNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Rental List" | "Address" | "Store",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Customer/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Customer/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    customerNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Rental List" | "Address" | "Store",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Customer/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Customer/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    customerNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Rental List" | "Address" | "Store",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Customer/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Customer
     * @name CustomerCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Customer/export/{type}
     * @secure
     */
    customerCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Customer/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Customer grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Customer ( Customer grid )
     * @name CustomerCustomerRowList
     * @summary Customer list
     * @request GET:/api/v1/db/data/v1/test/Customer/views/Customer
     * @secure
     */
    customerCustomerRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `Payment List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Payment List][where]=(field1,eq,value)` */
        "nested[Payment List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Payment List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Payment List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Payment List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Payment List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Payment List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Payment List][fields]=field1,field2` */
        "nested[Payment List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Payment List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Payment List][sort]=field1,-field2` */
        "nested[Payment List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Rental List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Rental List][where]=(field1,eq,value)` */
        "nested[Rental List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Rental List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Rental List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Rental List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Rental List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Rental List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Rental List][fields]=field1,field2` */
        "nested[Rental List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Rental List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Rental List][sort]=field1,-field2` */
        "nested[Rental List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Address` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Address][fields]=field1,field2` */
        "nested[Address][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Store` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store][fields]=field1,field2` */
        "nested[Store][fields]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CustomerCustomerGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Customer/views/Customer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Customer ( Customer grid )
     * @name CustomerCustomerRowCreate
     * @summary Customer create
     * @request POST:/api/v1/db/data/v1/test/Customer/views/Customer
     * @secure
     */
    customerCustomerRowCreate: (data: CustomerCustomerGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Customer/views/Customer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer ( Customer grid )
     * @name CustomerCustomerRowCount
     * @summary Customer count
     * @request GET:/api/v1/db/data/v1/test/Customer/views/Customer/count
     * @secure
     */
    customerCustomerRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Customer/views/Customer/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Customer ( Customer grid )
     * @name CustomerCustomerRowRead
     * @summary Customer read
     * @request GET:/api/v1/db/data/v1/test/Customer/views/Customer/{rowId}
     * @secure
     */
    customerCustomerRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<CustomerCustomerGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Customer/views/Customer/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Customer ( Customer grid )
     * @name CustomerCustomerRowUpdate
     * @summary Customer update
     * @request PATCH:/api/v1/db/data/v1/test/Customer/views/Customer/{rowId}
     * @secure
     */
    customerCustomerRowUpdate: (rowId: string, data: CustomerCustomerGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Customer/views/Customer/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Customer ( Customer grid )
     * @name CustomerCustomerRowDelete
     * @summary Customer delete
     * @request DELETE:/api/v1/db/data/v1/test/Customer/views/Customer/{rowId}
     * @secure
     */
    customerCustomerRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Customer/views/Customer/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Customer ( Customer grid )
     * @name CustomerCustomerRowExport
     * @summary Customer export
     * @request GET:/api/v1/db/data/v1/test/Customer/views/Customer/export/{type}
     * @secure
     */
    customerCustomerRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Customer/views/Customer/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Film table and response data fields can be filtered based on query params.
     *
     * @tags Film
     * @name FilmDbTableRowList
     * @summary Film list
     * @request GET:/api/v1/db/data/v1/test/Film
     * @secure
     */
    filmDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `FilmActor List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[FilmActor List][where]=(field1,eq,value)` */
        "nested[FilmActor List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `FilmActor List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[FilmActor List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `FilmActor List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[FilmActor List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `FilmActor List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[FilmActor List][fields]=field1,field2` */
        "nested[FilmActor List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `FilmActor List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[FilmActor List][sort]=field1,-field2` */
        "nested[FilmActor List][sort]"?: string;
        /** This can be used for filtering rows in nested column `FilmCategory List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[FilmCategory List][where]=(field1,eq,value)` */
        "nested[FilmCategory List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `FilmCategory List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[FilmCategory List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `FilmCategory List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[FilmCategory List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `FilmCategory List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[FilmCategory List][fields]=field1,field2` */
        "nested[FilmCategory List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `FilmCategory List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[FilmCategory List][sort]=field1,-field2` */
        "nested[FilmCategory List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Inventory List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Inventory List][where]=(field1,eq,value)` */
        "nested[Inventory List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Inventory List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Inventory List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Inventory List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Inventory List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Inventory List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Inventory List][fields]=field1,field2` */
        "nested[Inventory List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Inventory List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Inventory List][sort]=field1,-field2` */
        "nested[Inventory List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Language` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Language][fields]=field1,field2` */
        "nested[Language][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Language1` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Language1][fields]=field1,field2` */
        "nested[Language1][fields]"?: string;
        /** This can be used for filtering rows in nested column `Category List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Category List][where]=(field1,eq,value)` */
        "nested[Category List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Category List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Category List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Category List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Category List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Category List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Category List][fields]=field1,field2` */
        "nested[Category List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Category List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Category List][sort]=field1,-field2` */
        "nested[Category List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Actor List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Actor List][where]=(field1,eq,value)` */
        "nested[Actor List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Actor List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Actor List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Actor List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Actor List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Actor List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Actor List][fields]=field1,field2` */
        "nested[Actor List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Actor List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Actor List][sort]=field1,-field2` */
        "nested[Actor List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Store List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Store List][where]=(field1,eq,value)` */
        "nested[Store List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Store List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Store List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Store List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Store List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Store List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store List][fields]=field1,field2` */
        "nested[Store List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Store List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Store List][sort]=field1,-field2` */
        "nested[Store List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: FilmResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Film`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Film
     * @name FilmCreate
     * @summary Film create
     * @request POST:/api/v1/db/data/v1/test/Film
     * @secure
     */
    filmCreate: (data: FilmRequest, params: RequestParams = {}) =>
      this.request<FilmResponse, any>({
        path: `/api/v1/db/data/v1/test/Film`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Film
     * @name FilmRead
     * @summary Film read
     * @request GET:/api/v1/db/data/v1/test/Film/{rowId}
     * @secure
     */
    filmRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilmResponse, any>({
        path: `/api/v1/db/data/v1/test/Film/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Film
     * @name FilmUpdate
     * @summary Film update
     * @request PATCH:/api/v1/db/data/v1/test/Film/{rowId}
     * @secure
     */
    filmUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<FilmRequest, any>({
        path: `/api/v1/db/data/v1/test/Film/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Film
     * @name FilmDelete
     * @summary Film delete
     * @request DELETE:/api/v1/db/data/v1/test/Film/{rowId}
     * @secure
     */
    filmDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Film/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Film
     * @name FilmCount
     * @summary Film count
     * @request GET:/api/v1/db/data/v1/test/Film/count
     * @secure
     */
    filmCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Film/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Film
     * @name FilmDbTableRowFindOne
     * @summary Film find-one
     * @request GET:/api/v1/db/data/v1/test/Film/find-one
     * @secure
     */
    filmDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilmResponse, any>({
        path: `/api/v1/db/data/v1/test/Film/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Film
     * @name FilmGroupby
     * @summary Film groupby
     * @request GET:/api/v1/db/data/v1/test/Film/groupby
     * @secure
     */
    filmGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Film/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Film
     * @name FilmBulkCreate
     * @summary Film bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Film
     * @secure
     */
    filmBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Film`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Film
     * @name FilmBulkUpdate
     * @summary Film bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Film
     * @secure
     */
    filmBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Film`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Film
     * @name FilmBulkDelete
     * @summary Film bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Film
     * @secure
     */
    filmBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Film`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Film
     * @name FilmBulkUpdateAll
     * @summary Film Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Film/all
     * @secure
     */
    filmBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Film/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Film
     * @name FilmBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Film/all
     * @secure
     */
    filmBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Film/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Film
     * @name FilmNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Film/{rowId}/{relationType}/{columnName}
     * @secure
     */
    filmNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Language" | "Language1" | "Category List" | "Actor List" | "Store List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Film/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Film
     * @name FilmNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Film/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    filmNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Language" | "Language1" | "Category List" | "Actor List" | "Store List",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Film/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Film
     * @name FilmNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Film/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    filmNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Language" | "Language1" | "Category List" | "Actor List" | "Store List",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Film/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Film
     * @name FilmNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Film/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    filmNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Language" | "Language1" | "Category List" | "Actor List" | "Store List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Film/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Film
     * @name FilmCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Film/export/{type}
     * @secure
     */
    filmCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Film/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Film grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Film ( Film grid )
     * @name FilmFilmRowList
     * @summary Film list
     * @request GET:/api/v1/db/data/v1/test/Film/views/Film
     * @secure
     */
    filmFilmRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `FilmActor List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[FilmActor List][where]=(field1,eq,value)` */
        "nested[FilmActor List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `FilmActor List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[FilmActor List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `FilmActor List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[FilmActor List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `FilmActor List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[FilmActor List][fields]=field1,field2` */
        "nested[FilmActor List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `FilmActor List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[FilmActor List][sort]=field1,-field2` */
        "nested[FilmActor List][sort]"?: string;
        /** This can be used for filtering rows in nested column `FilmCategory List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[FilmCategory List][where]=(field1,eq,value)` */
        "nested[FilmCategory List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `FilmCategory List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[FilmCategory List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `FilmCategory List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[FilmCategory List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `FilmCategory List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[FilmCategory List][fields]=field1,field2` */
        "nested[FilmCategory List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `FilmCategory List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[FilmCategory List][sort]=field1,-field2` */
        "nested[FilmCategory List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Inventory List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Inventory List][where]=(field1,eq,value)` */
        "nested[Inventory List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Inventory List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Inventory List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Inventory List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Inventory List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Inventory List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Inventory List][fields]=field1,field2` */
        "nested[Inventory List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Inventory List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Inventory List][sort]=field1,-field2` */
        "nested[Inventory List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Language` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Language][fields]=field1,field2` */
        "nested[Language][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Language1` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Language1][fields]=field1,field2` */
        "nested[Language1][fields]"?: string;
        /** This can be used for filtering rows in nested column `Category List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Category List][where]=(field1,eq,value)` */
        "nested[Category List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Category List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Category List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Category List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Category List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Category List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Category List][fields]=field1,field2` */
        "nested[Category List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Category List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Category List][sort]=field1,-field2` */
        "nested[Category List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Actor List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Actor List][where]=(field1,eq,value)` */
        "nested[Actor List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Actor List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Actor List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Actor List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Actor List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Actor List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Actor List][fields]=field1,field2` */
        "nested[Actor List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Actor List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Actor List][sort]=field1,-field2` */
        "nested[Actor List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Store List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Store List][where]=(field1,eq,value)` */
        "nested[Store List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Store List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Store List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Store List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Store List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Store List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store List][fields]=field1,field2` */
        "nested[Store List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Store List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Store List][sort]=field1,-field2` */
        "nested[Store List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: FilmFilmGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Film/views/Film`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Film ( Film grid )
     * @name FilmFilmRowCreate
     * @summary Film create
     * @request POST:/api/v1/db/data/v1/test/Film/views/Film
     * @secure
     */
    filmFilmRowCreate: (data: FilmFilmGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Film/views/Film`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Film ( Film grid )
     * @name FilmFilmRowCount
     * @summary Film count
     * @request GET:/api/v1/db/data/v1/test/Film/views/Film/count
     * @secure
     */
    filmFilmRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Film/views/Film/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Film ( Film grid )
     * @name FilmFilmRowRead
     * @summary Film read
     * @request GET:/api/v1/db/data/v1/test/Film/views/Film/{rowId}
     * @secure
     */
    filmFilmRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<FilmFilmGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Film/views/Film/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Film ( Film grid )
     * @name FilmFilmRowUpdate
     * @summary Film update
     * @request PATCH:/api/v1/db/data/v1/test/Film/views/Film/{rowId}
     * @secure
     */
    filmFilmRowUpdate: (rowId: string, data: FilmFilmGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Film/views/Film/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Film ( Film grid )
     * @name FilmFilmRowDelete
     * @summary Film delete
     * @request DELETE:/api/v1/db/data/v1/test/Film/views/Film/{rowId}
     * @secure
     */
    filmFilmRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Film/views/Film/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Film ( Film grid )
     * @name FilmFilmRowExport
     * @summary Film export
     * @request GET:/api/v1/db/data/v1/test/Film/views/Film/export/{type}
     * @secure
     */
    filmFilmRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Film/views/Film/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from FilmText table and response data fields can be filtered based on query params.
     *
     * @tags FilmText
     * @name FilmtextDbTableRowList
     * @summary FilmText list
     * @request GET:/api/v1/db/data/v1/test/FilmText
     * @secure
     */
    filmtextDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: FilmTextResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/FilmText`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags FilmText
     * @name FilmtextCreate
     * @summary FilmText create
     * @request POST:/api/v1/db/data/v1/test/FilmText
     * @secure
     */
    filmtextCreate: (data: FilmTextRequest, params: RequestParams = {}) =>
      this.request<FilmTextResponse, any>({
        path: `/api/v1/db/data/v1/test/FilmText`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags FilmText
     * @name FilmtextRead
     * @summary FilmText read
     * @request GET:/api/v1/db/data/v1/test/FilmText/{rowId}
     * @secure
     */
    filmtextRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilmTextResponse, any>({
        path: `/api/v1/db/data/v1/test/FilmText/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags FilmText
     * @name FilmtextUpdate
     * @summary FilmText update
     * @request PATCH:/api/v1/db/data/v1/test/FilmText/{rowId}
     * @secure
     */
    filmtextUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<FilmTextRequest, any>({
        path: `/api/v1/db/data/v1/test/FilmText/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags FilmText
     * @name FilmtextDelete
     * @summary FilmText delete
     * @request DELETE:/api/v1/db/data/v1/test/FilmText/{rowId}
     * @secure
     */
    filmtextDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/FilmText/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags FilmText
     * @name FilmtextCount
     * @summary FilmText count
     * @request GET:/api/v1/db/data/v1/test/FilmText/count
     * @secure
     */
    filmtextCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/FilmText/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags FilmText
     * @name FilmtextDbTableRowFindOne
     * @summary FilmText find-one
     * @request GET:/api/v1/db/data/v1/test/FilmText/find-one
     * @secure
     */
    filmtextDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilmTextResponse, any>({
        path: `/api/v1/db/data/v1/test/FilmText/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags FilmText
     * @name FilmtextGroupby
     * @summary FilmText groupby
     * @request GET:/api/v1/db/data/v1/test/FilmText/groupby
     * @secure
     */
    filmtextGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/FilmText/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags FilmText
     * @name FilmtextBulkCreate
     * @summary FilmText bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/FilmText
     * @secure
     */
    filmtextBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/FilmText`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags FilmText
     * @name FilmtextBulkUpdate
     * @summary FilmText bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/FilmText
     * @secure
     */
    filmtextBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/FilmText`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags FilmText
     * @name FilmtextBulkDelete
     * @summary FilmText bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/FilmText
     * @secure
     */
    filmtextBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/FilmText`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags FilmText
     * @name FilmtextBulkUpdateAll
     * @summary FilmText Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/FilmText/all
     * @secure
     */
    filmtextBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/FilmText/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags FilmText
     * @name FilmtextBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/FilmText/all
     * @secure
     */
    filmtextBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/FilmText/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags FilmText
     * @name FilmtextCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/FilmText/export/{type}
     * @secure
     */
    filmtextCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/FilmText/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from FilmText grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags FilmText ( FilmText grid )
     * @name FilmTextFilmTextRowList
     * @summary FilmText list
     * @request GET:/api/v1/db/data/v1/test/FilmText/views/FilmText
     * @secure
     */
    filmTextFilmTextRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: FilmTextFilmTextGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/FilmText/views/FilmText`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags FilmText ( FilmText grid )
     * @name FilmTextFilmTextRowCreate
     * @summary FilmText create
     * @request POST:/api/v1/db/data/v1/test/FilmText/views/FilmText
     * @secure
     */
    filmTextFilmTextRowCreate: (data: FilmTextFilmTextGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/FilmText/views/FilmText`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FilmText ( FilmText grid )
     * @name FilmTextFilmTextRowCount
     * @summary FilmText count
     * @request GET:/api/v1/db/data/v1/test/FilmText/views/FilmText/count
     * @secure
     */
    filmTextFilmTextRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/FilmText/views/FilmText/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags FilmText ( FilmText grid )
     * @name FilmTextFilmTextRowRead
     * @summary FilmText read
     * @request GET:/api/v1/db/data/v1/test/FilmText/views/FilmText/{rowId}
     * @secure
     */
    filmTextFilmTextRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<FilmTextFilmTextGridResponse, any>({
        path: `/api/v1/db/data/v1/test/FilmText/views/FilmText/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags FilmText ( FilmText grid )
     * @name FilmTextFilmTextRowUpdate
     * @summary FilmText update
     * @request PATCH:/api/v1/db/data/v1/test/FilmText/views/FilmText/{rowId}
     * @secure
     */
    filmTextFilmTextRowUpdate: (rowId: string, data: FilmTextFilmTextGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/FilmText/views/FilmText/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags FilmText ( FilmText grid )
     * @name FilmTextFilmTextRowDelete
     * @summary FilmText delete
     * @request DELETE:/api/v1/db/data/v1/test/FilmText/views/FilmText/{rowId}
     * @secure
     */
    filmTextFilmTextRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/FilmText/views/FilmText/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags FilmText ( FilmText grid )
     * @name FilmTextFilmTextRowExport
     * @summary FilmText export
     * @request GET:/api/v1/db/data/v1/test/FilmText/views/FilmText/export/{type}
     * @secure
     */
    filmTextFilmTextRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/FilmText/views/FilmText/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Language table and response data fields can be filtered based on query params.
     *
     * @tags Language
     * @name LanguageDbTableRowList
     * @summary Language list
     * @request GET:/api/v1/db/data/v1/test/Language
     * @secure
     */
    languageDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `Film List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Film List][where]=(field1,eq,value)` */
        "nested[Film List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Film List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Film List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Film List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Film List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Film List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Film List][fields]=field1,field2` */
        "nested[Film List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Film List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Film List][sort]=field1,-field2` */
        "nested[Film List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Film List1`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Film List1][where]=(field1,eq,value)` */
        "nested[Film List1][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Film List1` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Film List1][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Film List1` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Film List1][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Film List1` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Film List1][fields]=field1,field2` */
        "nested[Film List1][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Film List1` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Film List1][sort]=field1,-field2` */
        "nested[Film List1][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: LanguageResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Language`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Language
     * @name LanguageCreate
     * @summary Language create
     * @request POST:/api/v1/db/data/v1/test/Language
     * @secure
     */
    languageCreate: (data: LanguageRequest, params: RequestParams = {}) =>
      this.request<LanguageResponse, any>({
        path: `/api/v1/db/data/v1/test/Language`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Language
     * @name LanguageRead
     * @summary Language read
     * @request GET:/api/v1/db/data/v1/test/Language/{rowId}
     * @secure
     */
    languageRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LanguageResponse, any>({
        path: `/api/v1/db/data/v1/test/Language/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Language
     * @name LanguageUpdate
     * @summary Language update
     * @request PATCH:/api/v1/db/data/v1/test/Language/{rowId}
     * @secure
     */
    languageUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<LanguageRequest, any>({
        path: `/api/v1/db/data/v1/test/Language/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Language
     * @name LanguageDelete
     * @summary Language delete
     * @request DELETE:/api/v1/db/data/v1/test/Language/{rowId}
     * @secure
     */
    languageDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Language/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Language
     * @name LanguageCount
     * @summary Language count
     * @request GET:/api/v1/db/data/v1/test/Language/count
     * @secure
     */
    languageCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Language/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Language
     * @name LanguageDbTableRowFindOne
     * @summary Language find-one
     * @request GET:/api/v1/db/data/v1/test/Language/find-one
     * @secure
     */
    languageDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LanguageResponse, any>({
        path: `/api/v1/db/data/v1/test/Language/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Language
     * @name LanguageGroupby
     * @summary Language groupby
     * @request GET:/api/v1/db/data/v1/test/Language/groupby
     * @secure
     */
    languageGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Language/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Language
     * @name LanguageBulkCreate
     * @summary Language bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Language
     * @secure
     */
    languageBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Language`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Language
     * @name LanguageBulkUpdate
     * @summary Language bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Language
     * @secure
     */
    languageBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Language`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Language
     * @name LanguageBulkDelete
     * @summary Language bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Language
     * @secure
     */
    languageBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Language`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Language
     * @name LanguageBulkUpdateAll
     * @summary Language Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Language/all
     * @secure
     */
    languageBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Language/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Language
     * @name LanguageBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Language/all
     * @secure
     */
    languageBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Language/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name LanguageNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Language/{rowId}/{relationType}/{columnName}
     * @secure
     */
    languageNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List" | "Film List1",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Language/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name LanguageNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Language/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    languageNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List" | "Film List1",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Language/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name LanguageNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Language/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    languageNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List" | "Film List1",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Language/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name LanguageNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Language/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    languageNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Film List" | "Film List1",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Language/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Language
     * @name LanguageCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Language/export/{type}
     * @secure
     */
    languageCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Language/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Language grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Language ( Language grid )
     * @name LanguageLanguageRowList
     * @summary Language list
     * @request GET:/api/v1/db/data/v1/test/Language/views/Language
     * @secure
     */
    languageLanguageRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `Film List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Film List][where]=(field1,eq,value)` */
        "nested[Film List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Film List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Film List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Film List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Film List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Film List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Film List][fields]=field1,field2` */
        "nested[Film List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Film List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Film List][sort]=field1,-field2` */
        "nested[Film List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Film List1`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Film List1][where]=(field1,eq,value)` */
        "nested[Film List1][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Film List1` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Film List1][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Film List1` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Film List1][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Film List1` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Film List1][fields]=field1,field2` */
        "nested[Film List1][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Film List1` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Film List1][sort]=field1,-field2` */
        "nested[Film List1][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: LanguageLanguageGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Language/views/Language`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Language ( Language grid )
     * @name LanguageLanguageRowCreate
     * @summary Language create
     * @request POST:/api/v1/db/data/v1/test/Language/views/Language
     * @secure
     */
    languageLanguageRowCreate: (data: LanguageLanguageGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Language/views/Language`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language ( Language grid )
     * @name LanguageLanguageRowCount
     * @summary Language count
     * @request GET:/api/v1/db/data/v1/test/Language/views/Language/count
     * @secure
     */
    languageLanguageRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Language/views/Language/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Language ( Language grid )
     * @name LanguageLanguageRowRead
     * @summary Language read
     * @request GET:/api/v1/db/data/v1/test/Language/views/Language/{rowId}
     * @secure
     */
    languageLanguageRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<LanguageLanguageGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Language/views/Language/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Language ( Language grid )
     * @name LanguageLanguageRowUpdate
     * @summary Language update
     * @request PATCH:/api/v1/db/data/v1/test/Language/views/Language/{rowId}
     * @secure
     */
    languageLanguageRowUpdate: (rowId: string, data: LanguageLanguageGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Language/views/Language/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Language ( Language grid )
     * @name LanguageLanguageRowDelete
     * @summary Language delete
     * @request DELETE:/api/v1/db/data/v1/test/Language/views/Language/{rowId}
     * @secure
     */
    languageLanguageRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Language/views/Language/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Language ( Language grid )
     * @name LanguageLanguageRowExport
     * @summary Language export
     * @request GET:/api/v1/db/data/v1/test/Language/views/Language/export/{type}
     * @secure
     */
    languageLanguageRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Language/views/Language/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Payment table and response data fields can be filtered based on query params.
     *
     * @tags Payment
     * @name PaymentDbTableRowList
     * @summary Payment list
     * @request GET:/api/v1/db/data/v1/test/Payment
     * @secure
     */
    paymentDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Customer` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Customer][fields]=field1,field2` */
        "nested[Customer][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Rental` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Rental][fields]=field1,field2` */
        "nested[Rental][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Staff` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Staff][fields]=field1,field2` */
        "nested[Staff][fields]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: PaymentResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Payment`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Payment
     * @name PaymentCreate
     * @summary Payment create
     * @request POST:/api/v1/db/data/v1/test/Payment
     * @secure
     */
    paymentCreate: (data: PaymentRequest, params: RequestParams = {}) =>
      this.request<PaymentResponse, any>({
        path: `/api/v1/db/data/v1/test/Payment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Payment
     * @name PaymentRead
     * @summary Payment read
     * @request GET:/api/v1/db/data/v1/test/Payment/{rowId}
     * @secure
     */
    paymentRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaymentResponse, any>({
        path: `/api/v1/db/data/v1/test/Payment/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Payment
     * @name PaymentUpdate
     * @summary Payment update
     * @request PATCH:/api/v1/db/data/v1/test/Payment/{rowId}
     * @secure
     */
    paymentUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<PaymentRequest, any>({
        path: `/api/v1/db/data/v1/test/Payment/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Payment
     * @name PaymentDelete
     * @summary Payment delete
     * @request DELETE:/api/v1/db/data/v1/test/Payment/{rowId}
     * @secure
     */
    paymentDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Payment/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Payment
     * @name PaymentCount
     * @summary Payment count
     * @request GET:/api/v1/db/data/v1/test/Payment/count
     * @secure
     */
    paymentCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Payment/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Payment
     * @name PaymentDbTableRowFindOne
     * @summary Payment find-one
     * @request GET:/api/v1/db/data/v1/test/Payment/find-one
     * @secure
     */
    paymentDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaymentResponse, any>({
        path: `/api/v1/db/data/v1/test/Payment/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Payment
     * @name PaymentGroupby
     * @summary Payment groupby
     * @request GET:/api/v1/db/data/v1/test/Payment/groupby
     * @secure
     */
    paymentGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Payment/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Payment
     * @name PaymentBulkCreate
     * @summary Payment bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Payment
     * @secure
     */
    paymentBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Payment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Payment
     * @name PaymentBulkUpdate
     * @summary Payment bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Payment
     * @secure
     */
    paymentBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Payment`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Payment
     * @name PaymentBulkDelete
     * @summary Payment bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Payment
     * @secure
     */
    paymentBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Payment`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Payment
     * @name PaymentBulkUpdateAll
     * @summary Payment Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Payment/all
     * @secure
     */
    paymentBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Payment/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Payment
     * @name PaymentBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Payment/all
     * @secure
     */
    paymentBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Payment/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Payment/{rowId}/{relationType}/{columnName}
     * @secure
     */
    paymentNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Customer" | "Rental" | "Staff",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Payment/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Payment/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    paymentNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Customer" | "Rental" | "Staff",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Payment/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Payment/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    paymentNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Customer" | "Rental" | "Staff",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Payment/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Payment/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    paymentNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Customer" | "Rental" | "Staff",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Payment/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Payment
     * @name PaymentCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Payment/export/{type}
     * @secure
     */
    paymentCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Payment/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Payment grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Payment ( Payment grid )
     * @name PaymentPaymentRowList
     * @summary Payment list
     * @request GET:/api/v1/db/data/v1/test/Payment/views/Payment
     * @secure
     */
    paymentPaymentRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Customer` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Customer][fields]=field1,field2` */
        "nested[Customer][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Rental` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Rental][fields]=field1,field2` */
        "nested[Rental][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Staff` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Staff][fields]=field1,field2` */
        "nested[Staff][fields]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: PaymentPaymentGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Payment/views/Payment`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Payment ( Payment grid )
     * @name PaymentPaymentRowCreate
     * @summary Payment create
     * @request POST:/api/v1/db/data/v1/test/Payment/views/Payment
     * @secure
     */
    paymentPaymentRowCreate: (data: PaymentPaymentGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Payment/views/Payment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment ( Payment grid )
     * @name PaymentPaymentRowCount
     * @summary Payment count
     * @request GET:/api/v1/db/data/v1/test/Payment/views/Payment/count
     * @secure
     */
    paymentPaymentRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Payment/views/Payment/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Payment ( Payment grid )
     * @name PaymentPaymentRowRead
     * @summary Payment read
     * @request GET:/api/v1/db/data/v1/test/Payment/views/Payment/{rowId}
     * @secure
     */
    paymentPaymentRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<PaymentPaymentGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Payment/views/Payment/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Payment ( Payment grid )
     * @name PaymentPaymentRowUpdate
     * @summary Payment update
     * @request PATCH:/api/v1/db/data/v1/test/Payment/views/Payment/{rowId}
     * @secure
     */
    paymentPaymentRowUpdate: (rowId: string, data: PaymentPaymentGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Payment/views/Payment/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Payment ( Payment grid )
     * @name PaymentPaymentRowDelete
     * @summary Payment delete
     * @request DELETE:/api/v1/db/data/v1/test/Payment/views/Payment/{rowId}
     * @secure
     */
    paymentPaymentRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Payment/views/Payment/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Payment ( Payment grid )
     * @name PaymentPaymentRowExport
     * @summary Payment export
     * @request GET:/api/v1/db/data/v1/test/Payment/views/Payment/export/{type}
     * @secure
     */
    paymentPaymentRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Payment/views/Payment/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Rental table and response data fields can be filtered based on query params.
     *
     * @tags Rental
     * @name RentalDbTableRowList
     * @summary Rental list
     * @request GET:/api/v1/db/data/v1/test/Rental
     * @secure
     */
    rentalDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `Payment List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Payment List][where]=(field1,eq,value)` */
        "nested[Payment List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Payment List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Payment List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Payment List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Payment List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Payment List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Payment List][fields]=field1,field2` */
        "nested[Payment List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Payment List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Payment List][sort]=field1,-field2` */
        "nested[Payment List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Customer` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Customer][fields]=field1,field2` */
        "nested[Customer][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Inventory` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Inventory][fields]=field1,field2` */
        "nested[Inventory][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Staff` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Staff][fields]=field1,field2` */
        "nested[Staff][fields]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: RentalResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Rental`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Rental
     * @name RentalCreate
     * @summary Rental create
     * @request POST:/api/v1/db/data/v1/test/Rental
     * @secure
     */
    rentalCreate: (data: RentalRequest, params: RequestParams = {}) =>
      this.request<RentalResponse, any>({
        path: `/api/v1/db/data/v1/test/Rental`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Rental
     * @name RentalRead
     * @summary Rental read
     * @request GET:/api/v1/db/data/v1/test/Rental/{rowId}
     * @secure
     */
    rentalRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RentalResponse, any>({
        path: `/api/v1/db/data/v1/test/Rental/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Rental
     * @name RentalUpdate
     * @summary Rental update
     * @request PATCH:/api/v1/db/data/v1/test/Rental/{rowId}
     * @secure
     */
    rentalUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<RentalRequest, any>({
        path: `/api/v1/db/data/v1/test/Rental/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Rental
     * @name RentalDelete
     * @summary Rental delete
     * @request DELETE:/api/v1/db/data/v1/test/Rental/{rowId}
     * @secure
     */
    rentalDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Rental/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Rental
     * @name RentalCount
     * @summary Rental count
     * @request GET:/api/v1/db/data/v1/test/Rental/count
     * @secure
     */
    rentalCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Rental
     * @name RentalDbTableRowFindOne
     * @summary Rental find-one
     * @request GET:/api/v1/db/data/v1/test/Rental/find-one
     * @secure
     */
    rentalDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RentalResponse, any>({
        path: `/api/v1/db/data/v1/test/Rental/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Rental
     * @name RentalGroupby
     * @summary Rental groupby
     * @request GET:/api/v1/db/data/v1/test/Rental/groupby
     * @secure
     */
    rentalGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Rental/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Rental
     * @name RentalBulkCreate
     * @summary Rental bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Rental
     * @secure
     */
    rentalBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Rental`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Rental
     * @name RentalBulkUpdate
     * @summary Rental bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Rental
     * @secure
     */
    rentalBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Rental`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Rental
     * @name RentalBulkDelete
     * @summary Rental bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Rental
     * @secure
     */
    rentalBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Rental`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Rental
     * @name RentalBulkUpdateAll
     * @summary Rental Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Rental/all
     * @secure
     */
    rentalBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Rental/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Rental
     * @name RentalBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Rental/all
     * @secure
     */
    rentalBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Rental/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rental
     * @name RentalNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Rental/{rowId}/{relationType}/{columnName}
     * @secure
     */
    rentalNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Customer" | "Inventory" | "Staff",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rental
     * @name RentalNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Rental/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    rentalNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Customer" | "Inventory" | "Staff",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rental
     * @name RentalNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Rental/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    rentalNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Customer" | "Inventory" | "Staff",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rental
     * @name RentalNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Rental/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    rentalNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Customer" | "Inventory" | "Staff",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Rental
     * @name RentalCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Rental/export/{type}
     * @secure
     */
    rentalCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Rental grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Rental ( Rental grid )
     * @name RentalRentalRowList
     * @summary Rental list
     * @request GET:/api/v1/db/data/v1/test/Rental/views/Rental
     * @secure
     */
    rentalRentalRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `Payment List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Payment List][where]=(field1,eq,value)` */
        "nested[Payment List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Payment List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Payment List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Payment List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Payment List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Payment List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Payment List][fields]=field1,field2` */
        "nested[Payment List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Payment List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Payment List][sort]=field1,-field2` */
        "nested[Payment List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Customer` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Customer][fields]=field1,field2` */
        "nested[Customer][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Inventory` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Inventory][fields]=field1,field2` */
        "nested[Inventory][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Staff` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Staff][fields]=field1,field2` */
        "nested[Staff][fields]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: RentalRentalGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Rental/views/Rental`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Rental ( Rental grid )
     * @name RentalRentalRowCreate
     * @summary Rental create
     * @request POST:/api/v1/db/data/v1/test/Rental/views/Rental
     * @secure
     */
    rentalRentalRowCreate: (data: RentalRentalGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Rental`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rental ( Rental grid )
     * @name RentalRentalRowCount
     * @summary Rental count
     * @request GET:/api/v1/db/data/v1/test/Rental/views/Rental/count
     * @secure
     */
    rentalRentalRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Rental/views/Rental/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Rental ( Rental grid )
     * @name RentalRentalRowRead
     * @summary Rental read
     * @request GET:/api/v1/db/data/v1/test/Rental/views/Rental/{rowId}
     * @secure
     */
    rentalRentalRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<RentalRentalGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Rental/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Rental ( Rental grid )
     * @name RentalRentalRowUpdate
     * @summary Rental update
     * @request PATCH:/api/v1/db/data/v1/test/Rental/views/Rental/{rowId}
     * @secure
     */
    rentalRentalRowUpdate: (rowId: string, data: RentalRentalGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Rental/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Rental ( Rental grid )
     * @name RentalRentalRowDelete
     * @summary Rental delete
     * @request DELETE:/api/v1/db/data/v1/test/Rental/views/Rental/{rowId}
     * @secure
     */
    rentalRentalRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Rental/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Rental ( Rental grid )
     * @name RentalRentalRowExport
     * @summary Rental export
     * @request GET:/api/v1/db/data/v1/test/Rental/views/Rental/export/{type}
     * @secure
     */
    rentalRentalRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Rental/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Grid-1 grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Grid-1 ( Rental grid )
     * @name RentalGrid1RowList
     * @summary Grid-1 list
     * @request GET:/api/v1/db/data/v1/test/Rental/views/Grid-1
     * @secure
     */
    rentalGrid1RowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `Payment List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Payment List][where]=(field1,eq,value)` */
        "nested[Payment List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Payment List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Payment List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Payment List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Payment List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Payment List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Payment List][fields]=field1,field2` */
        "nested[Payment List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Payment List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Payment List][sort]=field1,-field2` */
        "nested[Payment List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Customer` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Customer][fields]=field1,field2` */
        "nested[Customer][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Inventory` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Inventory][fields]=field1,field2` */
        "nested[Inventory][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Staff` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Staff][fields]=field1,field2` */
        "nested[Staff][fields]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: RentalGrid1GridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Rental/views/Grid-1`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Grid-1 ( Rental grid )
     * @name RentalGrid1RowCreate
     * @summary Grid-1 create
     * @request POST:/api/v1/db/data/v1/test/Rental/views/Grid-1
     * @secure
     */
    rentalGrid1RowCreate: (data: RentalGrid1GridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Grid-1`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grid-1 ( Rental grid )
     * @name RentalGrid1RowCount
     * @summary Grid-1 count
     * @request GET:/api/v1/db/data/v1/test/Rental/views/Grid-1/count
     * @secure
     */
    rentalGrid1RowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Rental/views/Grid-1/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Grid-1 ( Rental grid )
     * @name RentalGrid1RowRead
     * @summary Grid-1 read
     * @request GET:/api/v1/db/data/v1/test/Rental/views/Grid-1/{rowId}
     * @secure
     */
    rentalGrid1RowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<RentalGrid1GridResponse, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Grid-1/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Grid-1 ( Rental grid )
     * @name RentalGrid1RowUpdate
     * @summary Grid-1 update
     * @request PATCH:/api/v1/db/data/v1/test/Rental/views/Grid-1/{rowId}
     * @secure
     */
    rentalGrid1RowUpdate: (rowId: string, data: RentalGrid1GridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Grid-1/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Grid-1 ( Rental grid )
     * @name RentalGrid1RowDelete
     * @summary Grid-1 delete
     * @request DELETE:/api/v1/db/data/v1/test/Rental/views/Grid-1/{rowId}
     * @secure
     */
    rentalGrid1RowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Grid-1/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Grid-1 ( Rental grid )
     * @name RentalGrid1RowExport
     * @summary Grid-1 export
     * @request GET:/api/v1/db/data/v1/test/Rental/views/Grid-1/export/{type}
     * @secure
     */
    rentalGrid1RowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Rental/views/Grid-1/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Staff table and response data fields can be filtered based on query params.
     *
     * @tags Staff
     * @name StaffDbTableRowList
     * @summary Staff list
     * @request GET:/api/v1/db/data/v1/test/Staff
     * @secure
     */
    staffDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /** This can be used for filtering rows in nested column `Payment List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Payment List][where]=(field1,eq,value)` */
        "nested[Payment List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Payment List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Payment List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Payment List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Payment List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Payment List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Payment List][fields]=field1,field2` */
        "nested[Payment List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Payment List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Payment List][sort]=field1,-field2` */
        "nested[Payment List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Rental List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Rental List][where]=(field1,eq,value)` */
        "nested[Rental List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Rental List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Rental List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Rental List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Rental List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Rental List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Rental List][fields]=field1,field2` */
        "nested[Rental List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Rental List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Rental List][sort]=field1,-field2` */
        "nested[Rental List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Store List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Store List][where]=(field1,eq,value)` */
        "nested[Store List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Store List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Store List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Store List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Store List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Store List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store List][fields]=field1,field2` */
        "nested[Store List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Store List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Store List][sort]=field1,-field2` */
        "nested[Store List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Address` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Address][fields]=field1,field2` */
        "nested[Address][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Store` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store][fields]=field1,field2` */
        "nested[Store][fields]"?: string;
        /** This can be used for filtering rows in nested column `Address List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Address List][where]=(field1,eq,value)` */
        "nested[Address List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Address List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Address List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Address List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Address List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Address List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Address List][fields]=field1,field2` */
        "nested[Address List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Address List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Address List][sort]=field1,-field2` */
        "nested[Address List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: StaffResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Staff`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Staff
     * @name StaffCreate
     * @summary Staff create
     * @request POST:/api/v1/db/data/v1/test/Staff
     * @secure
     */
    staffCreate: (data: StaffRequest, params: RequestParams = {}) =>
      this.request<StaffResponse, any>({
        path: `/api/v1/db/data/v1/test/Staff`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Staff
     * @name StaffRead
     * @summary Staff read
     * @request GET:/api/v1/db/data/v1/test/Staff/{rowId}
     * @secure
     */
    staffRead: (
      rowId: string,
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StaffResponse, any>({
        path: `/api/v1/db/data/v1/test/Staff/${rowId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Staff
     * @name StaffUpdate
     * @summary Staff update
     * @request PATCH:/api/v1/db/data/v1/test/Staff/{rowId}
     * @secure
     */
    staffUpdate: (rowId: string, data: any, params: RequestParams = {}) =>
      this.request<StaffRequest, any>({
        path: `/api/v1/db/data/v1/test/Staff/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Staff
     * @name StaffDelete
     * @summary Staff delete
     * @request DELETE:/api/v1/db/data/v1/test/Staff/{rowId}
     * @secure
     */
    staffDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Staff/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags Staff
     * @name StaffCount
     * @summary Staff count
     * @request GET:/api/v1/db/data/v1/test/Staff/count
     * @secure
     */
    staffCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Staff/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags Staff
     * @name StaffDbTableRowFindOne
     * @summary Staff find-one
     * @request GET:/api/v1/db/data/v1/test/Staff/find-one
     * @secure
     */
    staffDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StaffResponse, any>({
        path: `/api/v1/db/data/v1/test/Staff/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags Staff
     * @name StaffGroupby
     * @summary Staff groupby
     * @request GET:/api/v1/db/data/v1/test/Staff/groupby
     * @secure
     */
    staffGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Staff/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To insert large amount of data in a single api call you can use this api. It's similar to insert method but here you can pass array of objects to insert into table. Array object will be key value paired column name and value.
     *
     * @tags Staff
     * @name StaffBulkCreate
     * @summary Staff bulk insert
     * @request POST:/api/v1/db/data/bulk/v1/test/Staff
     * @secure
     */
    staffBulkCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Staff`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To update multiple records using it's primary key you can use this api. Bulk updated api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias. In addition to primary key you can include the fields which you want to update
     *
     * @tags Staff
     * @name StaffBulkUpdate
     * @summary Staff bulk  update
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Staff
     * @secure
     */
    staffBulkUpdate: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Staff`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To delete multiple records using it's primary key you can use this api. Bulk delete api accepts array object in which each object should contain it's primary columns value mapped to corresponding alias.
     *
     * @tags Staff
     * @name StaffBulkDelete
     * @summary Staff bulk delete by IDs
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Staff
     * @secure
     */
    staffBulkDelete: (data: any, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Staff`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you update multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and apply the changes to filtered records. Payload is similar as normal update in which you can pass any partial row data to be updated.
     *
     * @tags Staff
     * @name StaffBulkUpdateAll
     * @summary Staff Bulk update with conditions
     * @request PATCH:/api/v1/db/data/bulk/v1/test/Staff/all
     * @secure
     */
    staffBulkUpdateAll: (
      data: any,
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Staff/all`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api helps you delete multiple table rows in a single api call. You don't have to pass the record id instead you can filter records and delete filtered records.
     *
     * @tags Staff
     * @name StaffBulkDeleteAll
     * @summary Bulk delete with conditions
     * @request DELETE:/api/v1/db/data/bulk/v1/test/Staff/all
     * @secure
     */
    staffBulkDeleteAll: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/bulk/v1/test/Staff/all`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Staff
     * @name StaffNestedList
     * @summary Relation row list
     * @request GET:/api/v1/db/data/v1/test/Staff/{rowId}/{relationType}/{columnName}
     * @secure
     */
    staffNestedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Rental List" | "Address" | "Store" | "Address List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Staff/${rowId}/${relationType}/${columnName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Staff
     * @name StaffNestedAdd
     * @summary Relation row add
     * @request POST:/api/v1/db/data/v1/test/Staff/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    staffNestedAdd: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Rental List" | "Address" | "Store" | "Address List",
      refRowId: string,
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Staff/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Staff
     * @name StaffNestedRemove
     * @summary Relation row remove
     * @request DELETE:/api/v1/db/data/v1/test/Staff/{rowId}/{relationType}/{columnName}/{refRowId}
     * @secure
     */
    staffNestedRemove: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Rental List" | "Address" | "Store" | "Address List",
      refRowId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Staff/${rowId}/${relationType}/${columnName}/${refRowId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Staff
     * @name StaffNestedChildrenExcludedList
     * @summary Referenced tables rows excluding current records children/parent
     * @request GET:/api/v1/db/data/v1/test/Staff/{rowId}/{relationType}/{columnName}/exclude
     * @secure
     */
    staffNestedChildrenExcludedList: (
      rowId: string,
      relationType: "mm" | "hm",
      columnName: "Payment List" | "Rental List" | "Address" | "Store" | "Address List",
      query?: {
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Staff/${rowId}/${relationType}/${columnName}/exclude`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags Staff
     * @name StaffCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/Staff/export/{type}
     * @secure
     */
    staffCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Staff/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from Staff grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags Staff ( Staff grid )
     * @name StaffStaffRowList
     * @summary Staff list
     * @request GET:/api/v1/db/data/v1/test/Staff/views/Staff
     * @secure
     */
    staffStaffRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** This can be used for filtering rows in nested column `Payment List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Payment List][where]=(field1,eq,value)` */
        "nested[Payment List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Payment List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Payment List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Payment List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Payment List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Payment List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Payment List][fields]=field1,field2` */
        "nested[Payment List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Payment List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Payment List][sort]=field1,-field2` */
        "nested[Payment List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Rental List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Rental List][where]=(field1,eq,value)` */
        "nested[Rental List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Rental List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Rental List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Rental List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Rental List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Rental List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Rental List][fields]=field1,field2` */
        "nested[Rental List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Rental List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Rental List][sort]=field1,-field2` */
        "nested[Rental List][sort]"?: string;
        /** This can be used for filtering rows in nested column `Store List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Store List][where]=(field1,eq,value)` */
        "nested[Store List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Store List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Store List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Store List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Store List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Store List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store List][fields]=field1,field2` */
        "nested[Store List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Store List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Store List][sort]=field1,-field2` */
        "nested[Store List][sort]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Address` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Address][fields]=field1,field2` */
        "nested[Address][fields]"?: string;
        /** Array of field names or comma separated filed names to include in the in nested column `Store` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Store][fields]=field1,field2` */
        "nested[Store][fields]"?: string;
        /** This can be used for filtering rows in nested column `Address List`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Address List][where]=(field1,eq,value)` */
        "nested[Address List][where]"?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Address List` rows, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        "nested[Address List][offset]"?: number;
        /**
         * The `limit` parameter used for pagination of nested `Address List` rows, the response collection size depends on limit value and default value is `25`.
         * @min 1
         * @example "25"
         */
        "nested[Address List][limit]"?: number;
        /** Array of field names or comma separated filed names to include in the in nested column `Address List` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Address List][fields]=field1,field2` */
        "nested[Address List][fields]"?: string;
        /** Comma separated field names to sort rows in nested column `Address List` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Address List][sort]=field1,-field2` */
        "nested[Address List][sort]"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: StaffStaffGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Staff/views/Staff`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
     *
     * @tags Staff ( Staff grid )
     * @name StaffStaffRowCreate
     * @summary Staff create
     * @request POST:/api/v1/db/data/v1/test/Staff/views/Staff
     * @secure
     */
    staffStaffRowCreate: (data: StaffStaffGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Staff/views/Staff`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Staff ( Staff grid )
     * @name StaffStaffRowCount
     * @summary Staff count
     * @request GET:/api/v1/db/data/v1/test/Staff/views/Staff/count
     * @secure
     */
    staffStaffRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/Staff/views/Staff/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read a row data by using the **primary key** column value.
     *
     * @tags Staff ( Staff grid )
     * @name StaffStaffRowRead
     * @summary Staff read
     * @request GET:/api/v1/db/data/v1/test/Staff/views/Staff/{rowId}
     * @secure
     */
    staffStaffRowRead: (rowId: string, params: RequestParams = {}) =>
      this.request<StaffStaffGridResponse, any>({
        path: `/api/v1/db/data/v1/test/Staff/views/Staff/${rowId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
     *
     * @tags Staff ( Staff grid )
     * @name StaffStaffRowUpdate
     * @summary Staff update
     * @request PATCH:/api/v1/db/data/v1/test/Staff/views/Staff/{rowId}
     * @secure
     */
    staffStaffRowUpdate: (rowId: string, data: StaffStaffGridRequest, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Staff/views/Staff/${rowId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a row by using the **primary key** column value.
     *
     * @tags Staff ( Staff grid )
     * @name StaffStaffRowDelete
     * @summary Staff delete
     * @request DELETE:/api/v1/db/data/v1/test/Staff/views/Staff/{rowId}
     * @secure
     */
    staffStaffRowDelete: (rowId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/db/data/v1/test/Staff/views/Staff/${rowId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags Staff ( Staff grid )
     * @name StaffStaffRowExport
     * @summary Staff export
     * @request GET:/api/v1/db/data/v1/test/Staff/views/Staff/export/{type}
     * @secure
     */
    staffStaffRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/Staff/views/Staff/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from ActorInfo view and response data fields can be filtered based on query params.
     *
     * @tags ActorInfo
     * @name ActorinfoDbTableRowList
     * @summary ActorInfo list
     * @request GET:/api/v1/db/data/v1/test/ActorInfo
     * @secure
     */
    actorinfoDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: ActorInfoResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/ActorInfo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags ActorInfo
     * @name ActorinfoCount
     * @summary ActorInfo count
     * @request GET:/api/v1/db/data/v1/test/ActorInfo/count
     * @secure
     */
    actorinfoCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/ActorInfo/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags ActorInfo
     * @name ActorinfoDbTableRowFindOne
     * @summary ActorInfo find-one
     * @request GET:/api/v1/db/data/v1/test/ActorInfo/find-one
     * @secure
     */
    actorinfoDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ActorInfoResponse, any>({
        path: `/api/v1/db/data/v1/test/ActorInfo/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags ActorInfo
     * @name ActorinfoGroupby
     * @summary ActorInfo groupby
     * @request GET:/api/v1/db/data/v1/test/ActorInfo/groupby
     * @secure
     */
    actorinfoGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/ActorInfo/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags ActorInfo
     * @name ActorinfoCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/ActorInfo/export/{type}
     * @secure
     */
    actorinfoCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/ActorInfo/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from ActorInfo grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags ActorInfo ( ActorInfo grid )
     * @name ActorInfoActorInfoRowList
     * @summary ActorInfo list
     * @request GET:/api/v1/db/data/v1/test/ActorInfo/views/ActorInfo
     * @secure
     */
    actorInfoActorInfoRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: ActorInfoActorInfoGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/ActorInfo/views/ActorInfo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActorInfo ( ActorInfo grid )
     * @name ActorInfoActorInfoRowCount
     * @summary ActorInfo count
     * @request GET:/api/v1/db/data/v1/test/ActorInfo/views/ActorInfo/count
     * @secure
     */
    actorInfoActorInfoRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/ActorInfo/views/ActorInfo/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags ActorInfo ( ActorInfo grid )
     * @name ActorInfoActorInfoRowExport
     * @summary ActorInfo export
     * @request GET:/api/v1/db/data/v1/test/ActorInfo/views/ActorInfo/export/{type}
     * @secure
     */
    actorInfoActorInfoRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/ActorInfo/views/ActorInfo/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from CustomerList view and response data fields can be filtered based on query params.
     *
     * @tags CustomerList
     * @name CustomerlistDbTableRowList
     * @summary CustomerList list
     * @request GET:/api/v1/db/data/v1/test/CustomerList
     * @secure
     */
    customerlistDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CustomerListResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/CustomerList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags CustomerList
     * @name CustomerlistCount
     * @summary CustomerList count
     * @request GET:/api/v1/db/data/v1/test/CustomerList/count
     * @secure
     */
    customerlistCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/CustomerList/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags CustomerList
     * @name CustomerlistDbTableRowFindOne
     * @summary CustomerList find-one
     * @request GET:/api/v1/db/data/v1/test/CustomerList/find-one
     * @secure
     */
    customerlistDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerListResponse, any>({
        path: `/api/v1/db/data/v1/test/CustomerList/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags CustomerList
     * @name CustomerlistGroupby
     * @summary CustomerList groupby
     * @request GET:/api/v1/db/data/v1/test/CustomerList/groupby
     * @secure
     */
    customerlistGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/CustomerList/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags CustomerList
     * @name CustomerlistCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/CustomerList/export/{type}
     * @secure
     */
    customerlistCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/CustomerList/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from CustomerList grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags CustomerList ( CustomerList grid )
     * @name CustomerListCustomerListRowList
     * @summary CustomerList list
     * @request GET:/api/v1/db/data/v1/test/CustomerList/views/CustomerList
     * @secure
     */
    customerListCustomerListRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: CustomerListCustomerListGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/CustomerList/views/CustomerList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerList ( CustomerList grid )
     * @name CustomerListCustomerListRowCount
     * @summary CustomerList count
     * @request GET:/api/v1/db/data/v1/test/CustomerList/views/CustomerList/count
     * @secure
     */
    customerListCustomerListRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/CustomerList/views/CustomerList/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags CustomerList ( CustomerList grid )
     * @name CustomerListCustomerListRowExport
     * @summary CustomerList export
     * @request GET:/api/v1/db/data/v1/test/CustomerList/views/CustomerList/export/{type}
     * @secure
     */
    customerListCustomerListRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/CustomerList/views/CustomerList/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from FilmList view and response data fields can be filtered based on query params.
     *
     * @tags FilmList
     * @name FilmlistDbTableRowList
     * @summary FilmList list
     * @request GET:/api/v1/db/data/v1/test/FilmList
     * @secure
     */
    filmlistDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: FilmListResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/FilmList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags FilmList
     * @name FilmlistCount
     * @summary FilmList count
     * @request GET:/api/v1/db/data/v1/test/FilmList/count
     * @secure
     */
    filmlistCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/FilmList/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags FilmList
     * @name FilmlistDbTableRowFindOne
     * @summary FilmList find-one
     * @request GET:/api/v1/db/data/v1/test/FilmList/find-one
     * @secure
     */
    filmlistDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilmListResponse, any>({
        path: `/api/v1/db/data/v1/test/FilmList/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags FilmList
     * @name FilmlistGroupby
     * @summary FilmList groupby
     * @request GET:/api/v1/db/data/v1/test/FilmList/groupby
     * @secure
     */
    filmlistGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/FilmList/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags FilmList
     * @name FilmlistCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/FilmList/export/{type}
     * @secure
     */
    filmlistCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/FilmList/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from FilmList grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags FilmList ( FilmList grid )
     * @name FilmListFilmListRowList
     * @summary FilmList list
     * @request GET:/api/v1/db/data/v1/test/FilmList/views/FilmList
     * @secure
     */
    filmListFilmListRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: FilmListFilmListGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/FilmList/views/FilmList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FilmList ( FilmList grid )
     * @name FilmListFilmListRowCount
     * @summary FilmList count
     * @request GET:/api/v1/db/data/v1/test/FilmList/views/FilmList/count
     * @secure
     */
    filmListFilmListRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/FilmList/views/FilmList/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags FilmList ( FilmList grid )
     * @name FilmListFilmListRowExport
     * @summary FilmList export
     * @request GET:/api/v1/db/data/v1/test/FilmList/views/FilmList/export/{type}
     * @secure
     */
    filmListFilmListRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/FilmList/views/FilmList/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from NicerButSlowerFilmList view and response data fields can be filtered based on query params.
     *
     * @tags NicerButSlowerFilmList
     * @name NicerbutslowerfilmlistDbTableRowList
     * @summary NicerButSlowerFilmList list
     * @request GET:/api/v1/db/data/v1/test/NicerButSlowerFilmList
     * @secure
     */
    nicerbutslowerfilmlistDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: NicerButSlowerFilmListResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/NicerButSlowerFilmList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags NicerButSlowerFilmList
     * @name NicerbutslowerfilmlistCount
     * @summary NicerButSlowerFilmList count
     * @request GET:/api/v1/db/data/v1/test/NicerButSlowerFilmList/count
     * @secure
     */
    nicerbutslowerfilmlistCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/NicerButSlowerFilmList/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags NicerButSlowerFilmList
     * @name NicerbutslowerfilmlistDbTableRowFindOne
     * @summary NicerButSlowerFilmList find-one
     * @request GET:/api/v1/db/data/v1/test/NicerButSlowerFilmList/find-one
     * @secure
     */
    nicerbutslowerfilmlistDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<NicerButSlowerFilmListResponse, any>({
        path: `/api/v1/db/data/v1/test/NicerButSlowerFilmList/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags NicerButSlowerFilmList
     * @name NicerbutslowerfilmlistGroupby
     * @summary NicerButSlowerFilmList groupby
     * @request GET:/api/v1/db/data/v1/test/NicerButSlowerFilmList/groupby
     * @secure
     */
    nicerbutslowerfilmlistGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/NicerButSlowerFilmList/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags NicerButSlowerFilmList
     * @name NicerbutslowerfilmlistCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/NicerButSlowerFilmList/export/{type}
     * @secure
     */
    nicerbutslowerfilmlistCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/NicerButSlowerFilmList/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from NicerButSlowerFilmList grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags NicerButSlowerFilmList ( NicerButSlowerFilmList grid )
     * @name NicerButSlowerFilmListNicerButSlowerFilmListRowList
     * @summary NicerButSlowerFilmList list
     * @request GET:/api/v1/db/data/v1/test/NicerButSlowerFilmList/views/NicerButSlowerFilmList
     * @secure
     */
    nicerButSlowerFilmListNicerButSlowerFilmListRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: NicerButSlowerFilmListNicerButSlowerFilmListGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/NicerButSlowerFilmList/views/NicerButSlowerFilmList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NicerButSlowerFilmList ( NicerButSlowerFilmList grid )
     * @name NicerButSlowerFilmListNicerButSlowerFilmListRowCount
     * @summary NicerButSlowerFilmList count
     * @request GET:/api/v1/db/data/v1/test/NicerButSlowerFilmList/views/NicerButSlowerFilmList/count
     * @secure
     */
    nicerButSlowerFilmListNicerButSlowerFilmListRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/NicerButSlowerFilmList/views/NicerButSlowerFilmList/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags NicerButSlowerFilmList ( NicerButSlowerFilmList grid )
     * @name NicerButSlowerFilmListNicerButSlowerFilmListRowExport
     * @summary NicerButSlowerFilmList export
     * @request GET:/api/v1/db/data/v1/test/NicerButSlowerFilmList/views/NicerButSlowerFilmList/export/{type}
     * @secure
     */
    nicerButSlowerFilmListNicerButSlowerFilmListRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/NicerButSlowerFilmList/views/NicerButSlowerFilmList/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from SalesByFilmCategory view and response data fields can be filtered based on query params.
     *
     * @tags SalesByFilmCategory
     * @name SalesbyfilmcategoryDbTableRowList
     * @summary SalesByFilmCategory list
     * @request GET:/api/v1/db/data/v1/test/SalesByFilmCategory
     * @secure
     */
    salesbyfilmcategoryDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: SalesByFilmCategoryResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/SalesByFilmCategory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags SalesByFilmCategory
     * @name SalesbyfilmcategoryCount
     * @summary SalesByFilmCategory count
     * @request GET:/api/v1/db/data/v1/test/SalesByFilmCategory/count
     * @secure
     */
    salesbyfilmcategoryCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/SalesByFilmCategory/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags SalesByFilmCategory
     * @name SalesbyfilmcategoryDbTableRowFindOne
     * @summary SalesByFilmCategory find-one
     * @request GET:/api/v1/db/data/v1/test/SalesByFilmCategory/find-one
     * @secure
     */
    salesbyfilmcategoryDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SalesByFilmCategoryResponse, any>({
        path: `/api/v1/db/data/v1/test/SalesByFilmCategory/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags SalesByFilmCategory
     * @name SalesbyfilmcategoryGroupby
     * @summary SalesByFilmCategory groupby
     * @request GET:/api/v1/db/data/v1/test/SalesByFilmCategory/groupby
     * @secure
     */
    salesbyfilmcategoryGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/SalesByFilmCategory/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags SalesByFilmCategory
     * @name SalesbyfilmcategoryCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/SalesByFilmCategory/export/{type}
     * @secure
     */
    salesbyfilmcategoryCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/SalesByFilmCategory/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from SalesByFilmCategory grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags SalesByFilmCategory ( SalesByFilmCategory grid )
     * @name SalesByFilmCategorySalesByFilmCategoryRowList
     * @summary SalesByFilmCategory list
     * @request GET:/api/v1/db/data/v1/test/SalesByFilmCategory/views/SalesByFilmCategory
     * @secure
     */
    salesByFilmCategorySalesByFilmCategoryRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: SalesByFilmCategorySalesByFilmCategoryGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/SalesByFilmCategory/views/SalesByFilmCategory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesByFilmCategory ( SalesByFilmCategory grid )
     * @name SalesByFilmCategorySalesByFilmCategoryRowCount
     * @summary SalesByFilmCategory count
     * @request GET:/api/v1/db/data/v1/test/SalesByFilmCategory/views/SalesByFilmCategory/count
     * @secure
     */
    salesByFilmCategorySalesByFilmCategoryRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/SalesByFilmCategory/views/SalesByFilmCategory/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags SalesByFilmCategory ( SalesByFilmCategory grid )
     * @name SalesByFilmCategorySalesByFilmCategoryRowExport
     * @summary SalesByFilmCategory export
     * @request GET:/api/v1/db/data/v1/test/SalesByFilmCategory/views/SalesByFilmCategory/export/{type}
     * @secure
     */
    salesByFilmCategorySalesByFilmCategoryRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/SalesByFilmCategory/views/SalesByFilmCategory/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from SalesByStore view and response data fields can be filtered based on query params.
     *
     * @tags SalesByStore
     * @name SalesbystoreDbTableRowList
     * @summary SalesByStore list
     * @request GET:/api/v1/db/data/v1/test/SalesByStore
     * @secure
     */
    salesbystoreDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: SalesByStoreResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/SalesByStore`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags SalesByStore
     * @name SalesbystoreCount
     * @summary SalesByStore count
     * @request GET:/api/v1/db/data/v1/test/SalesByStore/count
     * @secure
     */
    salesbystoreCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/SalesByStore/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags SalesByStore
     * @name SalesbystoreDbTableRowFindOne
     * @summary SalesByStore find-one
     * @request GET:/api/v1/db/data/v1/test/SalesByStore/find-one
     * @secure
     */
    salesbystoreDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SalesByStoreResponse, any>({
        path: `/api/v1/db/data/v1/test/SalesByStore/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags SalesByStore
     * @name SalesbystoreGroupby
     * @summary SalesByStore groupby
     * @request GET:/api/v1/db/data/v1/test/SalesByStore/groupby
     * @secure
     */
    salesbystoreGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/SalesByStore/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags SalesByStore
     * @name SalesbystoreCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/SalesByStore/export/{type}
     * @secure
     */
    salesbystoreCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/SalesByStore/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from SalesByStore grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags SalesByStore ( SalesByStore grid )
     * @name SalesByStoreSalesByStoreRowList
     * @summary SalesByStore list
     * @request GET:/api/v1/db/data/v1/test/SalesByStore/views/SalesByStore
     * @secure
     */
    salesByStoreSalesByStoreRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: SalesByStoreSalesByStoreGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/SalesByStore/views/SalesByStore`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesByStore ( SalesByStore grid )
     * @name SalesByStoreSalesByStoreRowCount
     * @summary SalesByStore count
     * @request GET:/api/v1/db/data/v1/test/SalesByStore/views/SalesByStore/count
     * @secure
     */
    salesByStoreSalesByStoreRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/SalesByStore/views/SalesByStore/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags SalesByStore ( SalesByStore grid )
     * @name SalesByStoreSalesByStoreRowExport
     * @summary SalesByStore export
     * @request GET:/api/v1/db/data/v1/test/SalesByStore/views/SalesByStore/export/{type}
     * @secure
     */
    salesByStoreSalesByStoreRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/SalesByStore/views/SalesByStore/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from StaffList view and response data fields can be filtered based on query params.
     *
     * @tags StaffList
     * @name StafflistDbTableRowList
     * @summary StaffList list
     * @request GET:/api/v1/db/data/v1/test/StaffList
     * @secure
     */
    stafflistDbTableRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: StaffListResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/StaffList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get rows count of a table by applying optional filters.
     *
     * @tags StaffList
     * @name StafflistCount
     * @summary StaffList count
     * @request GET:/api/v1/db/data/v1/test/StaffList/count
     * @secure
     */
    stafflistCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/StaffList/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find first record matching the conditions.
     *
     * @tags StaffList
     * @name StafflistDbTableRowFindOne
     * @summary StaffList find-one
     * @request GET:/api/v1/db/data/v1/test/StaffList/find-one
     * @secure
     */
    stafflistDbTableRowFindOne: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StaffListResponse, any>({
        path: `/api/v1/db/data/v1/test/StaffList/find-one`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group by a column.
     *
     * @tags StaffList
     * @name StafflistGroupby
     * @summary StaffList groupby
     * @request GET:/api/v1/db/data/v1/test/StaffList/groupby
     * @secure
     */
    stafflistGroupby: (
      query?: {
        /** Column name of the column you want to group by, eg. `column_name=column1` */
        column_name?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         * @min 1
         * @example 25
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         * @min 0
         * @max 1
         * @example 0
         */
        shuffle?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: Groupby[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/StaffList/groupby`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table.Currently we are only supports `csv` export.
     *
     * @tags StaffList
     * @name StafflistCsvExport
     * @summary Rows export
     * @request GET:/api/v1/db/data/v1/test/StaffList/export/{type}
     * @secure
     */
    stafflistCsvExport: (
      type: "csv" | "excel",
      query?: {
        /**
         * Helps to start export from a certain index. You can get the next set of data offset from previous response header named `nc-export-offset`.
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/StaffList/export/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description List of all rows from StaffList grid view and data of fields can be filtered based on query params. Data and fields in a grid view will be filtered and sorted by default based on the applied options in Dashboard.
     *
     * @tags StaffList ( StaffList grid )
     * @name StaffListStaffListRowList
     * @summary StaffList list
     * @request GET:/api/v1/db/data/v1/test/StaffList/views/StaffList
     * @secure
     */
    staffListStaffListRowList: (
      query?: {
        /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
        fields?: string;
        /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
        sort?: string;
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: StaffListStaffListGridResponse[];
          PageInfo?: Paginated;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/StaffList/views/StaffList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StaffList ( StaffList grid )
     * @name StaffListStaffListRowCount
     * @summary StaffList count
     * @request GET:/api/v1/db/data/v1/test/StaffList/views/StaffList/count
     * @secure
     */
    staffListStaffListRowCount: (
      query?: {
        /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
        where?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/api/v1/db/data/v1/test/StaffList/views/StaffList/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Export all the records from a table view. Currently we are only supports `csv` export.
     *
     * @tags StaffList ( StaffList grid )
     * @name StaffListStaffListRowExport
     * @summary StaffList export
     * @request GET:/api/v1/db/data/v1/test/StaffList/views/StaffList/export/{type}
     * @secure
     */
    staffListStaffListRowExport: (type: "csv" | "excel", params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/v1/db/data/v1/test/StaffList/views/StaffList/export/${type}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
