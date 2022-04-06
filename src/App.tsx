import React from 'react';
import './App.css';
import InputPin from './components/InputPin';

function App() {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');

  return (
    <div className="App">
      <section>
        <h3>Skeleton</h3>
        <InputPin value={value} setValue={setValue} id={'default'} />
        <p>{value}</p>
      </section>
      <section style={{ background: '#2177C7' }}>
        <h2 style={{ color: 'white' }}>style w/ className</h2>
        <InputPin
          value={value2}
          setValue={setValue2}
          id={'input1'}
          className={'input1'}
        />
        <p>{value2}</p>
      </section>
      <section style={{ background: '#2177C7' }}>
        <h2 style={{ color: 'white' }}>with onComplete()</h2>
        <p style={{ color: 'white' }}>
          onComplete()가 undefined가 아닐 경우, blur() 처리 됩니다.
        </p>
        <InputPin
          value={value3}
          length={5}
          setValue={setValue3}
          id={'input3'}
          className={'input1'}
          onComplete={(str: string) => {
            alert(str);
          }}
        />
        <p>{value2}</p>
      </section>
    </div>
  );
}

export default App;
