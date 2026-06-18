export const CountryCard = ({ country }) => {
  const { country: countryName, cities } = country;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <div className="countryInfo">
          <p className="card-title">{countryName}</p>
          <p>
            <span className="card-description">Cities:</span>
            {cities.length}
          </p>
          <p>{cities.slice(0, 5).join(", ")}</p>
        </div>
      </div>
    </li>
  );
};

