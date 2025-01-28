const FCFS = (arrivalTimes, burstTimes) => {
    let processes = [];
    let time = 0;
    let ganttChart = [];
    let readyQueue = [];
    let totalTAT = 0;
    let totalWT = 0;
  
    for (let i = 0; i < arrivalTimes.length; i++) {
      let process = {
        pid: `P${i + 1}`,
        at: parseInt(arrivalTimes[i]),
        bt: parseInt(burstTimes[i]),
        ct: 0,
        tat: 0,
        wt: 0,
      };
      processes.push(process);
    }
  
    processes.sort((a, b) => a.at - b.at); // Sort by arrival time
  
    // FCFS algorithm execution
    for (let i = 0; i < processes.length; i++) {
      if (time < processes[i].at) {
        ganttChart.push('Idle');
        time = processes[i].at;
      }
  
      processes[i].ct = time + processes[i].bt;
      processes[i].tat = processes[i].ct - processes[i].at;
      processes[i].wt = processes[i].tat - processes[i].bt;
      
      ganttChart.push(processes[i].pid);
      readyQueue.push(processes[i].pid);
  
      time += processes[i].bt;
  
      totalTAT += processes[i].tat;
      totalWT += processes[i].wt;
    }
  
    let avgTAT = totalTAT / processes.length;
    let avgWT = totalWT / processes.length;
  
    return { ganttChart, readyQueue, processes, avgTAT, avgWT };
  };
  
  export default FCFS;
  