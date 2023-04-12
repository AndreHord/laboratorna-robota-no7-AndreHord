import '../../../laboratorna-robota-no7-AndreHord/traffic-lights-7/src/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import TrafficLights from './components/TrafficLights';
import Home from './Pages/Home';

const App = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
  };

  return (
      <Router>
        <div style={containerStyle}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/horizontal" element={<TrafficLights orientation="horizontal" />} />
            <Route path="/vertical" element={<TrafficLights orientation="vertical" />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
