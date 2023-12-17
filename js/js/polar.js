const DATA_COUNT = 5;
const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];

function getRandomNumbers(count, min, max) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return randomNumbers;
}

function createPolarAreaChart() {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: getRandomNumbers(DATA_COUNT, 0, 100),
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(255, 205, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(54, 162, 235, 0.5)'],
      },
    ],
  };

  const config = {
    type: 'polarArea',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Polar Area Chart',
        },
      },
    },
  };

  // Create the chart
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, config);

  // Automated process to update the chart
  setInterval(() => {
    chart.data.datasets.forEach((dataset) => {
      dataset.data = getRandomNumbers(DATA_COUNT, 0, 100);
    });
    chart.update();
  }, 2000); // Update every 2000 milliseconds (2 seconds)
}

// Create the initial chart
createPolarAreaChart();
