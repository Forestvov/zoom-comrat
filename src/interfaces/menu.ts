import { IPageable } from './pageable';

export interface IItemsResponse {
    content: IItem[];
    pageable: IPageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

export interface IItem {
    id: number;
    price: number;
    size: number;
    menuItemId: number;
    menuCategoryId: number;
    image: string;
    menItemSizeId: null;
    menuItemSizeValue: string;
    menuItemLanguageValue: string;
    descriptions: string;
    languageId: string;
    languageValue: string;
}

export interface ICategoryResponse {
    content: ICategory[];
    pageable: IPageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

export interface ICategory {
    id: number;
    menuCategoryId: number;
    value: string;
    languageId: number;
    languageName: string;
}
