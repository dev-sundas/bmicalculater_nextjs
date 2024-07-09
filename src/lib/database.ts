import { DietType, ExchangeRates, valueType, weatherType } from "./types";

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

export const Weatherlist: weatherType[] = [
  {
    id: 1,
    name: "London",
    date: "March 25,2024",
    week: [
      {
        id: 1,
        day: "Monday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "72",
      },
      {
        id: 2,
        day: "Tuesday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "73",
      },
      {
        id: 3,
        day: "Wednesday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "74",
      },
      {
        id: 4,
        day: "Thursday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "75",
      },
      {
        id: 5,
        day: "Friday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "76",
      },
      {
        id: 6,
        day: "saturday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "77",
      },
      {
        id: 7,
        day: "Sunday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "78",
      },
    ],
    humidity: "81/57",
    imageurl:
      "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
    text: "cloudy",
  },
  {
    id: 2,
    name: "New York",
    date: "March 25,2024",
    week: [
      {
        id: 1,
        day: "Monday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "72",
      },
      {
        id: 2,
        day: "Tuesday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "73",
      },
      {
        id: 3,
        day: "Wednesday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "74",
      },
      {
        id: 4,
        day: "Thursday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "75",
      },
      {
        id: 5,
        day: "Friday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "76",
      },
      {
        id: 6,
        day: "saturday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "77",
      },
      {
        id: 7,
        day: "Sunday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "78",
      },
    ],
    humidity: "81/57",
    imageurl:
      "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
    text: "cloudy",
  },
  {
    id: 3,
    name: "Pakistan",
    date: "March 25,2024",
    week: [
      {
        id: 1,
        day: "Monday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "72",
      },
      {
        id: 2,
        day: "Tuesday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "73",
      },
      {
        id: 3,
        day: "Wednesday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "74",
      },
      {
        id: 4,
        day: "Thursday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "75",
      },
      {
        id: 5,
        day: "Friday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "76",
      },
      {
        id: 6,
        day: "saturday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "77",
      },
      {
        id: 7,
        day: "Sunday",
        image:
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
        temperture: "78",
      },
    ],
    humidity: "81/57",
    imageurl:
      "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
    text: "cloudy",
  },
];
