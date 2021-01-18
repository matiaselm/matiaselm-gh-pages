import firebase from './firebase';

const getProjects = async () => {
    let collection = [{}]

    try {
        firebase.firestore().collection('projects').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, ' => ', doc.data())
                    collection.push(doc)
                })
                // console.log('Collection: ' + collection);
                return collection
            })
    } catch (err) {
        console.log(err)
    }
}


export { getProjects }