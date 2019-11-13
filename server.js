const app = require('./app');
const port = 3000;
const { db } = require('./models');

// db.sync().then(() => console.log('db synced!'));

app.listen(port, () => console.log(`listing port ${port}`))
