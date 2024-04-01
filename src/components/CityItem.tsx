import styles from "./CityItem.module.css";
import { CityProps, PositionProps } from "../types";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CityiesContext";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityItem({ city }: { city: CityProps }) {
  const { currentCity } = useCities();

  return (
    <li>
      <Link
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={`${styles.cityItem} ${currentCity.id === city.id? styles["cityItem--active"] : ""}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
