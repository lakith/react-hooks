import React from 'react'

const auth = (props) => {
    let displayElement = () => {
        if(props.setAuthDisplay){
            return "block"
        } else {
            return "none"
        }
    }
    return(
        <div style={{display:displayElement()}}>
            <header>
                Auth Component
            </header>
        </div>
    )
}

export default auth;