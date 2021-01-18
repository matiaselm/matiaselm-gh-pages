import firebase from './firebase';

const getProjects = async () => {
    let collection = []
    try {
        firebase.firestore().collection('projects').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data())
                    collection.push(doc.data())
                })
                console.log('Collection: ' + collection);
                console.log('Collection object: ' + collection[1].title)
                return collection
            })
    } catch (err) {
        console.log(err)
        return []
    }
}

export { getProjects }