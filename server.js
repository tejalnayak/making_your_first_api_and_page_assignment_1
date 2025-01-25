const express = require('express');
const app = express();

// Helper function to get the day of the week
const getDayMessage = (day) => {
    switch (day) {
        case 'Monday':
            return "Happy Monday! Start your week with energy!";
        case 'Friday':
            return "It's Friday! The weekend is near!";
        default:
            return "Have a wonderful day!";
    }
};

// Define the /assistant/greet endpoint
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name;
    
    if (!name) {
        return res.status(400).json({ error: "Name query parameter is required" });
    }

    // Get the current day of the week
    const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });
    
    // Construct the response
    const response = {
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: getDayMessage(currentDay)
    };
    
    // Send the response as JSON
    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
