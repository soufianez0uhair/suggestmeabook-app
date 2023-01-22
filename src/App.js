import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;