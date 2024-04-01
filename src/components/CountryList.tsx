import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import { CityProps } from "../types";
import { CountryProps } from "../types";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CityiesContext";

export default function CountryList() {
  const {cities, isLoading} = useCities()
  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return <Message message="Add your first Country" />;
  }

  function reduceCountry(acc: CountryProps[], cur: CityProps) {
    if (!acc.find((country: CountryProps) => country.country === cur.country)) {
      return [...acc, { country: cur.country, emoji: cur.emoji }];
    } else {
      return acc;
    }
  }
  const countries = cities.reduce(reduceCountry, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
