import HomeScreen from '../screens/Home';
import { IRouteProp } from '../../utils/interfaces/RouteProp';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import DrawaberNavigation from '../screens/drawaber/DrawaberNavigation';


const AppRoutes: IRouteProp[] = [
    {
        name: 'Home',
        component: HomeScreen
    },
    {
        name: 'Login',
        component: LoginScreen
    },
    {
        name: 'Register',
        component: RegisterScreen
    },
    {
        name: 'Drawaber',
        component: DrawaberNavigation
    }
]

export default AppRoutes