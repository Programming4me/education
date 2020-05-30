const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000
//routes
const CourseRoutes = require('./routes/course')
const DocumentRoutes = require('./routes/document')
const ExerciseRoutes = require('./routes/exercise')
const SeasonRoutes = require('./routes/season')
//MIDDLE WARES
app.use(cors());  //cors policy
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
///

mongoose.connect("mongodb+srv://root:pass@cluster0-i0azz.gcp.mongodb.net/test?retryWrites=true&w=majority/myNewDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => console.log('  yeah you win ! ' + (err ? err : '')));


app.get('/', function (request, response) {
    response.send('hello')
})
//  our routes
app.use('/courses', CourseRoutes)
app.use('/documents', DocumentRoutes)
app.use('/exercises', ExerciseRoutes)
app.use('/seasons', SeasonRoutes)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

