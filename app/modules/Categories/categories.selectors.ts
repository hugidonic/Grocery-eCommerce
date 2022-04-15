import { RootStateType } from "../../redux/store";


export const categories = (state: RootStateType) => state.CategoriesStore.categories
export const isLoading = (state: RootStateType) => state.CategoriesStore.isLoading