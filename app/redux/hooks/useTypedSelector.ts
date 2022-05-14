import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootStateType, AppDispatchType } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
