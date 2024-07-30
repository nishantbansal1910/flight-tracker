import React from 'react';
import FlightInfo from './components/FlightInfo';
import './App.css';
import Notification from './components/Notification';

function App() {
  const flightDetails = {
    date: new Date().toLocaleDateString(),
    userName: 'John Doe',
    ticketId: '123456',
    origin: 'New York',
    destination: 'Los Angeles',
    seatNo: '12A',
    gateNo: 'G5',
    arrivalTime: '10:00 AM',
    departureTime: '8:00 AM',
    lateBy: '2 hours',
    flightNo: 'AB123',
    cancellingStatus: 'On Time'
  };

  return (
    <div className="App">
      <header className="App-header">
        <FlightInfo {...flightDetails} />
      </header>
      <Notification />
    </div>
  );
}

export default App;
