
import './App.css';
import { useState } from 'react';

const foodDb = {
  Chinese: [{name: "Chilli Garlic Chicken", rating: "4.5/5"},
            {name: "Chicken Fried Rice", rating: "5/5"}],
  Indian:  [{name: "Chicken Tikka Masala", rating: "5/5"},
             {name: "Dal Makhani", rating: "3/5"}],
  Italian: [{name: "Margherita Pizza", rating: "5/5"},
            {name: "Alfredo Pasta", rating: "4.5/5"}]                     
};

function App() {
  const [selectedFood, setFood] = useState("Chinese");
  function foodClickHandler(food){
    setFood(food);
  }
  return (
    <div className="App">
      <h1>🍽 food reccos</h1>
      <p style={{ fontSize: "smaller"}}>
        {" "}
        Checkout my favorite food. Select a cuisine to start.{" "}
      </p>
      <div>
      {Object.keys(foodDb).map((food) => (
          <button
            onClick={() => foodClickHandler(food)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {food}
            </button>
      ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDb[selectedFood].map((dish) => (
            <li
              key={dish.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {dish.name} </div>
              <div style={{ fontSize: "smaller" }}> {dish.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
