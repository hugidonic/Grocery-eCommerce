export interface CheckoutProps {
	/**
	 * Ref to manage the bottom sheet
	 * @type BottomSheet
	 */
	sheetRef?: React.MutableRefObject<any>;
	/**
	 * initial position of the bottom sheet
	 * @type 0 or 1
	 * @default 0
	 */
	initialPos?: 0 | 1;
	/**
	 * total cost of the cart
	 * @type number
	 */
	totalCost?: number;
}

export type CheckoutItemProps = {
	/**
	 * Left side of the item
	 */
	title: string;
	/**
	 * Right side of the item
	 */
	subtitleComponent: React.ReactNode;
	/**
	 * if true, then item is pressable and with chevron
	 * if false, then item is not pressable and without chevron
	 */
	withChevron?: boolean;
	/**
	 * Executes a function when the item is pressed
	 */
	onPress?: () => void;
};
