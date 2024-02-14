<!-- Rivison React.js -->
  Day 02 to 75 hard day challange 

    *********These Topics are coverd today***********
● JSX
● React.createElement vs JSX
● Benefits of JSX
● Behind the Scenes of JSX
● Babel & parcel role in JSX
● Components
● Functional Components
○ Composing Components


<!-- jsx -->
ans--> jsx (javascript xml ) is an external to the javascript language which  also uh to write html like syntax but is not a html simple way we can say something like -
xml and html likes syntax 
Ex==
const heading=<h1 key={75}>hello react js with vikas kumain</h1>

<!--  Why jsx  -->
--->jsx was introduced bcx of its lots of advantages 
01=Easy to understand and Easy to write and debug and easy to create multiple dom elements 
02==Readabilty
03==Syntatical sugar
04==less write code
05==developer Expericence
06==Maitainability

 React.createElement==> this is the core write to react element
Ex==
const heading1=React.createElement("h3",{key:"6"},"hello react js with core fundamatals")



What is babel===>
babel is a popular tool  used is web development to contverted varsions to javascipt that can run an older versions babel analyzing and transfrarming your code and convert to modern js like Es6 that is main resons what to do babel 

functional components ==>
functional componenets basically it is reuseble componets and we can use any where even when you write in one time and also it returns jsx code 

Composition components==
>>When you write two functional componenets and then u access functioanl componets inside to others that is called to compostion components 

EX-
const Vikas=()=>
<h2>hello this is the arrow function and just want to check to what is the componenet composition  </h2>

const Heading4=()=>{
    return (
    <div className="container">
       <Vikas/>
         <h1>hello this is the functional componenets</h1>
    </div>)
}  
