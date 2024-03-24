import { API_CONFIG, CONTENT_TYPE, PAGE_SIZE } from '@Constants/api';
import { apiRequest } from '@Service/ServiceAction';
import { SERVICE_CONFIG_URLS } from '../constants/api_urls';
import { getUserType } from '../containers/startupContainer/types';
import apiService from '../services/apiService';
import versionService from '../services/versionService';

export const login = async (params: any) => {
  const { data } = await apiRequest({
    url: SERVICE_CONFIG_URLS.AUTH.LOGIN,
    method: API_CONFIG.POST,
    params,
  });
  return data;
};


export const signup = async (params: any) => {
  const { data } = await apiRequest({
    url: SERVICE_CONFIG_URLS.AUTH.SIGNUP,
    method: API_CONFIG.POST,
    params
  });
  return data;
};

export const getUserRoles = async (params: any) => {
  console.log(params, "paramsparamsparamsparamsparamsparamsparamsparamsparams")
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.AUTH.ROLES}/${params?.parentID}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};



export const getPlayerSelection = async (params: any) => {
  
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.GET_PLAYER_SELECTION}${params.parentId}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getUser = async () => {
  const payload: getUserType = {
    version: versionService.getVersionNumber(),
  };
  const { ok, response, data } = await apiService.post(
    SERVICE_CONFIG_URLS.STUDENT.USER_DETAILS,
    payload,
  );
  if (ok) {
    return data;
  }
  throw response.message;
};

export const logout = async (params: any) => {
  const { data } = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.SIGN_OUT,
    method: API_CONFIG.POST,
    params,
  });
  return data;
};

export const getPrivacyPolicy = async (params: any) => {
  const { data } = await apiRequest({
    url: SERVICE_CONFIG_URLS.AUTH.PRIVACY_POLICY,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const deleteUser = async (params: any) => {
  
  const { data } = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.DELETE_ACCOUNT}/${params?.parentId}` ,
    method: API_CONFIG.DELETE,
    params,
  });
  
  return data;
};

export const forgotPassword = async (params: any) => {
  console.log(params, "params forgotPassword")
  const { data } = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.AUTH.FORGOT_PASSWORD}` ,
    method: API_CONFIG.PUT,
    params,
  });
  
  return data;
};