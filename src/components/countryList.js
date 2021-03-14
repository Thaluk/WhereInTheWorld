import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Country from "./country";
import Wrapper from "./wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fill, 264px);
  background: var(--white);
  justify-content: center;
  justify-items: space-between;
  margin-top: .8em;
`

function CountryList() {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => {
    if ('' !== state.filterByRegion) { return state.coutryFilteredByRegion}
    if (state.countryListByName.length > 0 ) {
      return state.countryListByName
    }
    // console.log(state.countryList)
    return state.countryList;
  })

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,

        });
        // setcountryList(data))
      })
      .catch(() => {
        console.log("Hubo un error");
      });
  }, [dispatch]);

  return (
  <Wrapper>
    <CountryListStyled>
        {
        countryList.map(
          ({ name, numericCode, flag, region, population, capital, alpha2Code }) => {
          return (
            <Country
              key={numericCode}
              flag={flag}
              population={population}
              region={region}
              name={name}
              capital={capital}
              alpha2Code= {alpha2Code}
            />
          )
          })
        }

    </CountryListStyled>
  </Wrapper>
  );
}

export default CountryList;
