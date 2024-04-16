import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/map/MapHomeScreen';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import CalendarHomeScreen from '../../screens/calendar/CalendarHomeScreen';
import CalorieHomeScreen from '../../screens/calorie/CalorieHomeScreen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="Calendar" component={CalendarHomeScreen} />
      <Drawer.Screen name="Calorie" component={CalorieHomeScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;

