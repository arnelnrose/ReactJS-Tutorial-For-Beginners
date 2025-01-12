const name = `I'm Arnel Rose`;

function displayMessage() {
    return 'TEST';
}

const Lesson01_HelloWorld = () => {
    return (
        <div>
            <h1>Hello World, {name},  {displayMessage()} </h1>
            <h3>This is React App</h3>
        </div>
    )
}

export default Lesson01_HelloWorld