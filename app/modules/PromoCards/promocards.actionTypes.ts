import { PromoCardType } from "./promocards.types";

export enum PromoCardTypes {
	ADD_PROMO_CARD = 'ADD_PROMO_CARD',
	PICK_PROMO_CARD = 'PICK_PROMO_CARD',
	UNPICK_PROMO_CARD = 'UNPICK_PROMO_CARD'
}
interface AddPromoCardAction {
	type: PromoCardTypes.ADD_PROMO_CARD;
	payload: PromoCardType;
}
interface PickPromoCardAction {
	type: PromoCardTypes.PICK_PROMO_CARD;
	payload: PromoCardType['id'];
}
interface UnpickPromoCardAction {
	type: PromoCardTypes.UNPICK_PROMO_CARD;
}
export type PromoCardActions = AddPromoCardAction | PickPromoCardAction | UnpickPromoCardAction;