import React from 'react';
const Button = (props) =>{
     console.log(props)
     const {children, clickAction}= props//const {children}= props
    const handleClick= () =>{
        // console.log ("Button is clicked inside the component")
        clickAction()
    }
    return <button onClick={(handleClick)}>{children}</button>
}

export default Button;