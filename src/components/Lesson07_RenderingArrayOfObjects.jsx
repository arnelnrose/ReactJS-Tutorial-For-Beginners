

const Lesson07_RenderingArrayOfObjects = () => {
    const fruits = [
        { name: 'Apple', price: 1.99, quantity: 20 },
        { name: 'Banana', price: 0.99, quantity: 10 },
        { name: 'Blueberry', price: 2.99, quantity: 30 }
    ];
    return (
        <div>
            <ul>
                {
                    fruits.map((fruit, index) =>
                        <li key={index}>
                            {fruit.name} - ${fruit.price} - {fruit.quantity}
                            {fruit.quantity > 15 ? ' - In Stock' : ' - Out of Stock'}
                        </li> 
                    )}
            </ul>
        </div>
    )
}

export default Lesson07_RenderingArrayOfObjects