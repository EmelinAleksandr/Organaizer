export class Stand {
    constructor(
        public caption: string = '',
        public tasks: Task[] = [],
        public is_edit: boolean = false
    ) { }

    public add(value: Task): void {
        this.tasks.unshift(value)
    }

    public delete(ind: number): void {
        this.tasks.splice(ind, 1)
    }

    public edit(value: Task, ind: number): void {
        this.tasks[ind] = value
    }

    public reset() {
        this.tasks = []
    }
}

export class Task {
    constructor(
        public num?: number,
        public caption: string = '',
        public is_execution: boolean = false,
        public date_create: Date = new Date(),
        public date_execution?: Date,
        public date_fact_execution?: Date,
        public date_edit?: Date,
        public description: string = '',
        public level_Exucut: LevelExecut = LevelExecut.BLUE
    ) { }
}

export enum LevelExecut {
    'BLUE' = -1,
    'GREEN' = 0,
    'YELLOW' = 1,
    'RED' = 2
}