import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server is up")
})


app.listen(3000, () => {
    console.log('Servidor funcionando');

})
