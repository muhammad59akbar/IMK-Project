import express  from "express";
import { getAdmin, LoginAdmin, LogoutAdmin } from "../controllers/Admin.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const AdminRoutes = express.Router();

AdminRoutes.get('/mdproAdmin', verifyToken, getAdmin);
// AdminRoutes.post('/mdproAdmin', Register);
AdminRoutes.post('/mdprologin', LoginAdmin);
AdminRoutes.get('/mdproToken', refreshToken);
AdminRoutes.delete('/mdprologout', LogoutAdmin);


export default AdminRoutes;