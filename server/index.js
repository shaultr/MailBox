const
express = require('express'),
app = express();

require('dotenv').config()
require('./DL/db').connect();


app.use(require('cors')());
app.use(express.json());

app.use('/chat', require('./routes/chat.router'));
app.use('/users', require('./routes/user.router'));

// require('./DL/test')


app.listen(8000, ()=>console.log('Server is running'))