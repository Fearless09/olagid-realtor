"use client";

import { useDispatch, useSelector, Provider } from "react-redux";
import { store, type AppDispatch, type RootState } from "./store";
import { PropsWithChildren } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
