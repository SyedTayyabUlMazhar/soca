const authController = 'Authentication';
const student = 'student';
const common = 'common';
const driver = 'driver';
const auth = 'auth'
const roles = "roles"
const players = "players"
const services = "service"
export const SERVICE_CONFIG_URLS = {
  AUTH: {
    LOGIN: `${auth}/login`,
    SIGNUP:`${auth}/create`,
    ROLES: `${roles}`,
    ME: `${authController}/me`,
    REQUEST_OTP: `${driver}/tokens/request-otp`,
    VERIFY_OTP: `${driver}/tokens/verify-otp`,
    PRIVACY_POLICY: `${driver}/personal/privacy-policy`,
    FORGOT_PASSWORD: `${auth}/forget-password/`,
    EMAIL:`/parent/email/`,
    OTP:`${auth}/forget-password/verify`,
    RESET_PASSWORD:`${auth}/reset-password`
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
    GET_PLAYER_PERFORMANCE:'/player/',
    GET_SPONSORS:'/sponsors',
    ABOUT_US:'/about-us',
    HALL_OF_FAME:'/hall-of-fame',
    SUMMARY:'/summary/',
    GET_ALL_PLAYERS:'/players',
    GET_ACADEMY_KID_AGE:`${services}/kids-age/values`,
    GET_ACADEMY_LOCATION:`${services}/location/values`,
    GET_ACADEMY_WEEKS:`${services}/kids-per-week/values`,
    GET_ACADEMY:`${services}/academy`,
    GET_TYPE_OF_LANE:`${services}/lane/values`,
    GET_NO_OF_HOURS:`${services}/no-of-hours/values`,
    GET_RENTAL:`${services}/rental`,
    GET_PENDING_PAYMENTS:`/pending-payment`,
    CREATE_PAYMENT:'/createPayment',
    GET_SESSION_TYPE:`${services}/type-of-session/values`,
    GET_KID_AGE_SESSION:`${services}/kid-age-session/values`,
    GET_PRIVATE:`${services}/private`,
  },
  COACH:{
    COACH_INFO:'/coach-info/',
    COACH_BATCH:'/coach-batch/',
    COACH_ACTIVITY:'/coach-activites/',
    AGE_GROUP:'/age-group',
    LOCATION: '/location',
    GET_COACH_ATTENDANCE_LIST: '/coach-attendance'
  },
  MANAGER:{
    MANAGER_INFO:'/team-rooster/',
    GET_TOURNAMENT:'/tournament',
    GET_DIVISION:'/division',
    GET_TEAM:'/team',
    GET_DATE:'/team-rooster-date/',
    GET_OPPONENT:'/opponent-teams',
    GET_TEAM_ALLOCATION:'/team-rooster/',
    LOCATION: '/location',
    GET_FIELDING:'/team-players/',
    UPDATE_GET_FIELDING:'/fielding-errors/'
  }
};
