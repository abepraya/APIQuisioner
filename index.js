const data = require('./Model/Model');
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')

// router.use("/quiz", (request, respon, next) => {
//     respon.send('<input type ="button" value="Hai"> </input>')
// })
app.use(cors())
router.get("/quiz", (request, respon, next) => {
    console.log(request.query.type);
    console.log(data);
    switch (request.query.type) {
        case "bebas":
            respon.json(data.data[0].data)
            break;
        case "hitungan":
            respon.json(data.data[1].data)
        default:
            respon.json(data.data)
            break;
    }
    // respon.json(data.data)
    next()
})

app.use("/", router);
app.listen(3010);