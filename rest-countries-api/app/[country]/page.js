"use client";
import getCountryData from "./getCountryData";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCountryData(params.country);
      setData(result);
      console.log(result);
    };

    fetchData();
  }, [params.country]);

  useEffect(() => {
    const fetchBorderCountries = async () => {
      if (data[0]?.borders) {
        const result = await Promise.all(
          data[0]?.borders.map(async (border) => {
            const country = await getCountryData(border);
            return country;
          })
        );
        setBorderCountries(result);
      }
    };

    fetchBorderCountries();
  }, [data]);

  return (
    <main className="py-10 px-4 sm:py-20 sm:px-20 dark:bg-very-dark-blue min-h-[calc(100vh-80px)]">
      <div className="max-w-[1280px] m-auto flex flex-col gap-16 sm:gap-20 w-full">
        <div className="w-fit">
          <Link
            href="/"
            className="text-sm sm:text-base flex items-center gap-2 mr-auto w-fit btn-shadow bg-white dark:bg-dark-blue text-very-dark-blue-light-mode dark:text-white rounded-md py-2 px-6 sm:py-3 sm:px-8">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="call-made">
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                  fill="#111517"
                  className="dark:fill-white"
                />
              </g>
            </svg>
            Back
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-11 sm:gap-16 lg:gap-32">
          <div className="w-full flex-auto sm:flex-1">
            {data[0]?.flags?.png && (
              <Image
                src={data[0]?.flags?.svg}
                alt={data[0]?.flags?.alt}
                width={100}
                height={100}
                className="w-full max-h-[400px] rounded-xl object-cover object-top"
              />
            )}
          </div>
          <div className="w-full flex-1 flex-col text-very-dark-blue-light-mode dark:text-white">
            <h1 className="text-xl sm:text-3xl font-extrabold">
              {data[0]?.name?.common}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between mt-4 sm:mt-6 text-sm sm:text-base">
              <div className="flex flex-col gap-2 items-start ">
                <p className="font-light">
                  <span className="font-semibold">Native Name: </span>
                  {data[0]?.name?.common}
                </p>
                <p className="font-light">
                  <span className="font-semibold">Population: </span>
                  {data[0]?.population}
                </p>
                <p className="font-light">
                  <span className="font-semibold">Region: </span>
                  {data[0]?.region}
                </p>
                <p className="font-light">
                  <span className="font-semibold">Sub Region: </span>
                  {data[0]?.subregion}
                </p>
                <p className="font-light">
                  <span className="font-semibold">Capital: </span>
                  {data[0]?.capital}
                </p>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="font-light">
                  <span className="font-semibold">Top Level Domain: </span>
                  {data[0]?.tld}
                </p>
                <p className="font-light">
                  <span className="font-semibold">Currencies: </span>
                  {data[0]?.currencies
                    ? Object.values(data[0]?.currencies)
                        .map((currency) => currency.name)
                        .join(", ")
                    : ""}
                </p>
                <p className="font-light">
                  <span className="font-semibold">Languages: </span>
                  {data[0]?.languages
                    ? Object.values(data[0]?.languages).join(", ")
                    : ""}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-8 sm:mt-16">
              <p className="min-w-max font-semibold">Border Countries:</p>
              <div className="flex gap-3 flex-wrap">
                {borderCountries.map((country) => (
                  <Link
                    href={`/${country[0]?.cca3}`}
                    key={country[0]?.name?.common}
                    className="text-sm font-light border-country-shadow bg-white py-1 px-7 dark:bg-dark-blue">
                    {country[0]?.name?.common}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
