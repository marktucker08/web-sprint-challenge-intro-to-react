import styled from "styled-components";
import React, { useState } from 'react'

const StyledCharacter = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px;
border-bottom: 2px solid white;
color: white;

transition: all 0.2s ease-in-out;
&:hover {
  transition: all 0.2s ease-in-out;
};
`

export default function Details(props) {
    const { info, close } = props

    return (
      <StyledCharacter className='container'>
        <h2>Details:</h2>
        {
        //   friendId &&
          <>
            <p>{info.name} is {info.birth_year}</p>
            <p>Species: {info.species}</p>
            <p>Homeworld is {info.homeworld}</p>
            Film Appearances:
            <ul>
              {
                info.films.map((movie, idx) => <li key={idx}>{movie}</li>)
              }
            </ul>
          </>
        }
        <button onClick={close}>Close</button>
      </StyledCharacter>
    )
  }
 