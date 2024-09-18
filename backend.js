const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
app.use(bodyParser.json());

// Azure SQL Database configuration
const dbConfig = {
    user: 'your_username', // Replace with your Azure SQL username
    password: 'your_password', // Replace with your Azure SQL password
    server: 'your_server.database.windows.net', // Replace with your server name
    database: 'your_database_name', // Replace with your database name
    options: {
        encrypt: true, // Use encryption for Azure SQL
    }
};

app.post('/submitForm', async (req, res) => {
    const formData = req.body;

    try {
        // Connect to the database
        await sql.connect(dbConfig);

        // Insert form data into the database
        const query = `INSERT INTO Users (FirstName, LastName, Email, Mobile, Password, Address, State, District) VALUES 
                     ('${formData.firstName}', '${formData.lastName}', '${formData.email}', '${formData.mobile}', 
                     '${formData.password}', '${formData.address}', '${formData.state}', '${formData.district}')`;

        await sql.query(query);
        res.send('Form data submitted successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error submitting form data.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});