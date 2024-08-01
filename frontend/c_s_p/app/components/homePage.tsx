"use client"; // This ensures the component is a Client Component

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/result');
  };

  // Using useEffect to ensure client-side only logic
  useEffect(() => {
    // Any client-side specific logic can go here
  }, []);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>First Innings Score Predictor</title>
        <link rel="shortcut icon" href="/ipl-favicon.ico" />
        <script src="https://kit.fontawesome.com/5f3f547070.js" crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
      </head>

      <body className="bg-gray-100 font-sans">
        {/* Website Title */}
        <div className="container mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            <span className="block text-lg font-semibold text-blue-600">First Innings Score Predictor for</span>
            <span className="block text-2xl text-green-600">Indian Premier League (IPL)</span>
          </h2>
          <div className="description mb-6">
            <p className="text-lg text-gray-600">A Machine Learning Web App, Built with Flask, Deployed using Heroku.</p>
          </div>
        </div>

        {/* Prediction Area */}
        <div className="prediction-area flex flex-wrap justify-center gap-6 p-6">
          {/* Prediction Form */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} action="{{ url_for('predict') }}" method="POST" className="space-y-4">
              <select className="form-input text-black w-full border border-gray-300 rounded-lg p-2" name="batting-team">
                <option value="none">--- Select a Batting team ---</option>
                <option value="Mumbai Indians">Mumbai Indians</option>
                <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                <option value="Chennai Super Kings">Chennai Super Kings</option>
                <option value="Rajasthan Royals">Rajasthan Royals</option>
                <option value="Kings XI Punjab">Kings XI Punjab</option>
                <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                <option value="Delhi Daredevils">Delhi Daredevils</option>
                <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
              </select>
              <select className="form-input text-black w-full border border-gray-300 rounded-lg p-2" name="bowling-team">
                <option value="none">--- Select a Bowling team ---</option>
                <option value="Mumbai Indians">Mumbai Indians</option>
                <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                <option value="Chennai Super Kings">Chennai Super Kings</option>
                <option value="Rajasthan Royals">Rajasthan Royals</option>
                <option value="Kings XI Punjab">Kings XI Punjab</option>
                <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                <option value="Delhi Daredevils">Delhi Daredevils</option>
                <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
              </select>
              <input className="form-input text-black w-full border border-gray-300 rounded-lg p-2" type="text" name="overs" placeholder="Overs (>= 5.0) eg. 7.2" />
              <input className="form-input text-black w-full border border-gray-300 rounded-lg p-2" type="text" name="runs" placeholder="Runs eg. 64" />
              <input className="form-input text-black w-full border border-gray-300 rounded-lg p-2" type="text" name="wickets" placeholder="Wickets eg. 4" />
              <input className="form-input text-black w-full border border-gray-300 rounded-lg p-2" type="text" name="runs_in_prev_5" placeholder="Runs scored in previous 5 Overs eg. 42" />
              <input className="form-input text-black w-full border border-gray-300 rounded-lg p-2" type="text" name="wickets_in_prev_5" placeholder="Wickets taken in previous 5 Overs eg. 3" />
              <button type="submit" className="myButton w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" value="Predict Score">Predict Score</button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white text-center p-4 mt-6">
          <div className="flex justify-center mb-2">
            <a target="_blank" href="https://github.com/anuragchaudharyusar/Cricket_score_predictor" className="text-white mx-2 hover:text-gray-400">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a target="_blank" href="https://github.com/anuragchaudharyusar" className="text-white mx-2 hover:text-gray-400">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
          <p className="text-gray-100">Made with NEXT. JS 🫠 </p>
        </div>
      </body>
    </>
  );
};

export default HomePage;
