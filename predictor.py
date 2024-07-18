import joblib
import pandas as pd

# Load your model (assuming you have saved it as a joblib file)
model = joblib.load('cricket_score_predictor.pkl.pkl')

def predict(input_data):
    try:
        # Convert input data to DataFrame (example structure)
        data = pd.DataFrame([input_data])
        print(f"Processed input data: {data}")
        
        # Get prediction
        prediction = model.predict(data)
        print(f"Model prediction: {prediction}")
        return prediction[0]
    except Exception as e:
        print(f"Error in prediction function: {str(e)}")
        raise e