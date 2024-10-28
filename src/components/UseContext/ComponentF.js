import React, { useContext } from 'react'
import {ChannnelContext, UserContext} from '../../App'

function ComponentF() {
  return ( 
    <div>ComponentF - explan even channelconext 

    <UserContext>
        {
            user=>{
                return <div>User Context Value {user}</div>
            }
        }
    </UserContext>

    </div>
  )
}

export default ComponentF



/**************************************** UseContexr 
 * 
useContext(UserContext)
useContext(ChannnelContext)
 */
