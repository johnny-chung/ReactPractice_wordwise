import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
export default function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">
            <p>Cities</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="countries">
            <p>Countries</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
