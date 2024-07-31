import { configureStore } from "@reduxjs/toolkit";
import ChemicalSlice from "./ChemicalSlice";

const Store = configureStore({
  reducer: {
    chemicals: ChemicalSlice,
  },
});
export default Store;
