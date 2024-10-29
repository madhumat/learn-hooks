import React ,{userReducer} from 'react'


initialState =0;
    const reducer =(state, action) =>{
        switch (action) {
            case Increamemt:
                return state +1
            case Decreamemt:
                return state +1
            case Reset:
                return initialState;
            default:
                return state
        }

      //  return newState
    }
function Counter2() {
    
 const [count , dispatch] =  userReducer(reducer, initialState)
  return (
    <>
    <button onClick={()=>dispatch("Increamemt")}>Increamemt</button>
    <button onClick={()=>dispatch("Decreamemt")}>Decreamemt</button>
    <button onClick={()=>dispatch("Rest")}>Rest</button>
    </>
  )
}

export default Counter2