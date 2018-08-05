import app from './App'
import DbService from './db.service';

const port = process.env.PORT || 3000

DbService.initialize()
  .then(success => startExpressApp())
  .catch(e => process.exit(1));


function startExpressApp() {
  app.listen(port, (err) => {
    if (err) {
      return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
  })
}