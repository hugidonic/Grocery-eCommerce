import { Dispatch } from 'redux';
import { PromoCardActions, PromoCardTypes } from './promocards.actionTypes';
import { PromoCardType } from './promocards.types';

export const pickPromoCard = (promoCardId: PromoCardType['id']) => (dispatch: Dispatch<PromoCardActions>) => {
	dispatch({
		type: PromoCardTypes.PICK_PROMO_CARD,
		payload: promoCardId
	});
};

export const unpickPromoCard = () => (dispatch: Dispatch<PromoCardActions>) => {
	dispatch({
		type: PromoCardTypes.UNPICK_PROMO_CARD,
	});
};

export const addPromoCard = (promoCard: PromoCardType) => (
	dispatch: Dispatch<PromoCardActions>
) => {
	dispatch({ type: PromoCardTypes.ADD_PROMO_CARD, payload: promoCard });
};
