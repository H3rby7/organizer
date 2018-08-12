import app from './App'
import DbService from './db.service';
import logger from './logger';

const port = process.env.PORT || 3000

DbService.initialize()
  .then(success => startExpressApp())
  .catch(e => process.exit(1));


function startExpressApp() {
  app.listen(port, (err) => {
    if (err) {
      return logger.error(err)
    }

    return logger.info(`server is listening on ${port}`)
  })
}