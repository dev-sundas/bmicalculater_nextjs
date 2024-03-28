import { DietType, ExchangeRates, valueType } from "./types";

export const Dietplane: DietType[] = [
  {
    id: 1,
    tag: "underweight",
    plan: {
      fruit: "apple",
      vegitable: "cabage",
      drink: "banana milkshake",
    },
  },

  {
    id: 2,
    tag: "overweight",
    plan: {
      fruit: "banana",
      vegitable: "crumber",
      drink: "orange juice",
    },
  },

  {
    id: 3,
    tag: "normalweight",

    plan: {
      fruit: "orange",
      vegitable: "carrot",
      drink: "milk",
    },
  },

  {
    id: 4,
    tag: "obsey",

    plan: {
      fruit: "orange",
      vegitable: "carrot",
      drink: "milk",
    },
  },
];

export const Select: valueType[] = [
  {
    id: 1,
    value: "Dollar",
    symbol: "USD",
  },
  {
    id: 2,
    value: "Rupees",
    symbol: "PKR",
  },
  {
    id: 3,
    value: "Euro",
    symbol: "EUR",
  },
];

export const exchange_rates: ExchangeRates = {
  USD: 1.0,
  EUR: 0.9,
  PKR: 160.0,
  JPY: 110.0,
};
