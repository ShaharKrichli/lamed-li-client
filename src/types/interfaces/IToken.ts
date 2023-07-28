export interface IAccessToken {
    accessToken: string
}

export interface ITokens extends IAccessToken {
    refreshToken: string
}