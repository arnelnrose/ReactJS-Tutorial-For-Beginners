import React, { useRef } from 'react'

const Lesson13_useRef = () => {
    const inputRef = React.useRef(null);

    const handleGetValue = () => {
        const value = inputRef.current.value;
        console.log(value);
    }

    return (
    <div>
        <input ref={inputRef} type="text" name='firstName' placeholder='Enter Name' />
        <button onClick={handleGetValue}>Get Value</button>
    </div>
  )
}

export default Lesson13_useRef