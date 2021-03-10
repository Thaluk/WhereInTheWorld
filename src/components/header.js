import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from './wrapper'

const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4 0 rgba(0,0,0,.06);

  .content {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  };
  p {
    font-size: 22px;
    font-weight: 50px;
    font-weight: 600;
    /* color: var(--white); */
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  .dark-mode {
    cursor: pointer;
    .far {
      /* margin-right: 10px; */
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 2em;
  }

`

function Header({setDarkMode, darkMode}) {
  const history = useHistory();

  function handleclick() {
    setDarkMode(!darkMode);
    history.push(`?dark_mode=${!darkMode}`);
  }
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if(urlParams.get('dark_mode')=='true'){
    setDarkMode(true);
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to='/'>
            <p>
              Where in the world?
            </p>
          </Link>
          <div className="dark-mode">
              {!darkMode ?
                <p onClick={handleclick}>
                  Dark Mode
                  <i className="far fa-moon"></i>
                </p> :
                <p onClick={handleclick}>
                  Ligth Mode
                  <i class="fas fa-moon"></i>
                </p>
              }
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
