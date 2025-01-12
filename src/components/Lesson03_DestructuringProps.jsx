
// import PropTypes from 'prop-types';

// function Lesson03_DestructuringProps(props) {
//     console.log("Log:" + props);

//     const { name, message } = props;
//     Lesson03_DestructuringProps.propTypes = {
//         name: PropTypes.string.isRequired,
//         message: PropTypes.string.isRequired,
//     };

//     return (
//         <div>{message} {name}</div>
//     )
// }
// export default Lesson03_DestructuringProps;



import PropTypes from 'prop-types';

Lesson03_DestructuringProps.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
};

function Lesson03_DestructuringProps({ name, message, emoji }) {
    return (
        <div>{message} {name} {emoji}</div>
    )
}
export default Lesson03_DestructuringProps;
