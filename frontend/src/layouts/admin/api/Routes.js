import AddCategory from '../../../components/Admin/AddCategory';
import Dashboard from '../../../components/Admin/Dashboard';
import EditCategory from '../../../components/Admin/EditCategory';
import Profile from '../../../components/Admin/Profile';
import ViewCategory from '../../../components/Admin/ViewCategory';


const routes = [
    { path: "/dashboard", exact:true,  name: 'Dashboard', component: Dashboard},
    { path: "/Profile", exact:true,  name:'Profile', component: Profile },
    { path: "/ViewCategory", exact:true, name:'View-Category', component: ViewCategory},
    { path: "/AddCategory", exact:true, name:'Add=Category', component: AddCategory },
    { path: "ViewCategory/EditCategory/:id", exact:true, name:'Edit=Category', component: EditCategory }
    
        
        
        
    
]

export default routes;


