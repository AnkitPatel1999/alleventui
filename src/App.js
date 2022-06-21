import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';
import CreateEvent from './components/CreateEvent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/create-event" element={<CreateEvent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
