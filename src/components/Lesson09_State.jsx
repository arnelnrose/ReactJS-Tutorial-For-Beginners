import { useState } from 'react'

const Lesson09_StateAndProps = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("ArnelRose");
    const [isChecked, setIsChecked] = useState(false);
    const [fruits, setFruits] = useState(["Apple", "Mango", "Orange"]);
    const [person, setPerson] = useState({ name: "ArnelRose", age: 43 });

    const handleIncrement = () => {
        setCount(prevState => prevState + 1);
    }

    const handleDecrement = () => {
        setCount(prevState => prevState - 1);
    }

    const handleShowfruits = () => {
        setIsChecked(!isChecked);
    }

    const handleAddFruit = () => {
        setFruits([...fruits, "Pineapple"]);
        console.log("Adding Fruits");
    }

    const handleRemoveFruit = (fruitIndex) => {
        const filteredFruits = fruits.filter((_, index) => index !== fruitIndex);
        setFruits(filteredFruits);
        console.log("Removing");
    }

    return (
        <div>
            <h1>COUNT: {count}</h1>
            <button onClick={handleIncrement} >+Increment</button> &nbsp;
            <button onClick={handleDecrement} >-Decrement</button>
            <hr />


            <div>
                <label htmlFor="">Put Check To Show Fruits: </label>
                <input type="checkbox" onChange={handleShowfruits} checked={isChecked} />
            </div>
            <button onClick={handleAddFruit}>Add Fruit</button>

            <ul>
                {isChecked && fruits.map((fruit, index) => {
                    return (
                        <div key={index}>
                            <li>{fruit}</li>
                            <button onClick={() => handleRemoveFruit(index)}>Remove Fuit</button>
                        </div>
                    );
                })}
            </ul>
        </div >
    )
}

export default Lesson09_StateAndProps
