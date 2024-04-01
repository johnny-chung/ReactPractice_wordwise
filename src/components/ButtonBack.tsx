import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

export default function ButtonBack() {
  const navigate = useNavigate();

  function handleBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <button className={`${styles.btn} ${styles.back}`} onClick={handleBack}>
      Back
    </button>
  );
}
