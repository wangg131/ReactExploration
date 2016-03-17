import React from 'react';

class App extends React.Component{ //class always have render method.. return other elements and dcompoents.. JSX = html like syntax
  render(){
    return (
    <div>
      <h1>Herro World</h1>
      <b>Bold</b>
    </div>
    );
  } //cant have another html tag right after scope of h1..turns into React.createElement('', ,) x 2 .. need to wrap in single node
}
//class component state

// stateless function component wihtout state
// const App = () => <h1> Hello Eggheads </h1>

export default App
