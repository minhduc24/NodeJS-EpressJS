const express = require('express');
const connectDB = require('./config/db');
const posts = require('./routers/posts');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// Khoi dong app
const app = express();

// Khoi dong express middleware
app.use(express.json());

// Khoi dong expersss handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Khoi dong methodOverride middleware
app.use(methodOverride('_method'));

// Khoi dong bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Ket noi co so du lieu
connectDB();

// Su dung routers
app.use('/posts', posts);

// Mot so routes co ban, co the dua vao trong thu muc routes
app.get('/', (req, res) => { res.render('index') });
app.get('/about', (req, res) => { res.render('about') });

const PORT = 3000;

app.listen(PORT, () => console.log(`Sever khoi dong tai port ${PORT}`));