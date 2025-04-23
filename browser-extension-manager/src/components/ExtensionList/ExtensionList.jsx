import { ExtensionCard } from "../ExtensionCard/ExtensionCard";
import styles from "./ExtensionList.module.css";

export default function ExtensionList({ extensions, onToggle, onRemove }) {
  return (
    <div className={styles.extensionList}>
      {extensions.map((extension) => (
        <ExtensionCard
          key={extension.name}
          extension={extension}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
