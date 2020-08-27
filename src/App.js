import React from 'react';

import './App.css';
import Child from './child.js';
import {TransactionProvider} from './transactionContext'

function App() {
  return (
    <TransactionProvider>
    <div>
      <Child />

    </div>
    </TransactionProvider>
  );
}

export default App;
