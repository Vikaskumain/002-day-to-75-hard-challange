import React from "react";
import  ReactDOM  from "react-dom/client";

// jsx 
const heading=<h1 key={75}>hello react js with vikas kumain</h1>
// This is the core react element 
const heading1=React.createElement("h3",{key:"6"},"hello react js with core fundamatals")




// functional componenets

const Vikas=()=>
<h2>hello this is the arrow function and just want to check to what is the componenet composition  </h2>

const Heading4=()=>{
    return (
    <div className="container">
       <Vikas/>
         <h1>hello this is the functional componenets</h1>
    </div>)
}  
// put the dom with react-dom
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render([<Heading4/>,heading,heading1])
