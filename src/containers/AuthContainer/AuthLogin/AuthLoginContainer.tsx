import {getParentIdByEmail, getUserRoles, login} from '@Api/Auth';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthLoginResponse} from './types';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {setItem} from '@Service/storageService';
import Toast from 'react-native-toast-message';
import {getDeviceToken} from 'react-native-device-info';
import {getDevicePayload} from '@Utility/common';

export default function useAuthLoginContainer() {
  const refForm = React.useRef();
  const [fcm, setFcm] = useState(null); // Use state to manage fcm
  const {setUserAuthentication, setIsAuth, setIsShowRoles} = useContext(
    loginContext,
  ) as LoginContext;

  const [parentID, setParentID] = useState('');
  useEffect(() => {
    const fetchFcm = async () => {
      try {
        const result = await getDevicePayload();
        setFcm(result);
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    };

    fetchFcm();
  }, []);

  const {data: selectionPlayerData} = useQuery(
    [STORAGE_KEYS.GET_ROLES],
    () => getUserRoles({parentID}),
    {
      enabled: parentID ? true : false,
      onSuccess: data => {
        console.log(data, 'data OF USER ROLES');
        if (data?.data?.length > 0) {
          setItem(STORAGE_KEYS.ROLES_LIST, data?.data);
          const parentID = data?.data[0]?.id_parent_or_coach;
          setItem(STORAGE_KEYS.PARENTID, parentID);
          setUserAuthentication(data?.data);
        } else {
          setUserAuthentication(true);
        }
      },
    },
  );

  const queryClient = useQueryClient();

  const {mutate: loginMutation, isLoading: loginUserLoading} = useMutation(
    login,
    {
      onSuccess: (data: AuthLoginResponse, payload) => {
        setItem(STORAGE_KEYS.TOKEN, data?.token);

        console.log(payload, 'payloadpayloadpayload', data);
        const {parentId} = payload || {};
        // Manually trigger the getParentIdByEmail query on success of loginMutation
        queryClient
          .fetchQuery(
            [STORAGE_KEYS.GET_ID_BY_EMAIL],
            () => getParentIdByEmail({email: parentId}),
            {
              cacheTime: 0,
            },
          )
          .then(parentIdByEmail => {
            console.log(
              parentIdByEmail,
              'parentIdByEmailparentIdByEmailparentIdByEmail',
            );
            setParentID(parentIdByEmail?.parentId);
            setItem(
              STORAGE_KEYS.GET_PARENT_USER_DETAILS,
              parentIdByEmail?.parentId,
            );
            // Handle the result of getParentIdByEmail here
          });
      },
      onError: error => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error?.message,
        });
      },
    },
  );
  const handleOnForgotPassord = useCallback(() => {
    navigate(NavigationRoutes.AUTH_STACK.FORGET_PASSWORD);
  }, []);

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    const payload = {
      parentId: data?.parentId,
      password: data?.password,
      fcm: fcm?.deviceId,
    };

    if (data != null) {
      loginMutation(payload);
    }
  };

  return {
    refForm,
    onSubmitForm,
    handleOnForgotPassord,
    loginUserLoading,
  };
}
