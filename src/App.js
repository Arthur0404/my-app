import React from 'react';
import './App.css';

const App = () => {
  return (
      <div>
          <Header />
          <Techologies />
      </div>
  );
}

const Techologies = () => {
   return (
       <div>
           <ul>
               <li>css</li>
               <li>HTML</li>
               <li>JS</li>
               <li>React</li>
           </ul>
       </div>
   )
}
const Header = () => {
    return (<div>
            <a href="#">Home</a>
            <a href="#">Page</a>
            <a href="#">New Feed</a>
            <a href="#">Messages</a>
        </div>
    );
}

export default App;
