document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    const venue = document.getElementById('venue').value;
    const overs = document.getElementById('overs').value;
    const runs = document.getElementById('runs').value;
    const wickets = document.getElementById('wickets').value;
    
    const inputData = {
        team1: team1,
        team2: team2,
        venue: venue,
        overs: overs,
        runs: runs,
        wickets: wickets
    };
    
    fetch('http://127.0.0.1:5000/predict', { // Update with your API URL if different
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: inputData })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('result').innerText = `Error: ${data.error}`;
        } else {
            document.getElementById('result').innerText = `Predicted Score: ${data.prediction}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error: Unable to fetch prediction';
    });
});
