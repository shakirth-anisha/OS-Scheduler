// Output.js
import React from 'react';

const Output = ({ result }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full md:w-2/3">
      <h2 className="text-3xl font-extrabold text-indigo-400 text-center">Output</h2>
      <div className="mt-4">
        {result ? (
          <div className="space-y-4">
            <p className="text-lg">Gantt chart and table will be displayed here for: {result.algorithm}</p>
            <div className="mt-6 p-4 border-2 border-gray-300 rounded-lg">
              <p className="text-center text-xl">Table will be here.</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No results yet. Please submit the form.</p>
        )}
      </div>
    </div>
  );
};

export default Output;
