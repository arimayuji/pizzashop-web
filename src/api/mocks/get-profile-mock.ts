import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      email: 'johndoe@example.com',
      phone: '0114242495',
      role: 'manager',
      name: 'johndoe',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
