import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
function App() {
  return (
    <div className="min-h-screen bg-mint/5">
      <Nav />
      <div className="pl-64">
        <main className="w-full">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
