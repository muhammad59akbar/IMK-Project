import  express  from "express";
import dotenv from "dotenv";
import dbAdmin from "./config/AdminDatabase.js";
import AdminRoutes from "./routes/AdminRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

dotenv.config();
const app = express();

try {
    await dbAdmin.authenticate();
    console.log('databse terkoneksi');
} catch (error) {
    console.log(error)
    
}


app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(AdminRoutes);

app.listen(5000, ()=>(console.log('server running at port 5000')))