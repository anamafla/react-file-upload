import React, { useState } from "react";

import "./App.css";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">React File Upload</h4>
        <FileUpload />
      </div>
    </div>
  );
}

export default App;
