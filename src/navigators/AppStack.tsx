import AppHeader from '@Component/Header/AppHeader';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { getItem } from '@Service/storageService';
import { Colors } from '@Theme/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();

export default function AppStack() {
 const getUserRoles = getItem(STORAGE_KEYS.ROLES_LIST)
//  console.log(getUserRoles[0]?.role,'getUserRolesgetUserRolesgetUserRolesgetUserRoles');
 console.log(getUserRoles,'getUserRolesgetUserRolesgetUserRoles');
 
  return (
    <Stack.Navigator
    initialRouteName={
      (getUserRoles && (getUserRoles[0]?.role === "coach" || getUserRoles[0]?.role === "Team Manager" || getUserRoles[1]?.role === "coach" ||  getUserRoles[1]?.role === "Team Manager" || getUserRoles[0]?.role === "team_mgr")) 
      ? NavigationRoutes.APP_STACK.ROLE_SELECTION 
      : NavigationRoutes.APP_STACK.BOTTOM_TABS
    }
      screenOptions={{
        header: props => {
          let state = props.navigation.getState();
          let routeIndex = state?.routes[state?.index]?.state?.index;
          let routeName = state.routes[state.index].name;
          return (
            <AppHeader
              {...props}
              routeName={routeName}
              routeIndex={routeIndex}
            />
          );
        },
        contentStyle: {
          backgroundColor: Colors.WHITE_FOUR,
        },
      }}>
            <Stack.Screen
        options={{title: 'Role Selection', headerShown: false}}
        name={NavigationRoutes.APP_STACK.ROLE_SELECTION}
        getComponent={() =>
          require('@Container/AppContainer/RoleSelectionScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Bottom Tabs', headerShown: false}}
        name={NavigationRoutes.APP_STACK.BOTTOM_TABS}
        getComponent={() => require('@Navigator/BottomStack').default}
      />
      <Stack.Screen
        options={{title: 'HOME', headerShown: false}}
        name={NavigationRoutes.APP_STACK.HOME}
        getComponent={() =>
          require('@Container/AppContainer/Home/HomeScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Rewards'}}
        name={NavigationRoutes.APP_STACK.REWARDS}
        getComponent={() =>
          require('@Container/AppContainer/Rewards/RewardScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Tiers'}}
        name={NavigationRoutes.APP_STACK.TIERS}
        getComponent={() =>
          require('@Container/AppContainer/Tiers/TierScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Player Selection', headerShown: false}}
        name={NavigationRoutes.APP_STACK.PLAYER_SELECTION}
        getComponent={() =>
          require('@Container/AppContainer/PlayerSelection/PlayerSelection')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Accounts'}}
        name={NavigationRoutes.APP_STACK.ACCOUNTS}
        getComponent={() =>
          require('@Container/AppContainer/Accounts/AccountScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Activities', headerShown: false}}
        name={NavigationRoutes.APP_STACK.ACTIVITY}
        getComponent={() =>
          require('@Container/AppContainer/Activity/ActivityScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Performance', headerShown: false}}
        name={NavigationRoutes.APP_STACK.PERFORMANCE}
        getComponent={() =>
          require('@Container/AppContainer/Performance/Performance').default
        }
      />
        <Stack.Screen
        options={{title: 'Performance', headerShown: false}}
        name={NavigationRoutes.APP_STACK.ALL_PERFORMANCE}
        getComponent={() =>
          require('@Container/AppContainer/AllPerformance/Performance').default
        }
      />
         <Stack.Screen
        options={{title: 'Profile Setting', headerShown: false}}
        name={NavigationRoutes.APP_STACK.PROFILE_SETTING}
        getComponent={() =>
          require('@Container/AppContainer/ProfileSetting/ProfileSetting').default
        }
      />
            <Stack.Screen
        options={{title: 'CoachHome', headerShown: false}}
        name={NavigationRoutes.APP_STACK.COACH_HOME}
        getComponent={() =>
          require('@Container/AppContainer/CoachHome/CoachHome').default
        }
      />
            <Stack.Screen
        options={{title: 'ManagerHome', headerShown: false}}
        name={NavigationRoutes.APP_STACK.MANAGER_HOME}
        getComponent={() =>
          require('@Container/AppContainer/Manager/ManagerHome').default
        }
      />
            <Stack.Screen
        options={{title: 'About', headerShown: false}}
        name={NavigationRoutes.APP_STACK.ABOUT}
        getComponent={() =>
          require('@Container/AppContainer/About/About').default
        }
      />
      <Stack.Screen
        options={{title: 'Payment', headerShown: false}}
        name={NavigationRoutes.APP_STACK.PAYMENT}
        getComponent={() =>
          require('@Container/AppContainer/Payment/PaymentScreen').default
        }
      />
          <Stack.Screen
        options={{title: 'Announcement', headerShown: false}}
        name={NavigationRoutes.APP_STACK.ANNOUNCEMENT}
        getComponent={() =>
          require('@Container/AppContainer/Announcement/Announcement').default
        }
      />
              <Stack.Screen
        options={{title: 'Faqs', headerShown: false}}
        name={NavigationRoutes.APP_STACK.FAQS}
        getComponent={() =>
          require('@Container/AppContainer/Faqs/Faqs').default
        }
      />
                <Stack.Screen
        options={{title: 'Sponsors', headerShown: false}}
        name={NavigationRoutes.APP_STACK.SPONSORS}
        getComponent={() =>
          require('@Container/AppContainer/Sponsors/Sponsors').default
        }
      />
        <Stack.Screen
        options={{title: 'WebView',headerShown: false}}
        name={NavigationRoutes.APP_STACK.WEB_VIEW}
        getComponent={() =>
          require('@Container/ContentTypePages/WebView').default
        }
      />
        
    </Stack.Navigator>
  );
}
