import React from "react";
import Customer from "./Components/Customer";

const customers = [
  {
    id: "1",
    image: "https://placeimg.com/64/64/1",
    name: "소현진",
    birthday: "000425",
    gender: "female",
    job: "student",
  },
  {
    id: "2",
    image: "https://placeimg.com/64/64/2",
    name: "김선호",
    birthday: "121212",
    gender: "male",
    job: "actor",
  },
  {
    id: "3",
    image: "https://placeimg.com/64/64/3",
    name: "김제니",
    birthday: "131313",
    gender: "female",
    job: "singer",
  },
];
function App() {
  return (
    <div>
      {customers.map((customer) => {
        return (
          <Customer
            key={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        );
      })}
    </div>
  );
}

export default App;
