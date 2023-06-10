import React from 'react'

const ChildComponent = ({inputValue,setInputValue}) => {
  return (
    <div className='child'>
        <h1>Child Component</h1>
      <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
    </div>
  )
}

export default ChildComponent
