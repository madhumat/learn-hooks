import React, { useState } from 'react'

function HookCounterObject() {
    const [name, setName] =useState({firstName:"",lastName:""})
  return (
    <form>
        <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h2> Your firstName is -{name.firstName}</h2>
        <h2> Your firstName is -{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounterObject

/******
 * 
 * 
 * 
 * /// need to check how the object display on this 
 <form>
        <input type='text' value={name.firstName} onChange={e=>setName({firstName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e=>setName({lastName:e.target.value})}/>
        <h2> Your firstName is -{name.firstName}</h2>
        <h2> Your firstName is -{name.lastName}</h2>
    </form>


 * 
// useState hook does not merge and update the object that should be manually done by adding the destrusturing prevstate value 
    <form>
        <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h2> Your firstName is -{name.firstName}</h2>
        <h2> Your firstName is -{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
 * 
 */