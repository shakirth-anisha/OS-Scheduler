import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [algorithm, setAlgorithm] = useState('');
  const [arrivalTimes, setArrivalTimes] = useState('');
  const [burstTimes, setBurstTimes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ algorithm, arrivalTimes, burstTimes });
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full md:w-1/3 space-y-6">
      <h2 className="text-3xl font-extrabold text-white text-center">Input</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label className="block text-lg font-medium text-white">Algorithm</label>
          <select
            className="w-full mt-2 p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-lg appearance-none bg-gray-700 text-white"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="FCFS">First Come First Serve, FCFS</option>
            <option value="SJF">Shortest Job First, SJF</option>
            <option value="STRF">Shortest Time Remaining First, STRF</option>
            <option value="RR">Round Robin, RR</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-white">Arrival Times</label>
          <input
            type="text"
            placeholder="e.g. 0 2 4 6 8"
            className="w-full mt-2 p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-lg bg-gray-700 text-white"
            value={arrivalTimes}
            onChange={(e) => setArrivalTimes(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-white">Burst Times</label>
          <input
            type="text"
            placeholder="e.g. 2 4 6 8 10"
            className="w-full mt-2 p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-lg bg-gray-700 text-white"
            value={burstTimes}
            onChange={(e) => setBurstTimes(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-indigo-500 text-white text-2xl font-bold rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-6 focus:ring-indigo-400 transition-all"
        >
          Solve
        </button>
      </form>
    </div>
  );
};

export default Form;
