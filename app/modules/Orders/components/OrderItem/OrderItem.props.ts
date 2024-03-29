export interface OrderItemProps {
  /**
   * Index of the item
   */
  idx: number;
  /**
   * Code number of the order
   */
  id: string;
  /**
   * Order's date
   */
  date: string;
  /**
   * Price of the order
   */
  price: number;
}