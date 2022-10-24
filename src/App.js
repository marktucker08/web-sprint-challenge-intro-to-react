import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character';
import Details from './components/Details';

const WrapperDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState(null);


  const openDetails = id => {
    setCurrentId(id)
  }

  const closeDetails = () => {
    setCurrentId(null)
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      }).catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
          <WrapperDiv>
          {data.map((char) => { 
            return <Character info={char} key={char.created} action={openDetails} />
            })
          }
          </WrapperDiv>
          {data.map(char => {
            return currentId === char.created ? <Details info={char} key={char.created} close={closeDetails} /> : null
          })
          }
    </div>
  );
}

export default App;
