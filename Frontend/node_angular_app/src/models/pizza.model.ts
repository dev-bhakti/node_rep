export interface Pizza {
  id: any;
  pizza_name?: string;
  pizza_type?: string;
  pizza_price?: number;
  pizza_id?:number;
  image?:string;
}


export interface CartItem {
  id: number;             // pizza_id
  name?: string;          // optional, if you return it
  price: number;          // unit price
  quantity: number;
  total_price: number;
  cart_id:number;
}

export interface AddToCartResponse {
  success: boolean;
  message: string;
  cart: CartItem[];
}
