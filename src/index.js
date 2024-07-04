import React from 'react';
import {createRoot} from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(React.createElement("p", {}, "Hello World"));

/* 

Recap
Install ReactDOM with npm install react-dom
Import ReactDOM's createRoot method with import {createRoot} from "react-dom/client"
ReactDOM weighs 130KB when imported.
The root element is where ReactDOM will render your UI
createRoot(root).render(element);



Chapter Recap
ReactDOM is the glue between React and the DOM.
ReactDOM is separate from React
ReactDOM can be installed with npm install react-dom
Import ReactDOM's createRoot method with import {createRoot} from "react-dom/client"
createRoot(root).render(element);
Reconciliation is the process of syncing the Virtual DOM to the actual DOM.
ReactDOM completely manages the root element.
You should not directly change/update the content of the root element.
Apps built with React have a single root element (The most common use case).
*/


