
const Lesson08_RenderingComponentsInsideALoop = () => {
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' },
    { name: 'kiwi', color: 'green' }
]

  return (
    <div>
        <ul>
            {fruits.map((fruit) => (
                <li key={fruit.name}>
                    <p>{fruit.name}</p>
                    <p>{fruit.color}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Lesson08_RenderingComponentsInsideALoop