import { INavbarHeadline } from "./ILandingCenter";

export const NAVBAR_HEADLINES: INavbarHeadline[] = [
    {
        label: 'למד לי',
        funcName: 'openLoginPopup',
        isAffectedByAuthentication: false
    },
    {
        label: 'התחבר',
        funcName: 'openLoginPopup',
        isAffectedByAuthentication: true,
    },

    {
        label: 'להרשמה',
        funcName: 'toRegister',
        isAffectedByAuthentication: true
    },

]