import { curry } from "ramda";

const prevConsoles = document.querySelector(".prev-consoles");  //get the previous console addidng element
const consoleInput = document.querySelector(".console-input");  //get the console input element.

const enterKeyEvent = (event) => {
    
    if(event.key !== "Enter"){
        return;
    }
    if(event.target.value.length === 0){
        return;
    }
    const inputString = consoleInput.value.trim();

    try{
        addConsole(inputString,eval(inputString));
    }catch(error){
        addConsole(inputString, error);
    }
    consoleInput.value = "";
}

consoleInput.addEventListener("keyup", enterKeyEvent);

const createElement = (ele) => document.createElement(ele);

const addClass = curry((ele, cls) => ele.classList.add(cls));               // adding class to element using Ramda
const addText = curry((ele, text) => (ele.textContent = text));             // adding text value to element using Ramda


function addConsole(inputString, output){
    const outputString = output.toString();

    const inputConsoleElement = createElement("div");
    const outputConsoleElement = createElement("div");

    addClass(inputConsoleElement, "console-input-log");
    addText(inputConsoleElement, `> ${inputString}`);

    addClass(outputConsoleElement, "console-output-log");
    addText(outputConsoleElement, `> ${outputString}`);

    prevConsoles.append(inputConsoleElement, outputConsoleElement);
}






/* --- Basic Logic --- */
// const prevConsoles = document.querySelector(".prev-consoles");    //get the prevConsoles element to store prev consoles.
// const consoleInput = document.querySelector(".console-input");  //get the input element



// consoleInput.addEventListener("keyup", (event) => {

//     if(event.key !== "Enter"){
//         return;
//     }
//     if(event.target.value.length === 0){
//         return;
//     }

//     const input = event.target.value;

//     try{
//         addConsole(input, eval(input));
//     }catch(error){
//         addConsole(input, error);
//     }
//     consoleInput.value = "";
// })


// function addConsole(inputString, output){
//     const outputString =  output.toString();

//     const inputConsoleElement = document.createElement("div");
//     const outputConsoleElement = document.createElement("div");

//     inputConsoleElement.classList.add("console-input-log");
//     outputConsoleElement.classList.add("console-output-log");

//     inputConsoleElement.textContent =  `> ${inputString}`;
//     outputConsoleElement.textContent =  `> ${outputString}`;

//     prevConsoles.append(inputConsoleElement, outputConsoleElement);
// }


//import { curry } from "ramda";
//import * as R from "node_modules/ramda";
//const R = require("ramda");
//import * as R from 'ramda';
// const addEvent = curry(( ele, eventFunc) => {ele.addEventListner("keyUp", eventFunc);})  // making addEvent common reusable using curry
// consoleInput.addEventListner("keyup", enterKeyEvent);

// const inputEnterKeyUp = addEvent(consoleInput, "keyup") 

//inputEnterKeyUp(enterKeyEvent);                                                                     //passing eventFunction
// consoleInput.addEventListener("keyup", (e)=>{
//    return console.log(e);
// });