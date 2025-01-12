import PropTypes from 'prop-types';

const Lesson02_WhatAreProps = (props) => {
    console.log("TEST: " + props);

    Lesson02_WhatAreProps.propTypes = {
        name: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    };

    return (
        <div>
            <h1>{props.name}, {props.message} </h1>
        </div>
    )
}

export default Lesson02_WhatAreProps