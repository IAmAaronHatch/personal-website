const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path');

const app = express();


app.use( express.static( `${__dirname}/../build`) );

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(3120, () => {
    console.log('Listening on:', 3120)
})