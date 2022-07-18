import { Login_Button } from "./loginTypes";

export const submitUser = (userChecked: string): Login_Button => ({
  type: "SUBMIT_LOGIN",
  payload: userChecked,
});
