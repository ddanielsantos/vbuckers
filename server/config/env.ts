import dotenv from 'dotenv'

dotenv.config()

function getEnvironmentVariables() {
  const { PORT, FORTNITE_API_KEY } = process.env

  if (!PORT || !FORTNITE_API_KEY) {
    throw new Error('Some env variables was not set')
  }

  return {
    PORT,
    FORTNITE_API_KEY
  }
}

export { getEnvironmentVariables }
