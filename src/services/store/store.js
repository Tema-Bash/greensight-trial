import { configureStore } from "@reduxjs/toolkit";
import { vacanciesSlice } from "../../services/slices/vacancies";

export const store = configureStore({
  reducer: {
    vacancies: vacanciesSlice.reducer,
  },
});
