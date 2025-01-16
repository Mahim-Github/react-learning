// const div= React.createElement('div', {className: 'text'}, " Hello My name is Mahim !")
// that's how we can make child
const child= React.createElement('p', {} , "My name is Mahim's Child")
//we can also create siblings like same and we can pass them in an array
const div= React.createElement('div', {className: 'text'}, child)
//after proper confiog we can use jsx syntax
// like const div= <div className="text">Hello world</div> properly gonna work
console.log(div)
const root= ReactDOM.createRoot(document.getElementById('test'))
root.render(div)