export type PromoCardsStateType = {
	isLoading: boolean;
	promoCardItems: PromoCardType[]
	pickedPromoCardId: PromoCardType['id']
}
 
export type PromoCardType = {
	id: string;
	beginDate: string;
	endDate: string;
	price: number;
};