export interface Users {
    // readonly id: string
    github: string
    name: string
    mail: string
}

export type UserId = string

export interface UserWithId extends Users { 
    id: UserId
}