import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
export default function Layout() {
  return (
    <div className={styles.homepage}>
      <PageNav />
      <Outlet />
    </div>
  );
}
