import { CHANGE_SEARCH_FIELD } from "./constants";

/**
 *
 * @param {string} text
 * @returns
 */
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
