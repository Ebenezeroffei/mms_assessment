interface Paginator<T> {
    pagination: {
        currentPage: number,
        prev?: string,
        next?: string,
    },
    results: T[]
}

export default Paginator