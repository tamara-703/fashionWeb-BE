const mongoose = require('mongoose');




    try {

        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

        mongoose.connection.on('connected', () => {
            console.log(`listening at ${mongoose.connection.name} on ${mongoose.connection.host}: ${mongoose.connection.port}`)
        })

    } catch (error)
    {
        console.log(error.message)
    }
