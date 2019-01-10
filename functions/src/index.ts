import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

const firestore = admin.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

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
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
        } else {//User unliked post
            const docRef = admin.firestore().collection("posts").doc(oldDocument.likePostId);
            docRef.get().then(snap => {
                docRef.update({ postNumOfLikes: snap.data().postNumOfLikes - 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
        }
    });

export const countSubs = functions.firestore.document('subs/{subId}')
    .onWrite((change, context) => {
        const document = change.after.exists ? change.after.data() : null;
        const oldDocument = change.before.data();
        if (document !== null) {//User subbed room
            const docRef = admin.firestore().collection("rooms").doc(document.subsRoomId);
            docRef.get().then(snap => {
                docRef.update({ roomNumOfSubs: snap.data().roomNumOfSubs + 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
        } else {//User unsubbed room
            const docRef = admin.firestore().collection("rooms").doc(oldDocument.subsRoomId);
            docRef.get().then(snap => {
                docRef.update({ roomNumOfSubs: snap.data().roomNumOfSubs - 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
        }
    });

export const countEventLike = functions.firestore.document('eventlikes/{eventLikeId}')
    .onWrite((change, context) => {
        const document = change.after.exists ? change.after.data() : null;
        const oldDocument = change.before.data();
        if (document !== null) {//User likes event
            const docRef = admin.firestore().collection("events").doc(document.eventId);
            docRef.get().then(snap => {
                docRef.update({ eventNumOfLikes: snap.data().eventNumOfLikes + 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
        } else {//User unlikes event
            const docRef = admin.firestore().collection("events").doc(oldDocument.eventId);
            docRef.get().then(snap => {
                docRef.update({ eventNumOfLikes: snap.data().eventNumOfLikes - 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
        }
    });

export const countFollowing = functions.firestore.document('followings/{followId}')
    .onWrite((change, context) => {
        const document = change.after.exists ? change.after.data() : null;
        const oldDocument = change.before.data();
        if (document !== null) {//User follow
            const followerRef = admin.firestore().collection("users").doc(document.followerId);
            followerRef.get().then(snap => {
                followerRef.update({ numOfFollow: snap.data().numOfFollow + 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
            const followeeRef = admin.firestore().collection("users").doc(document.followeeId);
            followeeRef.get().then(snap => {
                followeeRef.update({ numOfFollower: snap.data().numOfFollower + 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
        } else {//User unfollows
            const followerRef = admin.firestore().collection("users").doc(oldDocument.followerId);
            followerRef.get().then(snap => {
                followerRef.update({ numOfFollow: snap.data().numOfFollow - 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
            const followeeRef = admin.firestore().collection("users").doc(oldDocument.followeeId);
            followeeRef.get().then(snap => {
                followeeRef.update({ numOfFollower: snap.data().numOfFollower - 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
        }
    });

export const onPost = functions.firestore.document('posts/{postId}')
    .onWrite((change, context) => {
        const document = change.after.exists ? change.after.data() : null;
        const oldDocument = change.before.exists ? change.before.data() : null;
        if (document !== null && oldDocument === null) {//User post
            const userRef = admin.firestore().collection("users").doc(document.postUId);
            userRef.get().then(snap => {
                userRef.update({ numOfPost: snap.data().numOfPost + 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
            const roomRef = admin.firestore().collection("rooms").doc(document.postRoomId);
            roomRef.get().then(snap => {
                roomRef.update({ roomNumOfPost: snap.data().roomNumOfPost + 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));

            if (document.postReplyId) {//User post reply
                const replyRef = admin.firestore().collection("posts").doc(document.postReplyId);
                replyRef.get().then(snap => {
                    replyRef.update({ postNumOfReplys: snap.data().postNumOfReplys + 1 })
                        .catch(err => console.warn(err));
                }).catch(err => console.warn(err));
            }
        } else if (document !== null && oldDocument !== null) {//Use edits post

        } else {//User deletes post
            const userRef = admin.firestore().collection("users").doc(oldDocument.postUId);
            userRef.get().then(snap => {
                userRef.update({ numOfPost: snap.data().numOfPost - 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));
            const roomRef = admin.firestore().collection("rooms").doc(oldDocument.postRoomId);
            roomRef.get().then(snap => {
                roomRef.update({ roomNumOfPost: snap.data().roomNumOfPost - 1 })
                    .catch(err => console.warn(err));
            }).catch(err => console.warn(err));

            if (document.postReplyId) {//User deletes reply
                const replyRef = admin.firestore().collection("posts").doc(oldDocument.postReplyId);
                replyRef.get().then(snap => {
                    replyRef.update({ postNumOfReplys: snap.data().postNumOfReplys - 1 })
                        .catch(err => console.warn(err));
                }).catch(err => console.warn(err));
            }
        }
    });

export const checkEventStart = functions.https.onRequest((request, response) => {
    const currentDate = new Date(Date.now());
    admin.firestore().collection("events")
        .where('eventDone', '==', false)
        .where('eventAccepted', '==', true)
        .where('eventLive', '==', false)
        .where('eventStartDate', '<=', currentDate)
        .get()
        .then(snap => {
            snap.forEach(doc => {
                const roomRef = admin.firestore().collection('rooms').doc(doc.data().eventRoomId);
                roomRef.update({ roomEventId: doc.data().eventId })
                    .catch(err => console.warn(err));
                const eventRef = admin.firestore().collection('events').doc(doc.data().eventId);
                eventRef.update({ eventLive: true })
                    .catch(err => console.warn(err));
                console.warn(currentDate);
                console.warn("updated:event: " + doc.data().eventId + ", room: " + doc.data().eventRoomId);
            });
            response.status(200).send("Checking events ended successful");
        })
        .catch(err => {
            console.warn(err);
            response.status(200).send("Checking events ended failure");
        });
});

export const checkEventEnd = functions.https.onRequest((request, response) => {
    const currentDate = new Date(Date.now());
    admin.firestore().collection("events")
        .where('eventDone', '==', false)
        .where('eventAccepted', '==', true)
        .where('eventLive', '==', true)
        .where('eventEndDate', '<=', currentDate)
        .get()
        .then(snap => {
            snap.forEach(doc => {
                const roomRef = admin.firestore().collection('rooms').doc(doc.data().eventRoomId);
                roomRef.update({ roomEventId: '' })
                    .catch(err => console.warn(err));
                const eventRef = admin.firestore().collection('events').doc(doc.data().eventId);
                eventRef.update({
                    eventDone: true,
                    eventLive: false
                })
                    .catch(err => console.warn(err));
                console.warn(currentDate);
                console.warn("updated:event: " + doc.data().eventId + ", room: " + doc.data().eventRoomId);
                response.status(200).send("Checking events ended successful");
            });
        })
        .catch(err => {
            console.warn(err);
            response.status(200).send("Checking events ended failure");
        });
});