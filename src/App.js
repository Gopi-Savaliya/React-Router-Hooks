import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { UseHistoryHook } from './useHistoryHook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UseHistoryHook />
      </BrowserRouter>
    </div>
  );
}

export default App;
