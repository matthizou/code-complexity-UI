import { get } from '../common/http'

export async function getDates() {
  const dates = await get('http://localhost:8000/dates')
  return dates
}
