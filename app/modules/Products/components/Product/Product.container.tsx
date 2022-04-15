import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { StyleProp, ViewStyle } from "react-native";
import { navigationRef, NavigatorScreenProps } from "../../../../navigators";
import { ProductType } from "../../products.types";
import { ProductComponent } from "./Product.component";

export interface ProductProps {
	product: ProductType;
	style?: StyleProp<ViewStyle>;
}

export const ProductContainer = (props: ProductProps) => {
	const { product } = props;

	const nav = useNavigation<NavigatorScreenProps>();
	
	const handleNavigation = () => {
		if (navigationRef.isReady()) {
			nav.navigate('productDetails', { product });
		}
	};

	return <ProductComponent handleNavigation={handleNavigation} product={product} />;
};
