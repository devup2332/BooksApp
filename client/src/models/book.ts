export interface Book {
    id: number,
    photoUrl: string,
    title: string,
    author: string
}

export interface GetBooks {
    data: Book[],
    loading: boolean,
    error: string
}