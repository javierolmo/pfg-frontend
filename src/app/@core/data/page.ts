export interface Page <T> {
    content: T[];
    pageable: {
        sort: {
            sorted: boolean,
            unsorted: boolean,
            empty: boolean,
        },
        offset: number,
        pageNumber: number,
        pageSize: number,
        paged: boolean,
        unpaged: boolean,
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean,
    };
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}
