import { app } from './server'
import { routes } from './routes'
import { getEnvironmentVariables } from './config/env'

const { PORT } = getEnvironmentVariables()

app.use(routes.routes())
app.use(routes.allowedMethods())

app.listen(PORT, () => {
  console.log('server running on port: ', PORT)
})
