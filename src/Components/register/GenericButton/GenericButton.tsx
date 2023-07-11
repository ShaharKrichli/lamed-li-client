import * as S from './GenericButton.style'
import { IGenericButton } from './IGenericButton.interface'

export function GenericButton({title, action, disabled}:IGenericButton) {
    return (
        <S.Button variant="contained" onClick={action} disabled={disabled}>
            {title}
        </S.Button>
    )
}