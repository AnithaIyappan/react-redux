import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buy_cake } from '../redux/cake/cakeAction';

function NewCakeContainer () {

    const [number, setNumber] = useState(1);

  // using hooks --> useSelector() and useDispatch()
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  
  return (
    <div>
        <h1>------------</h1>
      <h2>Number of cakes - {numOfCakes} </h2>
      <input type="text" value={number} onChange={(e) => {setNumber(e.target.value)}} />
      <button onClick={() => dispatch(buy_cake(number))}>Buy {number} Cake</button>
    </div>
  )
}

export default NewCakeContainer;




