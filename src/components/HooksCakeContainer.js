import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buy_cake } from '../redux/cake/cakeAction';

function HooksCakeContainer () {

  // using hooks --> useSelector() and useDispatch()
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h1>Using Hooks</h1>
        <h1>------------</h1>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buy_cake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer;





