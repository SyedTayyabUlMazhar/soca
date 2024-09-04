import {getParentDetail} from '@Api/App';
import {AboutIconNew, FaqsIconNew, SupportIcon} from '@Asset/logo';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {getItem} from '@Service/storageService';
import {useBoundStore} from '@Store/index';
import {useQuery} from '@tanstack/react-query';

export default function useProfileSettingContainer() {
  const userData = getItem(STORAGE_KEYS.GET_PARENT_USER_DETAILS);

  const {data: parentData} = useQuery(
    [STORAGE_KEYS.GET_PARENT_DATA],
    () => getParentDetail({parentId: userData}),
    {cacheTime: 0, staleTime: 0},
  );
  const email = parentData?.map(elem => elem?.Email_id);
console.log(email[0],'emailemailemail');

  const setEmailZustand = useBoundStore((state: any) => state.setEmailZustand);

  const menuProfileSettingList = [
    {
      id: 1,
      icon: <AboutIconNew />,
      text: 'About Us',
      actionType: 'Chevron',
      action: () => {
        navigate(NavigationRoutes.APP_STACK.ABOUT);
      },
    },
    {
      id: 2,
      icon: <FaqsIconNew />,
      actionType: 'Chevron',
      text: 'Pending Payments',
      //   optionalText: phone || 'notAvaliable',
      action: () => {
        navigate(NavigationRoutes.APP_STACK.PAYMENT_PENDING, {email});
      },
    },
    {
      id: 2,
      icon: <FaqsIconNew />,
      actionType: 'Chevron',
      text: 'Services',
      //   optionalText: phone || 'notAvaliable',
      action: () => {
        navigate(NavigationRoutes.APP_STACK.SERVICES,{isEmail:true});
        setEmailZustand(email[0]);
      },
    },
    {
      id: 2,
      icon: <SupportIcon />,
      actionType: 'Chevron',
      text: 'Message Support Team',
      //   optionalText: phone || 'notAvaliable',
      action: () => {},
    },
    {
      id: 3,
      icon: <FaqsIconNew />,
      text: 'General FAQs',
      actionType: 'Chevron',
      //   optionalText: email || 'notAvaliable',
      isVerified: false,
      emailVerification: 'Verify',
      action: () => {
        navigate(NavigationRoutes.APP_STACK.FAQS);
      },
    },
    {
      id: 3,
      icon: <FaqsIconNew />,
      text: 'Sponsors',
      actionType: 'Chevron',
      action: () => {
        navigate(NavigationRoutes.APP_STACK.SPONSORS);
      },
    },
  
  ];

  return {
    menuProfileSettingList,
  };
}
