import { RootStateType } from "../../redux/store";

export const getPromoCardItems = (state: RootStateType) => state.PromoCardStore.promoCardItems
export const getPickedPromoCardId = (state: RootStateType) => state.PromoCardStore.pickedPromoCardId
export const getPickedPromoCard = (state: RootStateType) => state.PromoCardStore.promoCardItems.find(card => card.id === state.PromoCardStore.pickedPromoCardId)