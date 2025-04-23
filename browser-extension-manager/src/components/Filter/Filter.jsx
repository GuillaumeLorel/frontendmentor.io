import React from "react";
import styles from "./Filter.module.css";

export default function Filter({ activeFilter, onFilterChange }) {
  return (
    <div className={styles.filter}>
      <h1 className={styles.filter__title}>Extension List</h1>
      <div className={styles.filter__btnContainer}>
        <button
          onClick={() => onFilterChange("all")}
          className={`${styles.filter__btn} ${
            activeFilter === "all" ? styles.active : ""
          }`}>
          All
        </button>
        <button
          onClick={() => onFilterChange("active")}
          className={`${styles.filter__btn} ${
            activeFilter === "active" ? styles.active : ""
          }`}>
          Active
        </button>
        <button
          onClick={() => onFilterChange("inactive")}
          className={`${styles.filter__btn} ${
            activeFilter === "inactive" ? styles.active : ""
          }`}>
          Inactive
        </button>
      </div>
    </div>
  );
}
