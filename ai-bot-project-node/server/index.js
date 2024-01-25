require('dotenv').config(); // Import dotenv library
const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Import axios library
const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());



// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });


app.get("/open", async (req, res) => {
  try {
    console.log("openAIPOST")
    console.log("req", req)
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      "model": "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": req.body }],
      "temperature": 0.7
    }, {
      headers: {
        'Authorization': 'Bearer ' + process.env.openAIKey, // Replace with your OpenAI API key
        'Content-Type': 'application/json'
      }
    });

    res.json({ message: response.data }); // Return the generated response
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
