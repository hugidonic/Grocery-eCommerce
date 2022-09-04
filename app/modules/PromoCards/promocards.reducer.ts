import { UsersPromoCards } from '../../utils/data';
import { PromoCardActions, PromoCardTypes } from './promocards.actionTypes';
import { PromoCardsStateType } from './promocards.types';

const initialState: PromoCardsStateType = {
	isLoading: true,
	pickedPromoCardId: null,
	promoCardItems: UsersPromoCards
};

export default (state = initialState, action: PromoCardActions) => {
	switch (action.type) {
    case PromoCardTypes.PICK_PROMO_CARD: 
      return {
        ...state,
        pickedPromoCardId: action.payload,
      }
    case PromoCardTypes.UNPICK_PROMO_CARD:
      return {
        ...state,
        pickedPromoCardId: null
      }
    
    case PromoCardTypes.ADD_PROMO_CARD:
      return {
        ...state,
        promoCardItems: [...state.promoCardItems, action.payload],
      }
    
		default:
			return state;
	}
};
