const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uriUtl = require('mongodb-uri');
const cors = require('cors');

const mongoUrl = 'mongodb://localhost:27017/googleamedicine';
const monogooseUri = uriUtl.formatMongoose(mongoUrl);
const dbOptions = {
    useNewUrlParser: true
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/medicines', require('./routes/medicines/medicines'));
app.use('/api/bloodbanks', require('./routes/bloodbanks/bloodbanks'));
app.use('/api/medicineShops', require('./routes/medicalshops/medicalshops'));
app.use('/api/search', require('./routes/search/search'));


mongoose.connect(monogooseUri, dbOptions, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
            console.log(monogooseUri);
            console.log(`Server running at http://localhost:${port}/`);
        });
    }
});




