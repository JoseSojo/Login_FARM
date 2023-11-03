export interface TaskCompleted {
    id:string,
    title:string,
    active:boolean,
    user_id:string,
    date:string
}

export type TaskList = TaskCompleted[]
