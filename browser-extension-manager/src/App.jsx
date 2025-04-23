import { useState } from "react";
import Header from "./components/Header/Header";
import ExtensionList from "./components/ExtensionList/ExtensionList";
import Filter from "./components/Filter/Filter";
import data from "./data.json";

function App() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("all");

  const filteredExtensions =
    filter === "all"
      ? extensions
      : extensions.filter((ext) =>
          filter === "active" ? ext.isActive : !ext.isActive
        );

  const handleToggle = (extension) => {
    setExtensions(
      extensions.map((ext) =>
        ext.name === extension.name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemove = (extension) => {
    setExtensions(extensions.filter((ext) => ext.name !== extension.name));
  };
  return (
    <div className="app">
      <Header />
      <main>
        <Filter activeFilter={filter} onFilterChange={setFilter} />
        <ExtensionList
          extensions={filteredExtensions}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </main>
    </div>
  );
}

export default App;
