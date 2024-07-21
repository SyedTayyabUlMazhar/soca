import ButtonView from '@Component/ButtonView';
import H4 from '@Component/Headings/H4';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  BGWithLayer,
  CoachSvg,
  LOGOSVG,
  ManagerSvg,
  ParentSvg,
  RoleSelectionSvg,
} from '@Asset/logo';
import H1 from '@Component/Headings/H1';
import Metrics from '@Utility/Metrics';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {getItem} from '@Service/storageService';
import {STORAGE_KEYS} from '@Constants/queryKeys';

const RoleSelectionScreen = () => {
  const getUserRoles = getItem(STORAGE_KEYS.ROLES_LIST);
  const [selectedRole, setSelectedRole] = useState(null);
  const parentId = getItem(STORAGE_KEYS.PARENTID);

  const handleRoleSelection = role => {
    setSelectedRole(role);
  };

  return (
    <ImageBackground
      source={RoleSelectionSvg}
      resizeMode="cover"
      style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          marginTop: Metrics.verticalScale(100),
        }}>
        <LOGOSVG />
        <RoleButtonView
          role="Parent"
          icon={<ParentSvg />}
          selected={selectedRole === 'Parent'}
          onPress={() => handleRoleSelection('Parent')}
        />
        {getUserRoles?.map((item, index) => {
          return (
            <RoleButtonView
              key={index}
              role={item?.role}
              icon={item?.role == 'coach' ? <CoachSvg /> : <ManagerSvg />}
              selected={selectedRole == item?.role}
              onPress={() => handleRoleSelection(item?.role)}
            />
          );
        })}
        <ButtonView
          style={{
            alignItems: 'center',
            backgroundColor: Colors.DARK_BLUE,
            padding: 15,
            marginTop: Metrics.verticalScale(60),
            borderRadius: Metrics.smallMargin,
            width: '70%',
          }}
          onPress={() => {
            if (selectedRole) {
              // Continue with the selected role
              console.log('Continuing with role:', selectedRole);
              if (selectedRole == 'Parent') {
                navigate(NavigationRoutes.APP_STACK.BOTTOM_TABS);
              }
              if (selectedRole == 'coach') {
                navigate(NavigationRoutes.APP_STACK.COACH_HOME, {parentId});
              }
              if (
                selectedRole == 'Team Manager' ||
                selectedRole == 'team_mgr'
              ) {
                navigate(NavigationRoutes.APP_STACK.MANAGER_HOME, {parentId});
              }
            } else {
              // Handle case where no role is selected
              console.log('Please select a role');
            }
          }}>
          <H4
            text="Continue"
            style={{...Fonts.Bold(Fonts.Size.medium, Colors.DARK_BLACK)}}
          />
        </ButtonView>
      </ScrollView>
    </ImageBackground>
  );
};

const RoleButtonView = ({role, icon, selected, onPress}) => {
  const roleMap = {
    coach: 'Coach',
    team_mgr: 'Manager',
    // Add more role mappings here if needed
  };

  // Get the mapped role name or keep it as it is if not found in the mapping
  const roleName = roleMap[role.toLowerCase()] || role;

  return (
    <ButtonView
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Metrics.verticalScale(50),
        padding: 20,
        borderWidth: selected ? 1 : 0,
        borderColor: selected ? Colors.DARK_BLUE : 'transparent',
        borderRadius: selected ? 20 : null,
      }}
      onPress={onPress}>
      {icon}
      <H1
        text={roleName}
        style={{
          ...Fonts.Regular(Fonts.Size.xxxLarge, Colors.WHITE),
          marginHorizontal: Metrics.baseMargin,
        }}
      />
    </ButtonView>
  );
};

export default RoleSelectionScreen;
