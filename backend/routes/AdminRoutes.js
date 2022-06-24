import express  from "express";
import { CreateAdmin, DeleteAdmin, getAdmin, getAdminById, LoginAdmin, LogoutAdmin } from "../controllers/Admin.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const AdminRoutes = express.Router();

AdminRoutes.get('/mdproAdmin', verifyToken, getAdmin);
AdminRoutes.get('/mdproAdmin/:id',  getAdminById);
// AdminRoutes.post('/mdproAdmin', Register);
AdminRoutes.post('/mdprologin', LoginAdmin);
AdminRoutes.post('/mdproaddcat', CreateAdmin);
AdminRoutes.get('/mdproToken', refreshToken);
AdminRoutes.delete('/mdprologout', LogoutAdmin);
AdminRoutes.delete('/mdproAdmin/:id', DeleteAdmin);


export default AdminRoutes;