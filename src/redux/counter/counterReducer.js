import { DECREMENT, INCREMENT } from "./counterTypes";

export const initialCount = {
  count: 0,
};

export const counterReducer = (state = initialCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
