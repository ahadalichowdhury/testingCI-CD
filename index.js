let express = require("express") // import express module

const app = express()   
const port = 5000


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log("Server is running on port 3000")
}
)
