from flask import Flask, request, jsonify
from flask_cors import CORS
from predictor import predict
import logging

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/predict', methods=['POST'])
def get_prediction():
    try:
        data = request.get_json(force=True)
        input_data = data['data']
        app.logger.debug(f"Received input data: {input_data}")
        
        prediction = predict(input_data)
        app.logger.debug(f"Prediction: {prediction}")
        
        return jsonify(prediction=prediction)
    except Exception as e:
        app.logger.error(f"Error during prediction: {str(e)}")
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True)
