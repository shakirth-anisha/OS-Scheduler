import React, { useState } from 'react';
import Form from './components/Form';
import Output from './components/Output';

const App = () => {
  const [result, setResult] = useState(null);

  const handleFormSubmit = (data) => {
    setResult({
      algorithm: data.algorithm,
      arrivalTimes: data.arrivalTimes.split(' '),
      burstTimes: data.burstTimes.split(' '),
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900">
      <div className="flex flex-col md:flex-row items-start md:items-start justify-start space-y-8 md:space-y-0 md:space-x-8 w-full px-4 mt-12"> 
        <Form onSubmit={handleFormSubmit} />
        <Output result={result} />
      </div>

      <footer className="bg-gray-800 p-4 text-white absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/shakirth-anisha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-700 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 transition-all"
          >
            <i className="fab fa-github text-white text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anisha-shakirth/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
          >
            <i className="fab fa-linkedin-in text-white text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
