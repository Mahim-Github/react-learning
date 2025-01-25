import React from 'react';
import ReactDOM from 'react-dom/client';
// const div= React.createElement('div', {className: 'text'}, " Hello My name is Mahim !")
// that's how we can make child
// const child1= React.createElement('p', {} , "My name is Mahim's Child")
// const child2= React.createElement('p',{}, "My name is Mahim's Second" )
//we can also create siblings like same and we can pass them in an array
// const div= React.createElement('div', {className: 'text'}, [child1, child2])
//after proper confiog we can use jsx syntax
// like const div= <div className="text">Hello world</div> properly gonna work
// const apiData= "Hi It's currently afternoon";
//its a conditional rendering 
const isMorning=true;
const morningtext= "Good Morning Mahim";
const afternoonText="Good Evening Mahim";
//const div=<div className="text">{isMorning ? morningtext : afternoonText}</div>

const handleClick = (state ) =>  {
    console.log("I am clicked",state)
}//

// 
// I am just converting the below text in ejx syntax
// // kudos to the blunder i made like i have spent literally 20 min and i just have to do the value true of isMorning
const morningElement = (
    <div>
        {morningtext} <span onClick={() => handleClick(isMorning)}>it is 8am</span>
    </div>
);
// {morningtext} <span onClick={handleClick}>it is 8am</span>
const afternoonElement= <div>{afternoonText} it is 10pm</div>
const timeElement= isMorning?morningElement:afternoonElement;
// react components are basically functions which usually returns react element
// here i face problem regarding , the name start with small letter so i have to change its name startign with upper letter // here also we can just use fragments
const GreetingComponent = () => <>
        {timeElement}
        I am inside component
        </> 

// const GreetingComponent = function(){
//     // here i face problem regarding , the name start with small letter so i have to change its name startign with upper letter // here also we can just use fragments 
//     return <> 
//         {timeElement}
//         I am inside component
//     </>
// }
console.log(GreetingComponent)
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<GreetingComponent/>)

// console.log(greetingComponent())
// const root= ReactDOM.createRoot(document.getElementById('root'))
// root.render(greetingComponent())
// if we don not render the react component it will be treated as function which can't display anything 
// web pack is a bundler that web pack your application
//if you want somethong a browser can react then you would need preset react

