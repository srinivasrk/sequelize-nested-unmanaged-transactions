const db = require('./dbConfig.js')


let createNestedTransactions = (row, transaction) => {
  return db.site.create({name : row.name}, transaction)
}

function createSites() {
  db.site.sync({force:true}).then(() => {
    db.connection.transaction().then(async (transaction) => {

      let row = {name : 'SITE-0'}
      for(var i = 0; i<= 9; i++) {
        row['name'] = 'SITE' + i
        await createNestedTransactions(row, transaction)
        row['name'] = 'SITE' + i + 'a'
        await createNestedTransactions(row, transaction)
      }
      transaction.commit()
    })
  })
}

createSites()
