import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Property } from "@/data/properties";

interface inspectionState {
  isInspectionOpen: boolean;
  selectedProperty: Property | null;
}
const initialState: inspectionState = {
  isInspectionOpen: false,
  selectedProperty: null,
};

export const inspectionSlice = createSlice({
  name: "inspection",
   initialState,
  reducers: {
    openInspection: (state, action: PayloadAction<{ property?: Property }>) => {
      state.isInspectionOpen = true;
      state.selectedProperty = action.payload.property || null;
    },
    closeInspection: (state) => {
      state.isInspectionOpen = false;
      state.selectedProperty = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeInspection, openInspection } = inspectionSlice.actions;

export default inspectionSlice.reducer;
