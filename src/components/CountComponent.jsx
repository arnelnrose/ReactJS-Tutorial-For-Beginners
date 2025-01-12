const CountComponent = (props) => {
    const { count, handleIncrement, handleDecrement } = props;
    console.log("Props", count);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button> &nbsp;
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default CountComponent
