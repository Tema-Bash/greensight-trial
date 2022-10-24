import { URL } from "../utils/const";
import { getResponseData } from "./../utils/utils";

export function getVacancies() {
  return fetch(`${URL}`).then(getResponseData);
}
