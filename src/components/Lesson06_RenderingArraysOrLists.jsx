
const Lesson06_RenderingArraysOrLists = () => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
    const prices = [10, 20, 30, 40, 50];
    const discount = prices.map(price => price * 32 / 100);
    return (
        <>
            <div>
                <h3>Rendering Arrays or Lists</h3>
                <ul>
                    {fruits.map((fruit, index) =>
                        <li key={index}>{fruit}</li>
                    )}
                </ul>

                <h3>Example #2 Price Discount Rendering</h3>
                <ul>
                    {prices.map((price, index) =>
                        <li key={index}>Price: {price} - Discount: {discount[index]}</li>
                    )}
                </ul>
            </div>
        </>
    )
}
export default Lesson06_RenderingArraysOrLists