import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send('Hello from Firebase!\n\n');
});

export const countLikes = functions.firestore.document('likes/{likeId}')
    .onWrite((change, context) => {
        const document = change.after.exists ? change.after.data() : null;
        const oldDocument = change.before.data();
        if (document !== null) {//User liked post
            const docRef = admin.firestore().collection("posts").doc(document.likePostId);
            docRef.get().then(snap => {
                docRef.update({ postNumOfLikes: snap.data().postNumOfLikes + 1 })
                    .catch(() => {
                        docRef.set({ postNumOfLikes: 1 })
                            .catch(err => console.warn(err));
                    });
            }).catch(err => console.warn(err));
        } else {//User unliked post
            const docRef = admin.firestore().collection("posts").doc(oldDocument.likePostId);
            docRef.get().then(snap => {
                docRef.update({ postNumOfLikes: snap.data().postNumOfLikes - 1 })
                    .catch(() => {
                        docRef.set({ postNumOfLikes: 0 }).catch(err => console.warn(err));
                    });
            }).catch(err => console.warn(err));
        }
    });

