export interface IUser {
    username: string;
    password: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface IPost{
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}