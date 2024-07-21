import PropTypes from 'prop-types'

function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>

    const loginPrompt =     <h2 className="login-prompt">
                            Please log in to continue
                            </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

// Prop data types
UserGreeting.proptypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

// Prop default values
UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting