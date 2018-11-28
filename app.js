const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
<<<<<<< HEAD
const morgan = require('morgan')
=======
const mongoose = require('mongoose');

mongoose.connect('mongodb://ad98:'+process.env.MONGO_ATLAS_PW+'@cluster0-shard-00-00-',{
    useMongoClient: true
})

>>>>>>> 3352de41b550f09917d84a30bd44b894bfbcca5e

app.use(morgan('short'))

const routerUser = require('./routes/users.js');
const routerTeacher = require('./routes/teacher.js')
const routerAssignment = require('./routes/assignment.js')
const routerExam = require('./routes/exam.js')
const routerMarks = require('./routes/marks.js')
const routerCourses = require('./routes/courses.js')


app.use(routerMarks)
app.use(routerExam)
app.use(routerAssignment)
app.use(routerUser)
app.use(routerTeacher)
app.use(routerCourses)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log('Wxample app listening on port' + PORT))

app.use((req,res,next)=>{
    const error = new Error('Page not found')
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})