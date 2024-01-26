require("dotenv").config(); // Import dotenv library
const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import axios library
const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
//This was a test to confirm it works
// app.post("/open", async (req, res) => {
//   try {
//     //need to take req.body and send it to openAI
//     //need to take the response from openAI and send it back to the front end
//     const requestBody = req.body.body;
//     const responseMessage = requestBody + " I am proof it works.";
//     return res.json({ message: responseMessage });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.post("/open", async (req, res) => {
  try {
    console.log("req.body", req.body);
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: req.body.message }],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: "Bearer " + process.env.openAIKey, // Replace with your OpenAI API key
          // "Content-Type": "application/json",
        },
      }
    );
    //console.log(res.json({ message: response.data.statusCode }));
    return res.json({ message: response.data }); // Return the generated response
  } catch (error) {
    console.log(error);
  }
});
//console.log("res", res);
//console.log("req", req)

// return res.json({ message: req.body + "This is proof it works." });
// const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//   "model": "gpt-3.5-turbo",
//   "messages": [{ "role": "user", "content": req.body }],
//   "temperature": 0.7
// }, {
//   headers: {
//     'Authorization': 'Bearer ' + process.env.openAIKey, // Replace with your OpenAI API key
//     'Content-Type': 'application/json'
//   }
// });

// res.json({ message: response.data }); // Return the generated response
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
