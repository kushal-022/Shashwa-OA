const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    let numbers = [];
    let alphabets = [];
    let highestLowercaseAlphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highestLowercaseAlphabet || item > highestLowercaseAlphabet)) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    res.json({
        "is_success": true,
        "user_id": "Shashwat_Bhatnagar_26112004",  // Replace with actual value
        "email": "shashwat.bhatnagar2021@vitstudent.ac.in",  // Replace with actual value
        "roll_number": "21BCB0053",  // Replace with actual value
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
