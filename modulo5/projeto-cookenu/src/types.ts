export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IUserDB {
   id: string
   email: string
   password: string
   name: string
   role: USER_ROLES
}