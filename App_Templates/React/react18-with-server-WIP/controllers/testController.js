const axios = require("axios");
require('dotenv').config();

module.exports = {
  pingServer: (req,res)=>{
    console.log("Test ping heard");
    res.json({message:"Hello from the server."})
  }
}

// Example code for communicating with an external API
/*
  findAll: function(req, res) {
      axios
        .get(Blog_API)
        .then((response)=>{
          console.log(response.data)
          res.json(response.data)
        })
        .catch((err)=>{
          res.status(400).json(err)
        })
  },
*/