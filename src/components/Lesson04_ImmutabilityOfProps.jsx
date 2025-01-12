import PropTypes from 'prop-types'

const Lesson04_ImmutabilityOfProps = ({ person }) => {
    return (
        <>
            <div>
                <h2>
                    {person.name}, {person.message}, {person.emoji} {person.seatNumbers.join(', ')}
                </h2>
            </div>
        </>
    )
}

Lesson04_ImmutabilityOfProps.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired,
        seatNumbers: PropTypes.array.isRequired
    }).isRequired
}

export default Lesson04_ImmutabilityOfProps