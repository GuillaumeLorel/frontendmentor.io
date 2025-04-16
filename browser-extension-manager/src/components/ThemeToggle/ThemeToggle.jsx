import { ThemeContext } from "../../contexts/ThemeContext.jsx";
import { useContext } from "react";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const oppositeTheme = theme === "light" ? "dark" : "light";

  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      <img
        src={theme === "light" ? moon : sun}
        alt={`Switch to ${oppositeTheme} mode`}
      />
    </button>
  );
}
