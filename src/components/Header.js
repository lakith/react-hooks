import React from 'react'

const header = (props) => {
    return(
        <header>
            <button onClick={props.onLoadAuth}>Auth</button> |{" "}
            <button onClick={props.onLoadTodos}>Todo</button>
        </header>
    )
}

export default header;
