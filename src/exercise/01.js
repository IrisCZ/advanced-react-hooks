// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


// const countReducer = (state, newState) => newState + state

// const countReducerWithObject = (state, action) => {...state, ...action}

// const countReducerWithFunction = (state, action) => ({
//      ...state, 
//      ...(typeof action === "function" ? action(state) : action)
// })

const countReducerWithDistach = (state, action) => {
  const {type, step} = action
  switch (type) {
    case 'INCREMENT':
      return {...state, count: state.count + step}
    default: {
      throw new Error(`Unsuported action type: ${type}`)
    }
      
  }
}

function Counter({initialCount = 0, step = 1}) {
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // const increment = () => changeCount(step)

  // const [state, setState] = React.useReducer(countReducerWithObject, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState({count: count + step})

  // const [state, setState] = React.useReducer(countReducerWithFunction, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))

  const [state, dispatch] = React.useReducer(countReducerWithDistach, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  
  return <button onClick={increment}>{count}</button>
}



function App() {
  return <Counter />
}

export default App
