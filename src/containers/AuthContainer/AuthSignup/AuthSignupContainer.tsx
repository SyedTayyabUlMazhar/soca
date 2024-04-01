import {login, signup} from '@Api/Auth';
import {useMutation} from '@tanstack/react-query';
import React, {useContext} from 'react';
import {AuthLoginResponse} from './types';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {navigate, pop} from '@Service/navigationService';
import { setItem } from '@Service/storageService';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import Toast from 'react-native-toast-message';

export default function useAuthSignupContainer() {
  const refForm = React.useRef();
  const {setUserAuthentication, setIsAuth} = useContext(
    loginContext,
  ) as LoginContext;
  const {mutate: signupMutation,isLoading: loginUserLoading} = useMutation(signup, {
    onSuccess: data => {
      //todo set context is auth true
      pop();
      // setItem(STORAGE_KEYS.PARENTID, data?.parentId);
      // setUserAuthentication(data);
      //   setUserAuthentication(data);
     
    },
    onError: error=>{
        console.log(error,'errorerrorerrorerror');
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error?.error,
        });
    }
  });

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    console.log(data, 'this is the data');

    if (data != null) {
      signupMutation(data);
    }
  };

  return {
    refForm,
    onSubmitForm,
    loginUserLoading
  };
}
