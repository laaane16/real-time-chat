import { RootState } from "../../store";


export const selectIsAuth = (state:RootState) => state.auth.isAuth
export const selectName = (state: RootState) => state.auth.name
export const selectStatus = (state: RootState) => state.auth.status