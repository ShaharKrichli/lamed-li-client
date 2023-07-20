export interface IPrivateRoute {
    isAuth: boolean,
    isPrivate: boolean
    roles: string[]
    children: React.ReactNode
}