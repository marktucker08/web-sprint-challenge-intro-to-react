// Write your Character component here
import styled from "styled-components";
import React from 'react'

const StyledCharacter = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px;
border-bottom: 2px solid white;

transition: all 0.2s ease-in-out;
&:hover {
  transition: all 0.2s ease-in-out;
};
`

export default function Character({ info }) {
  return (
    <StyledCharacter className='character'>
      {info.name}
      <button>
        See details
      </button>
    </StyledCharacter>
  )
}