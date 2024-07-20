import PropTypes from 'prop-types'

// props here is an Object
function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// propTypes - ensures that the passed value is of the correct data type
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number, 
    isStudent: PropTypes.bool,
}

// defaultProps - default values for props with no passed values
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student