import { useState } from 'react';
import Form from './components/Form';
import Flow from './components/Flow';
import Display from './components/Display';
import './App.css';

function App() {


  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);


  return (
    <div className="App">
      <div className="App-header">
        <Form transactions={transactions} setTransactions={setTransactions}/>
        <Display fruits={transactions}/>
        <Flow transactions={transactions}/>
      </div>
    </div>
  );
}

export default App;
