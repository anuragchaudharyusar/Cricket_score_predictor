import pandas as pd
from flask import Flask, request, render_template
import pickle

app = Flask(__name__)

# Load the model
with open('first-innings-score-lr-model.pkl', 'rb') as file:
    regressor = pickle.load(file)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Extract form data
    data = {
        'overs': float(request.form['overs']),
        'runs': float(request.form['runs']),
    }

    # Create DataFrame with the expected columns
    df = pd.DataFrame([data])
    
    # Print DataFrame and shape for debugging
    print("Data for prediction:", df)
    print("Data shape:", df.shape)

    # Predict using the model
    try:
        my_prediction = int(regressor.predict(df)[0])
    except Exception as e:
        return f"Error: {e}"

    # Return the result
    return render_template('result.html', lower_limit=my_prediction - 10, upper_limit=my_prediction + 10)

if __name__ == '__main__':
    app.run(debug=True)
