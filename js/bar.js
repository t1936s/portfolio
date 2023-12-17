// script.js

// Function to generate random data
function generateRandomData(count) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 201) - 100);
}

const DATA_COUNT = 7;

const labels = Array.from({ length: DATA_COUNT }, (_, index) => `Label ${index + 1}`);
const initialData = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: generateRandomData(DATA_COUNT),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: generateRandomData(DATA_COUNT),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        }
    ]
};

const config = {
    type: 'bar',
    data: initialData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bar Chart - Sample'
            }
        }
    },
};

// Get the canvas element
const ctx = document.getElementById('myAutomatedBarChart').getContext('2d');

// Create the initial bar chart
const automatedBarChart = new Chart(ctx, config);

// Function to update the chart with new random data
function updateChart() {
    automatedBarChart.data.datasets.forEach(dataset => {
        dataset.data = generateRandomData(DATA_COUNT);
    });
    automatedBarChart.update();

    // Schedule the next update
    setTimeout(updateChart, 3000); // Update every 3000 milliseconds (3 seconds)
}

// Start the automation
updateChart();
