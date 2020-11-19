const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
