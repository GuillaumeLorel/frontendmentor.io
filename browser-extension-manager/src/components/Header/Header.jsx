import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";
import logoDark from "../../assets/images/logo.svg";
import logoLight from "../../assets/images/logo-light.svg";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext.jsx";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img
          src={theme === "light" ? logoDark : logoLight}
          alt="Browser Extension Manager"
        />
      </div>
      <ThemeToggle />
    </header>
  );
}
