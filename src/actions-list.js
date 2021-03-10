import React from 'react'
import styled from 'styled-components'
import Region from './components/Region';
import Search from "./components/search";
import Wrapper from './components/wrapper';

const ActionsListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 480px 1fr 200px;
    }

  }

`

function ActionsList() {
  return (
    <ActionsListStyled>
      <Wrapper>
        <div className="grid">
          <Search/>
          <span></span>
          <Region/>
        </div>
      </Wrapper>
    </ActionsListStyled>
  )
}

export default ActionsList
