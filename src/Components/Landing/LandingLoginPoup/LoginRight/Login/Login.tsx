import { FC, useEffect, useState, } from 'react';
import { gapi } from 'gapi-script';

// style
import * as S from './Login.style'

// services
import loginService from '../../../../../services/login/login'

// icons
import google from '../../../../../assets/images/login/google.png'

// comps
import LoginButton from '../LoginButton/LoginButton';
import LoginField from '../LoginField/LoginField';
import LoginGoogleButton from '../LoginGoogleButton/LoginGoogleButton';

// consts
import { LOGIN_INFO, LOGIN_POPUP_FIELDS } from './Login.data';
import { ILoginRightTogglers, LOGIN_TOGGLER_COMPS } from '../LoginRight.data';
import { GOOGLE_CLIENT_ID, LOCAL_STORAGE_NAMES } from '../../../../../consts/login';

// interfaces
import { IGoogleUserProfile } from '../LoginGoogleButton/IGoogleUserProfile';

const Login: FC<ILoginRightTogglers> = ({ setTempLoginComp, handleClosePopup }) => {

    const [field, setField] = useState(LOGIN_POPUP_FIELDS)
    const [checkEmptyRequiredFields, setCheckEmptyRequiredFields] = useState(false)
    const [isLoginFailed, setIsLoginFailed] = useState(false)

    const updateFieldInfo = (isValid: boolean, value: string, index: number) => {
        setIsLoginFailed(false)
        setField(prev => {
            prev[index].isValid = isValid
            prev[index].value = value
            return [...prev]
        })
    }

    const handleLogin = () => {
        if (field.every(element => { return element.isValid })) {
            console.log(field[0].value, field[1].value)
            loginService.login(field[0].value, field[1].value).then(tokens => {
                localStorage.setItem(LOCAL_STORAGE_NAMES.AUTH, tokens.accessToken);
                localStorage.setItem(LOCAL_STORAGE_NAMES.REFRESH_TOKEN, tokens.refreshToken);
                handleClosePopup()
            }).catch(err => { setIsLoginFailed(true) })
        }
        else {
            setCheckEmptyRequiredFields(prevCheckEmpty => { return !prevCheckEmpty })
        }
    }

    const handleGoogleLogin = (userProfile: IGoogleUserProfile) => {
        loginService.googleLogin(userProfile.email, userProfile.googleId, userProfile.name).then(tokens => {
            localStorage.setItem(LOCAL_STORAGE_NAMES.AUTH, tokens.accessToken);
            localStorage.setItem(LOCAL_STORAGE_NAMES.REFRESH_TOKEN, tokens.refreshToken);
            handleClosePopup()
        }).catch(err => { setIsLoginFailed(true) })
        handleClosePopup()
    }

    useEffect(() => {
        const startGapiClient = () => {
            gapi.client.init({
                clientId: GOOGLE_CLIENT_ID.CLIENT_ID,
                scope: ""
            });

            gapi.load('client:auth2', startGapiClient)
        }
    })

    return (
        <>
            <S.RightMainTitle>{LOGIN_INFO.MAIN_TITLE}</S.RightMainTitle>
            <S.RightSecondaryTitle>
                {LOGIN_INFO.SECONDARY_TITLE}
                <S.RightSecondaryTitleJoinText>{LOGIN_INFO.SECONDARY_TITLE_LINK}</S.RightSecondaryTitleJoinText>
            </S.RightSecondaryTitle>
            {
                LOGIN_POPUP_FIELDS.map((element, index) => (
                    <LoginField checkEmptyRequiredFields={checkEmptyRequiredFields}
                        type={element.type}
                        key={index} field={element} index={index} updateFieldInfo={updateFieldInfo}></LoginField>
                ))
            }
            <S.RightLoginForgetPassword onClick={() => { setTempLoginComp(LOGIN_TOGGLER_COMPS.forgotPassword) }}>
                {LOGIN_INFO.FORGOT_PASSWORD}
            </S.RightLoginForgetPassword>
            {isLoginFailed && <S.RightLoginFailed>{LOGIN_INFO.ERROR_MSG}</S.RightLoginFailed>}
            <LoginButton text={LOGIN_INFO.BUTTON_TEXT} execFunction={handleLogin}></LoginButton>
            <S.RightSeperator>או</S.RightSeperator>
            <LoginGoogleButton text={LOGIN_INFO.GOOGLE_BUTTON_TEXT} icon={google} execFunction={handleGoogleLogin}></LoginGoogleButton>
        </>
    );
};

export default Login;