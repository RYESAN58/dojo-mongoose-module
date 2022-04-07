const mongoose = require('mongoose');
const app = express();


require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extendad: true}));


const AllMyUSerRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);


app.listen(8000, () => console.log("The server is all fired up on port 8000"));