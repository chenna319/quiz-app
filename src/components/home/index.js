import { QRCodeCanvas } from "qrcode.react";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>QuizGame</h1>
      <QRCodeCanvas
        value="https://dour-blade-da4.notion.site/Indroyd-Assignment-Reference-Document-116573730b5a80c8a925cd4ee4515372"
        size={250}
      />
    </div>
  );
};

export default Home;
