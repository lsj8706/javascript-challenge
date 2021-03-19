//home
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CONFIRM_ACCOUNT = "/confirm-account";
//courses
const COURSES = "/courses";
const NEW = "/new";
const MINE = "/mine";
//api
const API = "/api";
const DOCUMENTATION = "/documentation";
//apiv1
const API_V1 = "/api/v1"
const V1_BUY = "/buy";
const V1_REFUND = "/refund";
//apiv2
const API_V2 = "/api/v2"
const V2_REMOVE = "/remove";
const V2_EDIT = "/edit";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    confirmAccount: CONFIRM_ACCOUNT,
    courses: COURSES,
    new: NEW,
    mine: MINE,
    api: API,
    apiV1: API_V1,
    documentation: DOCUMENTATION,
    v1Buy: V1_BUY,
    v1Refund:V1_REFUND,
    apiV2: API_V2,
    v2Remove:V2_REMOVE,
    v2Edit:V2_EDIT
};
export default routes;