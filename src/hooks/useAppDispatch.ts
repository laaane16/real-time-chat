import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { allActionCreators } from "../redux/allActions"

export const useAppDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
} 