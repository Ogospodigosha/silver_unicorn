import React from 'react';
import { App } from "app/App";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// ReactDom.render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
//   document.getElementById('root')
// );

const container = document.getElementById('root')

if (!container) {
  throw new Error('Container root not found')
}

const root = createRoot(container)

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)