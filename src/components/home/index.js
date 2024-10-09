import { QRCodeCanvas } from "qrcode.react";
import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="qr-container">
      <h1>QuizGame</h1>
      <QRCodeCanvas value="https://localhost:3000/quiz-game" size={250} />
      <Link to="/quiz-game">
        <button type="button">Game</button>
      </Link>
    </div>
  );
};

export default Home;
