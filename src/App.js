import ReadFile from './components/ReadFile'
import OutPut from './components/OutPut'
import './App.css';
import { Routes, Route } from 'react-router-dom';
 
 



function App() {
  return (
  <div className='App'>
  <Routes>
  <Route path="/" element={<ReadFile/>}/>
  <Route path="/output" element={<OutPut/>}/>
  </Routes>
  </div>
    
  );
}

export default App;
