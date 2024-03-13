const express = require('express');
const request = require('request');

const app = express();

app.get('/', function(req, res) {
  const options = {
    method: 'GET',
    url: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
      // Add any other necessary headers here
    }
  };
  
  request(options, function(error, response, body) {
    if (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(body);
  });
});

// Define other routes if needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});