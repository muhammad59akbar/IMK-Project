import React from 'react';
import './Dashboard.css';


const Dashboard = ({name}) => {

  // const Navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [token, setToken] = useState('');
  // const [expire, setExpire] = useState('');


  // useEffect(() => {
  //   refreshToken(token);
  // })

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/mdprotoken');
  //     setToken(response.data.accessToken);
  //     const decoded = jwt_decode(response.data.accessToken);
  //     setName(decoded.name);
  //     setExpire(decoded.exp);
  //   } catch (error) {
  //     if(error.response){
  //       Navigate('/mdprologin')
  //     }
  //   }
  // }

  // const axiosJWT = axios.create();

  // axiosJWT.interceptors.request.use(async(config) => {
  //   const currentDate = new Date();
  //   if(expire * 1000 < currentDate.getTime()){
  //     const response = await axios.get('http://localhost:5000/mdprotoken');
  //     config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //     setToken(response.data.accessToken);
  //     const decoded = jwt_decode(response.data.accessToken);
  //     setName(decoded.name);
  //     setExpire(decoded.exp);
  //   }
  //   return config;
  // }, (error) => {
  //   return Promise.reject(error);
  // })

  return (
    <div className='dashboard-admin'>
      <h1>Welcome Back to MDPRO Dashboard</h1>
      <h2>{name}</h2>
    </div>
  )
}

export default Dashboard