import React from "react";
import { Button } from "antd";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold text-green-600 mb-6 text-center">
        Welcome to <span className="text-green-700">TuniFarm</span>
      </h1>
      <p className="text-xl text-gray-700 text-center max-w-2xl">
        Discover fresh, organic products sourced directly from local farmers.
        Join the movement for sustainable farming and healthier communities.
      </p>
      <Button
        type="primary"
        className="mt-8 bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-3 text-lg shadow-lg"
        href="/shop"
      >
        Explore Our Shop
      </Button>
    </div>
  );
};

export default Home;
