import React from 'react';
import FCFS from '../utils/FCFS';

const Output = ({ result }) => {
  const processScheduling = () => {
    if (!result) return {};
    const { arrivalTimes, burstTimes } = result;
    return FCFS(arrivalTimes, burstTimes);
  };

  const resultData = processScheduling();
  const {
    ganttChart = [],
    readyQueue = [],
    processes = [],
    avgTAT = 0,
    avgWT = 0,
  } = resultData;

  const maxBurstTime = Math.max(
    ...processes.map((p) => p.bt),
    ganttChart.filter((p) => p === 'Idle').length
  );

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full md:w-2/3 mx-auto">
      <h2 className="text-3xl font-extrabold text-indigo-400 text-center mb-6">Output</h2>
      <div className="space-y-6">
        {result ? (
          <div className="space-y-4">
            <div className="gantt-chart-container mt-6">
              <h3 className="text-xl text-white text-center mb-4">Gantt Chart</h3>
              <div className="gantt-chart flex items-center justify-start space-x-2 p-4 bg-gray-700 rounded-lg shadow-lg">
                {ganttChart.map((process, index) => {
                  const processWidth =
                    process !== 'Idle'
                      ? (processes.find((p) => p.pid === process).bt / maxBurstTime) * 600
                      : (1 / maxBurstTime) * 600;

                  return (
                    <div
                      key={index}
                      className={`gantt-bar p-2 text-center text-white rounded-lg ${
                        process === 'Idle' ? 'bg-gray-500' : 'bg-indigo-500'
                      }`}
                      style={{ width: `${processWidth}px` }}
                    >
                      {process !== 'Idle' && `P${process.slice(1)}`}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="ready-queue-container mt-6">
              <h3 className="text-xl text-white text-center mb-4">Ready Queue</h3>
              <div className="ready-queue flex items-center justify-start space-x-2 p-4 bg-gray-700 rounded-lg shadow-lg">
                {readyQueue.map((process, index) => (
                  <div
                    key={index}
                    className="ready-queue-bar p-2 text-center text-white rounded-lg bg-green-500"
                    style={{ width: '60px' }}
                  >
                    {process}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 border-2 border-gray-600 rounded-lg">
              <h3 className="text-center text-xl text-white">Scheduling Table</h3>
              <table className="min-w-full table-auto mt-4 text-white border-collapse border-gray-100">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="px-6 py-3 text-left border-l border-indigo-900">PID</th>
                    <th className="px-6 py-3 text-left border-l border-indigo-900">Arrival Time</th>
                    <th className="px-6 py-3 text-left border-l border-indigo-900">Burst Time</th>
                    <th className="px-6 py-3 text-left border-l border-indigo-900">Completion Time</th>
                    <th className="px-6 py-3 text-left border-l border-indigo-900">Turnaround Time</th>
                    <th className="px-6 py-3 text-left border-l border-indigo-900">Waiting Time</th>
                  </tr>
                </thead>
                <tbody>
                  {processes.map((process) => (
                    <tr key={process.pid} className="border-t border-gray-600 bg-gray-900 hover:bg-gray-950">
                      <td className="px-6 py-3 border-l border-gray-600">{process.pid}</td>
                      <td className="px-6 py-3 border-l border-gray-600">{process.at}</td>
                      <td className="px-6 py-3 border-l border-gray-600">{process.bt}</td>
                      <td className="px-6 py-3 border-l border-gray-600">{process.ct}</td>
                      <td className="px-6 py-3 border-l border-gray-600">{process.tat.toFixed(2)}</td>
                      <td className="px-6 py-3 border-l border-gray-600">{process.wt.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-700 text-white">
                    <td className="px-12 py-3 border-l border-gray-600 text-right" colSpan="4">
                      Average
                    </td>
                    <td className="px-6 py-3 border-l border-gray-600">{avgTAT.toFixed(2)}</td>
                    <td className="px-6 py-3 border-l border-gray-600">{avgWT.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No results yet...</p>
        )}
      </div>
    </div>
  );
};

export default Output;
