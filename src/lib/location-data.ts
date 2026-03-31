export interface LocationPage {
  slug: string;
  name: string;
  type: "state" | "city";
  state?: string;
  title: string;
  description: string;
  majorCities?: string[];
  content: string;
}

import { cities } from "./locations/cities";
import { statesAM } from "./locations/states-a-m";
import { statesNZ } from "./locations/states-n-z";

export const locationPages: LocationPage[] = [...statesAM, ...statesNZ, ...cities];
export const locations = locationPages;
