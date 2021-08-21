export interface Gender {
    id: number,
    name: string
}

export interface getGenders {
    data: Gender[],
    loading: boolean,
    error: string
}