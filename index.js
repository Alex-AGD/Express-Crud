import express from 'express'
import mongoose from 'mongoose'
import router from './Router.js'
import fileUpload from 'express-fileupload'

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.bki2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`



const app = express ();
app.use (express.json ())
app.use(fileUpload({}))
app.use('/api', router)
//app.use('/users', router)



async function startApp () {
    try {
        await mongoose.connect (DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen (PORT, () => console.log ('server start' + PORT))
    } catch (e) {
        console.log (e)
    }
}

startApp ()



