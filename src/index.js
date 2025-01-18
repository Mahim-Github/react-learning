import React from 'react';
import ReactDOM from 'react-dom/client';
// const div= React.createElement('div', {className: 'text'}, " Hello My name is Mahim !")
// that's how we can make child
const child1= React.createElement('p', {} , "My name is Mahim's Child")
const child2= React.createElement('p',{}, "My name is Mahim's Second" )
//we can also create siblings like same and we can pass them in an array
// const div= React.createElement('div', {className: 'text'}, [child1, child2])
//after proper confiog we can use jsx syntax
// like const div= <div className="text">Hello world</div> properly gonna work
const div=<div className="text">Hello Mahim</div> 
console.log(div)
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(div)
// web pack is a bundler that web pack your application
//if you want somethong a browser can react then you would need preset react

