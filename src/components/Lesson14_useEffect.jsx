import React, { useState, useEffect, useRef } from 'react'

const Lesson14_useEffect = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([])
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    useEffect(() => {
        console.log("Count: " + count);
        
    },[count])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTodos(data);
            })
    }, [])

    const handleIncrement = () => {
        setCount(prevState => prevState + 1);
    }

    return (
        <>
            <div>Lesson14_useEffect</div>
            <input ref={inputRef} type="text" />
            <button onClick={handleIncrement} >Increment</button>
            <br />
            <br />
                <button onClick={() => setCount(prevState => prevState +1)} >Increment</button>
            <br />
            <br />
            <div>Fetching data with useEffect</div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Lesson14_useEffect