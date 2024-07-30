import React from 'react';

const FlightInfo = ({ date, userName, ticketId, origin, destination, seatNo, gateNo, arrivalTime, departureTime, lateBy, flightNo, cancellingStatus }) => {
  return (
    <div>
      <h1>Flight Information</h1>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>User Name:</strong> {userName}</p>
      <p><strong>Ticket ID:</strong> {ticketId}</p>
      <p><strong>Origin:</strong> {origin}</p>
      <p><strong>Destination:</strong> {destination}</p>
      <p><strong>Seat No.:</strong> {seatNo}</p>
      <p><strong>Gate No.:</strong> {gateNo}</p>
      <p><strong>Arrival Time:</strong> {arrivalTime}</p>
      <p><strong>Departure Time:</strong> {departureTime}</p>
      <p><strong>Late By:</strong> {lateBy}</p>
      <p><strong>Flight No.:</strong> {flightNo}</p>
      <p><strong>Cancelling Status:</strong> {cancellingStatus}</p>
    </div>
  );
};

export default FlightInfo;
