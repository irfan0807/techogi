import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'


const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Server is up and running!')
})
server.post('/signup', (req, res) => {

    const {fullname,email, password} = req.body;

    //validating the data from the frontend
    if(fullname.length < 3 || fullname.length > 18){
        res.status(400).json({
            "error": 'Fullname must be between 3 and 30 characters'
        })
    }
    return res.status(200).json({
        "status":"okay"
    })
   
}
    
)

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://shaiki4071:Password%402020SS@cluster0.tz8bdi7.mongodb.net/?retryWrites=true&w=majority' , 
            {
                useNewUrlParser: true,
                autoIndex:true
              });
        console.log(`MongoDB Connected: ${conn.connection.host}`);

}
catch (error) {
    console.error(error.message);
    process.exit(1);
}
}


let PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    dbConnect();
})



