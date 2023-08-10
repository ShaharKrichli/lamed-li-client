import { NAVBAR_HEADLINE_LABEL } from "../../../consts/navbar";
import { INavbarHeadline } from "./ILandingCenter";


export const NAVBAR_HEADLINES: INavbarHeadline[] = [
    {
        label: NAVBAR_HEADLINE_LABEL.LAMEDLI,
        funcName: 'openLoginPopup',
        isAffectedByAuthentication: false,
    },
    {
        label: NAVBAR_HEADLINE_LABEL.LOGIN,
        funcName: 'openLoginPopup',
        isAffectedByAuthentication: true,
    },

    {
        label: NAVBAR_HEADLINE_LABEL.REGISTER,
        funcName: 'toRegister',
        isAffectedByAuthentication: true,
    },

]