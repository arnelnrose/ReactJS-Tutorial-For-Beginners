import { useState } from 'react'
import CountComponent from './CountComponent';
import ChildComponents from './ChildComponent';

const Lesson09_StateAndProps = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevState => prevState + 1);
        console.log("Increment");
    }

    const handleDecrement = () => {
        setCount(prevState => prevState - 1);
        console.log("Decrement");

    }


    return (
        <div>
            <CountComponent count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
            <br/>
            <hr />
            <br />
            <ChildComponents>
                <h1>This is a heading</h1>
                <p>This is a paragraph</p>
            </ChildComponents>

        </div >
    )
}

export default Lesson09_StateAndProps
