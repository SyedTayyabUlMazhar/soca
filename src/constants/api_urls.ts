const authController = 'Authentication';
const student = 'student';
const common = 'common';
const driver = 'driver';
const auth = 'auth'
const roles = "roles"
const players = "players"
export const SERVICE_CONFIG_URLS = {
  AUTH: {
    LOGIN: `${auth}/login`,
    SIGNUP:`${auth}/create`,
    ROLES: `${roles}`,
    ME: `${authController}/me`,
    REQUEST_OTP: `${driver}/tokens/request-otp`,
    VERIFY_OTP: `${driver}/tokens/verify-otp`,
    PRIVACY_POLICY: `${driver}/personal/privacy-policy`,
  },
  PLAYER: {
    REQUEST_OTP: `${student}/tokens/request-otp`,
    VERIFY_OTP: `${student}/tokens/verify-otp`,
    GET_CITIES: `${student}/preference/cities`,
    USER_DETAILS: `${student}/personal/profile`,
    GET_LANGUAGES: `${student}/preference/languages`,
    UPDATE_LANGUAGE: `${student}/preference/language`,
    FAQS: `/faqs`,
    GET_PLAYER:`player/`,
    GET_ANNOUNCEMENTS: `/announcements`, // announcements
    GET_PLAYER_SELECTION:`players/`,
    GET_ALL_PLAYERS_DATA: `${players}`,
    GET_TIER:`/tiers`,
    GET_REDEEM:`redeemable/`,
    GET_ACTIVITY:'player/activity/',
    DELETE_ACCOUNT:'user',
    PARENT_DATA:'/parent/',
    GET_PLAYER_PROFILE:`/player/`,
    GET_PLAYER_PERFORMANCE:'/player/'
  },
  COACH:{
    COACH_INFO:'/coach-info/',
    COACH_BATCH:'/coach-batch/',
    COACH_ACTIVITY:'/coach-activites/',
    AGE_GROUP:'/age-group',
    LOCATION: '/location'
  },
  MANAGER:{
    MANAGER_INFO:'/team-rooster/',
    GET_TOURNAMENT:'/tournament',
    GET_DIVISION:'/division',
    GET_TEAM:'/team',
    GET_DATE:'/team-rooster-date/',
    GET_TEAM_ALLOCATION:'/team-rooster/'
  }
};
