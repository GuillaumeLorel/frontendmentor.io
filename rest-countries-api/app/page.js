"use client";
import { useState, useEffect } from "react";
import SearchInput from "@/components/home/SearchInput";
import getData from "./getData";
import Image from "next/image";
import Link from "next/link";
import Filter from "@/components/home/Filter";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("All");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const searchTermMatches = searchTerm
      ? typeof item.name.common === "string" &&
        item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    const filterRegionMatches =
      filterRegion !== "All"
        ? typeof item.region === "string" &&
          item.region.toLowerCase().includes(filterRegion.toLowerCase())
        : true;

    return searchTermMatches && filterRegionMatches;
  });

  return (
    <main className="bg-very-light-gray dark:bg-very-dark-blue py-12 px-4 sm:px-20 min-h-[calc(100vh-80px)]">
      <div className="max-w-[1280px] m-auto">
        <div className="flex items-center justify-between  flex-wrap gap-10">
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={handleSearchChange}
          />
          <Filter
            filterRegion={filterRegion}
            setFilterRegion={setFilterRegion}
            regions={[...new Set(data.map((item) => item.region))]}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[35px] xl:gap-[75px] mt-8 sm:mt-12">
          {filteredData?.map((item) => (
            <Link
              href={`/${item.cca3}`}
              key={item.name.common}
              className="flex flex-col card-shadow rounded-md">
              <Image
                src={item.flags.svg}
                width={150}
                height={150}
                className="w-full sm:h-[160px] object-cover rounded-t-md"
              />
              <div className="bg-white dark:bg-dark-blue p-6 rounded-b-md dark:text-white">
                <h2 className="mb-3 font-extrabold text-lg">
                  {item.name.common}
                </h2>
                <p>
                  <span className="font-semibold">Population</span>:{" "}
                  {item.population}
                </p>
                <p>
                  <span className="font-semibold">Region</span>: {item.region}
                </p>
                <p>
                  <span className="font-semibold">Capital</span>: {item.capital}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
