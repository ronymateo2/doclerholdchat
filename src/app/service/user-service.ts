import { User } from "../model/user";

export const userServiceImp = (current: User): UserService => {
    return ({
        async me(): Promise<User> {
            return Promise.resolve(current)
        }
    })
}

export interface UserService {
    me(): Promise<User>
}
