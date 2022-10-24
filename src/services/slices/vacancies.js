import { createSlice } from "@reduxjs/toolkit";
import { getVacancies } from "../api";

const initialState = {
  vacanciesRequested: false,
  vacanciesFailed: false,
};

export const vacanciesSlice = createSlice({
  name: "Vacancies",
  initialState,
  reducers: {
    vacanciesRequest(state) {
      state.vacanciesRequested = true;
      state.vacanciesFailed = false;
    },
    vacanciesSuccess(state, action) {
      state.vacanciesArr = action.payload;
      state.vacanciesRequested = false;
      state.vacanciesFailed = false;
    },
    vacanciesFailed(state) {
      state.vacanciesRequested = false;
      state.vacanciesFailed = true;
    },
  },
});

export const { vacanciesSuccess, vacanciesRequest, vacanciesFailed } =
  vacanciesSlice.actions;

export const getVacanciesArr = () => {
  return (dispatch) => {
    dispatch(vacanciesRequest());

    getVacancies()
      .then((res) => {
        if (res) {
          dispatch(vacanciesSuccess(res));
        } else {
          dispatch(vacanciesFailed());
        }
      })
      .catch(() => {
        dispatch(vacanciesFailed());
      });
  };
};
