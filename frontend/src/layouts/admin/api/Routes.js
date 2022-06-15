import Dashboard from '../../../components/Admin/Dashboard';
import Profile from '../../../components/Admin/Profile';

const routes = [
    { path: "/dashboard", exact:true,  name: 'Dashboard', component: Dashboard},
    { path: "/profile", exact:true,  name:'Profile', component: Profile }
        
        
        
    
]

export default routes;


