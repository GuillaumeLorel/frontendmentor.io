import React from "react";
import styles from "./ExtensionCard.module.css";

export const ExtensionCard = ({ extension, onToggle, onRemove }) => {
  return (
    <article className={styles.card}>
      <header className={styles.card__header}>
        <img src={extension.logo} alt={`${extension.name} icon`} />
        <div>
          <h2>{extension.name}</h2>
          <p>{extension.description}</p>
        </div>
      </header>
      <footer className={styles.card__footer}>
        <button
          className={styles.card__removeBtn}
          onClick={() => onRemove(extension)}>
          Remove
        </button>
        <label class={styles.card__toggleBtn}>
          <input
            type="checkbox"
            checked={extension.isActive}
            onChange={() => onToggle(extension)}
          />
          <span></span>
        </label>
      </footer>
    </article>
  );
};
