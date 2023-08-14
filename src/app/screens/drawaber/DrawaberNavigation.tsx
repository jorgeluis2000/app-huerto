import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme } from "react-native";
import { colors } from "../../../utils/constants/styles.constant";
import DrawaberComponent from "./components/Drawaber.component";
import DashboardScreen from "./dashboard/DashboardScreen";
import PlantScreen from "./plant/PlantScreen";
import HuertoScreen from "./huerto/HuertoScreen";
import { IStackScreenProps } from "../../../utils/interfaces/StackScreenProps";

const Drawer = createDrawerNavigator()


export default function DrawaberNavigation ({ navigation }: IStackScreenProps) {
    const colorScheme = useColorScheme()
    return (
        <Drawer.Navigator
        drawerContent={(props) => <DrawaberComponent {...props} navigationStack={navigation} />}
        screenOptions={{ headerTintColor: (colorScheme === "light") ? colors.black : colors.white, headerTransparent: true  }}
        initialRouteName="Plants"
        >
            <Drawer.Screen name="Dashboard" component={DashboardScreen}  />
            <Drawer.Screen name="Plants" component={PlantScreen}  />
            <Drawer.Screen name="Huertos" component={HuertoScreen}  />
        </Drawer.Navigator>
    )

}