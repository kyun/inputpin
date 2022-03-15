import React from 'react';
import './App.css';
import InputPin from './components/InputPin';

function App() {
  return (
    <div className="App">

      <InputPin className={'input1'} />
      <InputPin className={'input2'}   />
      <InputPin className={'input3'} inputStyle={{ width: '30px' }}  />


    </div>
  );
}

export default App;
