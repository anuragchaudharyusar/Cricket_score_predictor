import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle

# Sample training data
data = pd.DataFrame({
    'overs': [10, 20, 30],
    'runs': [100, 200, 300]
})

# Target variable
target = [120, 220, 330]

# Train model
model = LinearRegression()
model.fit(data[['overs', 'runs']], target)

# Save model
with open('first-innings-score-lr-model.pkl', 'wb') as file:
    pickle.dump(model, file)
