import { api } from '@/lib/axios'
export interface RegisterRestaurantInBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}
export async function registerRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaurantInBody) {
  await api.post('/restaurants', { email, managerName, phone, restaurantName })
}
