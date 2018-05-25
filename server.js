
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'index')));
app.set('port', process.env.PORT || 8080);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('listening on port ', app.get('port'));
});
