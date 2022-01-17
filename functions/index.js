const functions = require("firebase-functions");

const Algolia = require("algoliasearch");

const APP_ID = functions.config().algolia.app;
const ADMIIN_KEY = functions.config().algolia.key;

const client = Algolia(APP_ID, ADMIIN_KEY);

const index = client.initIndex("papers");

exports.addToIndex = functions.firestore
  .document("papers/{paperId}")
  .onCreate((doc) => {
    const data = doc.data();
    const objectID = doc?.id;
    return index.addObject({
      ...data,
      objectID,
    });
  });

exports.updateIndex = functions.firestore
  .document("papers/{paperId}")
  .onUpdate((doc) => {
    const data = doc.after.data();
    const objectID = doc?.after?.id;
    return index.saveObject({
      ...data,
      objectID,
    });
  });

exports.deleteFromIndex = functions.firestore
  .document("papers/{paperId}")
  .onDelete((doc) => index.deleteObject(doc.id));
