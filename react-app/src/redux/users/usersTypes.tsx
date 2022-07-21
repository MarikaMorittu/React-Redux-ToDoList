export type UserType = {
    name?: string,
    surname?: string,
    email: string,
    password: string
}

export type UserState = {users: UserType[]}