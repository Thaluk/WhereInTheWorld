import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.label`
  background: var(--white);
  display: inline-flex;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  border-radius: 5px;
  flex: 1;
  i {
    margin-right: 1em;
    color: #C4C4C4;
  }
  input{
    width: 100%;
    color: var(--black);
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .9rem;
    background: var(--white);
    &::-webkit-input-placeholder {
      color: var(--input);
    }
  }
`

function Input(props) {
  return (
    <InputStyled>
      <i className="fas fa-search"></i>
      <input type='text' {...props} />
    </InputStyled>
  )
}

export default Input
