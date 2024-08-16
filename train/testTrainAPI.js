// Import required packages
const axios = require('axios');

// Set up API details
const API_KEY = '6c09ad947d4bf84fbbc1006ee94c7bcd';
const API_URL = `http://indianrailapi.com/api/v2/TrainInformation/apikey/${API_KEY}/TrainNumber`;

// Function to fetch train details
const getTrainDetails = async (trainNumber) => {
  try {
    console.log('Fetching details for train number:', trainNumber);

    const response = await axios.get(`${API_URL}/${trainNumber}/`);

    console.log('Response received:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching train details:', error.response ? error.response.data : error.message);
  }
};

// Define a train number for testing
const trainNumber = '12046'; // Replace this with any valid train number

// Fetch and display train details
getTrainDetails(trainNumber).then(data => {
  if (data) {
    console.log('Train Details:');
    console.log(`Train Name: ${data.TrainName}`);
    console.log(`Train Number: ${data.TrainNo}`);
    console.log(`Source: ${data.Source.Code} - Arrival: ${data.Source.Arrival}`);
    console.log(`Destination: ${data.Destination.Code} - Arrival: ${data.Destination.Arrival}`);
  } else {
    console.log('No data received.');
  }
});
