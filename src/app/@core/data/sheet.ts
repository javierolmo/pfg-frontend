export class Sheet {
    id: number;
    name: string;
    style: string;
    date: string;
    sheet: string;
    finished: boolean;
    specs: boolean;
    xml: boolean;
    pdf: boolean;
}

export interface SheetPage {
    content: Sheet[];
    pageable: {
      sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean,
      },
      offset: number,
      pageSize: number,
      pageNumber: number,
      paged: boolean,
      unpaged: boolean,
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: boolean;
    number: number;
    numberOfElements: number;
    sort: {
      sorted: boolean,
      unsorted: boolean,
      empty: boolean,
    };
    first: boolean;
    empty: boolean;
}
