import { useMemo } from 'react';
import useSWR from 'swr';

import { endpoints, fetcher } from 'api/interceptors';
import { ILang } from 'interfaces/lang';

export function useGetLangs() {
    const URL = endpoints.lang.root;

    const { data } = useSWR<ILang[]>([URL, {}, 'get'], fetcher, {
        revalidateOnFocus: false,
    });

    const memoizedValue = useMemo(
        () => ({
            langs: data || [],
        }),
        [data]
    );

    return memoizedValue;
}
