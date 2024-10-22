import useSWR from 'swr';

import { ICategoryResponse, IItemsResponse } from 'interfaces/menu';
import { endpoints, fetcher } from 'api/interceptors';

export function useGetCategoriesAndItems(langId: number | null, categoryId?: number | null) {
    const categoriesURL = endpoints.menu.categories;
    const itemsURL = endpoints.menu.items;

    const {
        data: categoriesData,
        isLoading: categoriesLoading,
        mutate: categoryMutate,
    } = useSWR<ICategoryResponse>(
        langId
            ? [
                  categoriesURL,
                  { page: '0', size: '100', sortDir: 'ASC', criteria: [{ key: 'languageId', value: langId }] },
                  'put',
              ]
            : null,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    const categories = categoriesData?.content || [];
    const currentCategoryId = categories[0]?.menuCategoryId || 0;

    const currentCategoryName = categoryId
        ? categories?.find((category) => category.menuCategoryId === categoryId)?.value || ''
        : categories[0]?.value;

    const {
        data: itemsData,
        isLoading: itemsLoading,
        mutate: itemsMutate,
    } = useSWR<IItemsResponse>(
        currentCategoryId && langId
            ? [
                  itemsURL,
                  {
                      page: '0',
                      size: '100',
                      sortDir: 'ASC',
                      criteria: [
                          { key: 'menuCategoryId', value: categoryId ?? currentCategoryId },
                          {
                              key: 'languageId',
                              value: langId,
                          },
                      ],
                  },
                  'put',
              ]
            : null,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    const items = itemsData?.content || [];

    const update = () => {
        categoryMutate();
        itemsMutate();
    };

    return {
        categories,
        update,
        currentCategoryId: categoryId ?? currentCategoryId,
        categoriesLoading,
        currentCategoryName,
        items,
        itemsLoading,
    };
}
