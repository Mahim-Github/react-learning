import React from 'react';
import Button from './Button.js'

const App = () => {
    const clickAction=()=>{
        console.log("I was Clicked from the parent")
    }
    return <Button clickAction={clickAction}>Click Me New</Button>
}
// export {App}
export default App;


