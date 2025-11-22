import './App.css';


function App() {
  // Class for the Car
  class Car {
    constructor(name) {
      this.brand = name;
    }
    present() {
      return "I have this " + this.brand;
    }
  }
  const mycar = new Car("Mercedes");

  // Function to return a hello message
  const hello = (val) => {
    return "Hello " + val;
  };

  
}

export default App;