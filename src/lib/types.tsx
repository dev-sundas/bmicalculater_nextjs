import { z } from "zod";

export const BmiSchema = z.object({
  height: z.string(),
  weight: z.string(),
  heightUnits: z.string(),
  weightUnits: z.string(),
});

export type BmiType = z.infer<typeof BmiSchema>;

export type DietType = {
  id: number;
  tag: string;
  plan: {
    fruit: string;
    vegitable: string;
    drink: string;
  };
};

export const currencySchema = z.object({
  currency1: z.string(),
  currency2: z.string(),
  currency1Units: z.string(),
  currency2Units: z.string(),
});

export type currencyType = z.infer<typeof currencySchema>;

export type valueType = {
  id: number;
  value: string;
  symbol: string;
};

export type ExchangeRates = {
  [key: string]: number;
};

export type weatherType = {
  id: number;
  name: string;
  date: string;
  week: dayType[];
  humidity: string;
  imageurl: string;
  text: string;
};

export type dayType = {
  id: number;
  day: string;
  image: string;
  temperture: string;
};
