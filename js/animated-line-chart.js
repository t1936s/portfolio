// animated-line-chart.js

(function() {
    // Check if the chart has already been initialized
    if (typeof animatedLineChart === 'undefined') {
        // Initialize data with an empty array
        var data = {
            labels: [],
            datasets: [{
                label: 'Stock Price - Sample',
                data: [],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2, // Set the width of the line
                tension: 0.1
            }]
        };

        var config = {
            type: 'line',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 100, // Set a maximum value for the y-axis
                    }
                }
            }
        };

        // Get the canvas element
        var ctx = document.getElementById('myAnimatedLineChart').getContext('2d');

        // Create the initial line chart
        var animatedLineChart = new Chart(ctx, config);

        // Function to add a new data point to the chart
        function addDataPoint() {
            var newDataPoint = Math.random() * 80 + 10; // Simulate random data in the range [60, 90]
            var newLabel = new Date().toLocaleTimeString(); // Use current time as a label

            // Add new data point and label
            data.labels.push(newLabel);
            data.datasets[0].data.push(newDataPoint);

            // Limit the number of data points shown (e.g., last 20)
            var maxDataPoints = 20;
            if (data.labels.length > maxDataPoints) {
                data.labels.shift();
                data.datasets[0].data.shift();
            }

            // Update the chart
            animatedLineChart.update();

            // Schedule the next update
            setTimeout(addDataPoint, 1000); // Update every 1000 milliseconds (1 second)
        }

        // Start the animation
        addDataPoint();
    }
})();
