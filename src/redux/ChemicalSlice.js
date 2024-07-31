import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chemicals: localStorage.getItem("chemicals")
    ? JSON.parse(localStorage.getItem("chemicals"))
    : [
        {
          id: 1,
          name: "Hydrochloric Acid",
          formula: "HCl",
        },
        {
          id: 2,
          name: "Sodium Chloride",
          formula: "NaCl",
        },
        {
          id: 3,
          name: "Sulfuric Acid",
          formula: "H2SO4",
        },
        {
          id: 4,
          name: "Ammonia",
          formula: "NH3",
        },
        {
          id: 5,
          name: "Ethanol",
          formula: "C2H5OH",
        },
      ],
};

const chemicalSlice = createSlice({
  name: "chemicals",
  initialState,
  reducers: {
    addChemical(state, action) {
      const Idmax = state.chemicals.reduce(
        (max, chemicals) => Math.max(max, chemicals.id),
        0
      );
      state.chemicals = [
        ...state.chemicals,
        {
          id: Idmax + 1,
          name: action.payload.name,
          formula: action.payload.formula,
        },
      ];
      localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
    },
    deleteChemical(state, action) {
      state.chemicals = state.chemicals.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
    },
  },
});

export const { addChemical, deleteChemical } = chemicalSlice.actions;

export default chemicalSlice.reducer;
