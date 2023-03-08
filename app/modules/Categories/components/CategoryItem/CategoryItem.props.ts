import { CategoryType } from "../../categories.types";

export interface CategoryItemContainerProps {
	category: CategoryType;
}
export interface CategoryItemComponentProps extends CategoryItemContainerProps {
	navigateToCategory?: () => void
}