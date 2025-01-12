import PropTypes from 'prop-types'

const Lesson05_PassingArraysAndObjects = ({ person }) => {
    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Message: {person.message}</p>
            <p>Emoji: {person.emoji}</p>
            <p>Seat Numbers: {person.seatNumbers.join(', ')}</p>
        </div>
    )
}

Lesson05_PassingArraysAndObjects.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired,
        seatNumbers: PropTypes.array.isRequired,
    }),
}

export default Lesson05_PassingArraysAndObjects