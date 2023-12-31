import { FC } from 'react';

// consts
import { RESTORATION_CODE_FIELD, RESTORATION_CODE_INFO } from './RestorationCode.data';
import { ILoginRightTogglers, LOGIN_TOGGLER_COMPS } from '../LoginRight.data';
import { LOCAL_STORAGE_NAMES } from '../../../../../consts/login';

// services
import loginService from '../../../../../services/login/login'

// comps
import GenericLoginForm from '../GenericLoginForm/GenericLoginForm';

const RestorationCode: FC<ILoginRightTogglers> = ({ setTempLoginComp }) => {

    const handleRestorationCode = async (code: string) => {
        return await loginService.restorationCode(code).then((data) => {
            localStorage.setItem(LOCAL_STORAGE_NAMES.AUTH, data.accessToken);
        })

        // TOOD: add error handling, incase session expired
    }

    return (
        <>
            <GenericLoginForm buttonFunc={handleRestorationCode}
                buttonText={RESTORATION_CODE_INFO.BUTTON_TEXT}
                errorMsg={RESTORATION_CODE_INFO.ERROR_MSG}
                fields={RESTORATION_CODE_FIELD}
                setTempLoginComp={setTempLoginComp}
                title={RESTORATION_CODE_INFO.MAIN_TITLE}
                nextComp={LOGIN_TOGGLER_COMPS.resetPassword}
            />
        </>
    );
};

export default RestorationCode;