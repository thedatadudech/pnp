import { type Hit } from "@algolia/client-search";
import {
  type Project,
  type App,
  type Blog,
  type Techs,
  type Company,
} from "../utils/interfaces";
import { type Testimonial } from "~/components/work_for_t/testi_card";

type WithAutocompleteAnalytics<THit> = THit & {
  __autocomplete_indexName: string;
  __autocomplete_queryID: string;
};

export type AppHit = WithAutocompleteAnalytics<Hit<App>>;
export type TechsHit = WithAutocompleteAnalytics<Hit<Techs>>;
export type BlogHit = WithAutocompleteAnalytics<Hit<Blog>>;
export type ProjectHit = WithAutocompleteAnalytics<Hit<Project>>;
export type CompanyHit = WithAutocompleteAnalytics<Hit<Company>>;
export type TestimonialHit = WithAutocompleteAnalytics<Hit<Testimonial>>;

export type AllHit =
  | BlogHit
  | AppHit
  | ProjectHit
  | CompanyHit
  | TestimonialHit;
