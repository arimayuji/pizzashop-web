import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json([
    { product: 'product 01', amount: 5 },
    { product: 'product 01', amount: 5 },
    { product: 'product 01', amount: 5 },
    { product: 'product 01', amount: 5 },
    { product: 'product 01', amount: 5 },
    { product: 'product 01', amount: 5 },
  ])
})
