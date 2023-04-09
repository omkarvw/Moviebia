const express = require('express')
const app = express();

const tasks = require('./routes/tasks')

app.use(express.json())
// app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/redeem", tasks);
app.use('/', (req, res) => {
    return res.json({
        "message": "server is running"
    })
});


const start = async () => {
    try {
        app.listen(5000, () => {
            console.log("Server is listening");
        })
    }
    catch (error) {
        console.log(error);

    }
}
start();
