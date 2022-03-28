import axios from 'axios'
import { getEnvironmentVariables } from '../../config/env'

const TWENTY_SECONDS = 20000

const { FORTNITE_API_KEY } = getEnvironmentVariables()

export const fortniteAPI = axios.create({
  baseURL: 'https://fortnite-api.com/',
  timeout: TWENTY_SECONDS,
  headers: {
    Authorization: FORTNITE_API_KEY
  }
})
