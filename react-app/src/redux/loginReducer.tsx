import { usersArray } from "../App";
import { Login_Button } from "./loginTypes";

const intialState = {
  user: false,
};

export const loginReducer = (state = intialState, action: Login_Button) => {
  switch (action.type) {
    case "SUBMIT_LOGIN": {
      return {
        ...state,
        user: true,
      };
    }
  }
};
