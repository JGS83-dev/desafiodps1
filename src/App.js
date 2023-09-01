import React from 'react';
import { Button } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </div>
  );
}

export default App;