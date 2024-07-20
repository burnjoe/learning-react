import Student from "./Student"

function App() {
    return(
        // if value to be passed is not a String literal, enclosed it with {}
        <>
            <Student name="Joe" age={21} isStudent={true} />
            <Student name="Lawrence" age={40} isStudent={false} />
            <Student age={18} isStudent={true} />
        </>
    );
}

export default App
