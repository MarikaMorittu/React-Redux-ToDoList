import { UserAction } from "./usersAction"
import { UserState, UserType } from "./usersTypes"



export const initialState = {
    users:[
         {
           email: "marika@gmail.com",
           password: "ciaoMarika@!12",
          },
          {
            email: "elisa@gmail.com",
            password: "ciaociao@!2",
          }
    ]
}

    export const userReducer = (state= initialState, action: UserAction): UserState =>{
        switch(action.type) {
            case 'SET_USER':
                return{
                    ...state,
                    users: [...state.users, action.payload]

                }
            default: return {...state}
        }
    }