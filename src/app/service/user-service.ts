import { User, currentUser } from "../model/user";

export const userServiceImp: UserService = {
    async me(): Promise<User> {
        return Promise.resolve(currentUser) 
    }
}

export interface UserService {
    me(): Promise<User>
}
