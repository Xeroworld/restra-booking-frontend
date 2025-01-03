"use client";

import { useState } from "react";
import Image from "next/image";

const Home = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [bookingConfirmation, setBookingConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time || !guests || !name || !contact) {
      alert("Please fill in all fields.");
      return;
    }

    // You can implement API call to save booking details here.

    setBookingConfirmation(true); // Simulate a successful booking
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] p-8 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Table Booking</h1>
        {!bookingConfirmation ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-2 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="contact" className="text-sm font-medium">Contact Number</label>
              <input
                type="tel"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="p-2 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm font-medium">Reservation Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="p-2 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="time" className="text-sm font-medium">Reservation Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="p-2 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guests" className="text-sm font-medium">Number of Guests</label>
              <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                min="1"
                required
                className="p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Confirm Booking
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-green-600">Booking Confirmed!</h2>
            <p className="mt-4">Your table for {guests} guests is reserved on {date} at {time}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
