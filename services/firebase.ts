import * as admin from 'firebase-admin'

let serviceAccount = require('./firebase-credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export default admin.firestore()
