import { type Hit } from "@algolia/client-search";
import {
  type Project,
  type App,
  type Blog,
  type Company,
} from "../utils/interfaces";

type WithAutocompleteAnalytics<THit> = THit & {
  __autocomplete_indexName: string;
  __autocomplete_queryID: string;
};

export type AppHit = WithAutocompleteAnalytics<Hit<App>>;
export type BlogHit = WithAutocompleteAnalytics<Hit<Blog>>;
export type ProjectHit = WithAutocompleteAnalytics<Hit<Project>>;
export type CompanyHit = WithAutocompleteAnalytics<Hit<Company>>;

export type AllHit = BlogHit | AppHit | ProjectHit | CompanyHit;
