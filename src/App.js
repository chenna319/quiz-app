import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Quiz App</h1>
      <QRCodeCanvas value="https://localhost:3000/chenna" size={228} />
    </div>
  );
}

export default App;
