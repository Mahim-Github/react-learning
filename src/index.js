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
const apiData= "Hi It's currently afternoon";
//its a conditional rendering 
const isMorning=false;
const morningtext= "Good Morning Mahim";
const afternoonText="Good Afternoon Akshat";
//const div=<div className="text">{isMorning ? morningtext : afternoonText}</div>
const morningElement=<div>{morningtext} it is 8am</div>
const afternoonElement= <div>{afternoonText} it is 10pm</div>
const div= isMorning?morningElement:afternoonElement;
console.log(div)
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(div)
// web pack is a bundler that web pack your application
//if you want somethong a browser can react then you would need preset react

