// Write your Character component here
import styled from "styled-components";
import React from 'react'

export default function Character({ info }) {
  return (
    <div className='character'>
      {info.name}
      <button>
        See details
      </button>
    </div>
  )
}