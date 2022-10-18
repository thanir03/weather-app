import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { getRequest } from "../../helper";
import {
  OPTIONS_GET_REQUEST,
  CITY_API_URL,
  MIN_POPULATION,
  DEBOUNCE_TIMEOUT,
} from "../../config";

function Search(props) {
  const [city, setCity] = useState({});

  const handleQuery = (searchData) => {
    setCity(searchData);
    props.onSearch(searchData);
  };

  const handleLoadOptions = async (userInput) => {
    userInput = userInput.trim();
    const defaultData = { options: [] };
    if (!userInput) return defaultData;
    try {
      const cityData = await getRequest(
        `${CITY_API_URL}?minPopulation=${MIN_POPULATION}&namePrefix=${userInput}`,
        OPTIONS_GET_REQUEST
      );
      const listOfCities = cityData.data.map((element) => {
        return {
          label: `${element.name},${element.country}`,
          location: [element.latitude, element.longitude],
        };
      });
      return {
        options: listOfCities,
      };
    } catch (error) {
      return defaultData;
    }
  };

  return (
    <div className="container">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={DEBOUNCE_TIMEOUT}
        value={city}
        onChange={handleQuery}
        loadOptions={handleLoadOptions}
      />
    </div>
  );
}

export default Search;
