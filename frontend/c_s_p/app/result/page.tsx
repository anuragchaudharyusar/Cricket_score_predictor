'use client'
import React from 'react';

const Page: React.FC<{ lowerLimit: string, upperLimit: string }> = ({ lowerLimit, upperLimit }) => {
  return (
    <div className="bg-gray-100 font-sans ">
      {/* Website Title */}
      <div className="text-center my-8">
        <h2 className="text-3xl font-extrabold mb-2 text-gray-800">
          <span className="block text-lg font-medium">First Innings Score Predictor for</span>
          <span className="block text-xl text-blue-600">Indian Premier League (IPL)</span>
        </h2>
        <p className="text-gray-600 text-lg">A Machine Learning Web App, Built with Flask, Deployed using Heroku.</p>
        </div>
        

      {/* Prediction Area */}
      <div className=" rediction-area flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 h-[40rem] relative w-full bg-gray-100  flex flex-col items-center justify-center overflow-hidden rounded-md">
        
        

        {/* Result */}
        <div className="results text-center flex-1 ">
          <p className="result-p  text-gray-800 md:text-7xl text-3xl lg:text-6xl font-bold text-center  relative z-20">
            The final predicted score (range): <span className="text-blue-600">{lowerLimit} to {upperLimit}</span>
          </p>
          
        </div>
        </div>
        

      {/* Footer */}
      
    
    <div className="text-center my-8 ">
        <div className="flex justify-center space-x-6 mb-2">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/anuragchaudharyusar/Cricket_score_predictor">
        
          </a>
        </div>
      
        <p className="text-gray-600">Made with NEXT. JS 🫠 </p>
      </div>
    </div>
  );
};

export default Page;
