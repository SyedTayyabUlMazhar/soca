import { AboutIconNew, FaqsIconNew, SupportIcon } from '@Asset/logo';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import { navigate } from '@Service/navigationService';

export default function useProfileSettingContainer() {

    const menuProfileSettingList = [
        {
          id: 1,
          icon:  <AboutIconNew/>,
          text: 'About Us',
          actionType: "Chevron",
          action: () => {
            navigate(NavigationRoutes.APP_STACK.ABOUT);
          },
        },
        {
          id: 2,
          icon:  <SupportIcon/>,
          actionType: "Chevron",
          text: 'Message Support Team',
        //   optionalText: phone || 'notAvaliable',
          action: () => {},
        },
        {
          id: 3,
          icon:  <FaqsIconNew/>,
          text: 'General FAQs',
          actionType: "Chevron",
        //   optionalText: email || 'notAvaliable',
          isVerified: false,
          emailVerification: 'Verify',
          action: () => {navigate(NavigationRoutes.APP_STACK.FAQS)},
        },
        {
          id: 3,
          icon:  <FaqsIconNew/>,
          text: 'Sponsors',
          actionType: "Chevron",
          action: () => {navigate(NavigationRoutes.APP_STACK.SPONSORS)},
        },
     
    
    
      ];

  return {
    menuProfileSettingList
  };
}
