import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../Components/UI/loader";
import { CountryCard } from "../Components/Layouts/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data.data);
    });
  }, []);
  if (isPending) return <Loader />;

  return (
    <>
      <section className="country-section">
        <ul className="grid grid-four-cols">
          {countries.map((curCountry) => {
            return (
              <CountryCard country={curCountry} key={curCountry.iso3} />
            );
          })}
        </ul>
      </section>
    </>
  );
};
