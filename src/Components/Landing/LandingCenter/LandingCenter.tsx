import { FC, useEffect, useState } from "react";

//css
import * as S from './LandingCenter.style'
import './LandingCenter.css'

//routing
import { useHistory } from "react-router-dom";
import { REGISTER_ROUTE, TEACHER_SEARCH_ROUTE } from "../../../consts/routes";

// mui
import Autocomplete from "@mui/material/Autocomplete";

// consts 
import { NAVBAR_HEADLINES } from "./LandingCenter.data";

// assets
import landingPageImg from '../../../assets/images/landing/landingCenter/landingCenter.png'
import LandingLoginPopup from "../LandingLoginPoup/LandingLoginPoup";
import { ILandingCenter, navbarFunctionsManager } from "./ILandingCenter";
import { useAuthState } from "../../../context/authState";
import { AuthState } from "../../../context/IAuthState";

const LandingCenter: FC<ILandingCenter> = ({ isClientAtHomeLogin }) => {
  let history = useHistory();
  const { authState } = useAuthState();
  const [fieldOfLearning, setFieldOfLearning] = useState<string | null>(null);
  const [isFolDropdownOpen, setIsFolDropdownOpen] = useState<boolean>(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(isClientAtHomeLogin)

  const filterAutoCompleteOption = (options: string[], { inputValue }: { inputValue: string }) => {
    return options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()));
  };
  

  // const checkAuthState = () => {
  //   console.log("authState", authState);
  //   if (authState === 0){

  //     return
  //   }
  // }


  const navbarFunctionsManagerExec: navbarFunctionsManager = {
    openLoginPopup: () => {
      setIsLoginPopupOpen(true)
    },
    toRegister: () => {
      history.push(REGISTER_ROUTE)
    }
  };

  // useEffect(() => {
  //   checkAuthState()
  // }, []);

  console.log("NAVBAR_HEADLINES[0].isAffectedByAuthentication", NAVBAR_HEADLINES[0].isAffectedByAuthentication);
  console.log("NAVBAR_HEADLINES[1].isAffectedByAuthentication", NAVBAR_HEADLINES[1].isAffectedByAuthentication);
  console.log("NAVBAR_HEADLINES[2].isAffectedByAuthentication", NAVBAR_HEADLINES[2].isAffectedByAuthentication);

  return (
    <>
      <S.LandingContainer>
        <S.NavbarContainer>
          {NAVBAR_HEADLINES.map((element, index) => (
            (!NAVBAR_HEADLINES[index].isAffectedByAuthentication)
            &&
            <S.NavbarElement key={index} onClick={() => { navbarFunctionsManagerExec[element.funcName]() }}>
              {element.label}
            </S.NavbarElement>
          ))}
        </S.NavbarContainer>

        <S.CenterContainer>
          <div>
            <S.MainTitle>
              העזרה שחיפשתם,<br />

              במחיר שאתם צריכים
            </S.MainTitle>
            <Autocomplete
              value={fieldOfLearning}
              onChange={(event: any, value: string | null) => { setFieldOfLearning(value) }}
              onInputChange={(event: any, value: string) => { setIsFolDropdownOpen(value.length >= 2) }}
              options={['Math', 'Science', 'History']}
              open={isFolDropdownOpen}
              onClose={() => setIsFolDropdownOpen(false)}
              filterOptions={filterAutoCompleteOption}
              noOptionsText="לא נמצאו אפשרויות"
              popupIcon={false}
              renderInput={(params) => (
                <S.AutocompleteInput
                  dir="rtl"
                  {...params}
                  placeholder="מה בא לך ללמוד היום?"
                  fullWidth
                  sx={{
                    borderRadius: '25px',
                    fontSize: '1.2rem',
                    backgroundColor: 'white',
                    marginTop: '1rem',
                    justifyContent: 'right',
                    direction: 'rtl',
                    padding: '0'
                  }}
                  onClick={() => setIsFolDropdownOpen(true)}
                />
              )}
            />
            <S.CenterPopularContainer>
              <S.PopularTitle >פופולרי</S.PopularTitle> {/* will change */}
              <S.CenterPopularOption>מתמטיקה</S.CenterPopularOption>
              <S.CenterPopularOption>אנגלית</S.CenterPopularOption>
              <S.CenterPopularOption>פסיכומטרי</S.CenterPopularOption>
              <S.CenterPopularOption>תכנות</S.CenterPopularOption>
              <S.CenterPopularOption>צרפתית</S.CenterPopularOption>
            </S.CenterPopularContainer>
          </div>
          <S.CenterLeftImg src={landingPageImg} alt='noImage' />
        </S.CenterContainer>
      </S.LandingContainer>

      <S.ButtonsContainer>
        <S.LandingBtn onClick={() => { setIsLoginPopupOpen(true) }}>כניסה לחשבון שלי</S.LandingBtn>
        <S.LandingBtn onClick={() => { history.push(REGISTER_ROUTE) }}>צור פרופיל מורה פרטי</S.LandingBtn>
      </S.ButtonsContainer >
      <LandingLoginPopup isLoginPopupOpen={isLoginPopupOpen} setIsLoginPopupOpen={setIsLoginPopupOpen} />
    </>
  );
};

export default LandingCenter;



