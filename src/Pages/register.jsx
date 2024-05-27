const firebase = require('firebase-admin');
const functions = require('firebase-functions');

// Initialize Firebase Admin SDK
firebase.initializeApp();

const firestore = firebase.firestore();

// Function to check for duplicate email or username
async function checkDuplicateEmailAndUsername(email, username) {
    const emailSnapshot = await firestore.collection('users').where('email', '==', email).get();
    const usernameSnapshot = await firestore.collection('users').where('username', '==', username).get();
    return !emailSnapshot.empty || !usernameSnapshot.empty;
}

// Function to generate unique reference ID
async function generateUniqueReferenceId() {
    const usersSnapshot = await firestore.collection('users').orderBy('referenceId', 'desc').limit(1).get();
    let maxReferenceId = 0;
    usersSnapshot.forEach(doc => {
        maxReferenceId = doc.data().referenceId;
    });
    return maxReferenceId + 1;
}

// Cloud Function to handle user registration
exports.registerUser = functions.https.onCall(async (data, context) => {
    const { name, email, password, username, isGoogleAuth } = data;
    
    if (isGoogleAuth) {
        // Check if the email address is already registered
        const emailSnapshot = await firestore.collection('users').where('email', '==', email).get();
        if (!emailSnapshot.empty) {
            return { error: 'The email address already belongs to another account.' };
        }
    
        // For Google authentication, user data (name, email) would already be available
        // Generate unique reference ID
        const referenceId = await generateUniqueReferenceId(); // Fill this with your implementation for generating a unique reference ID
        
        try {
            // Create user in Firebase Authentication
            const userRecord = await firebase.auth().createUser({
                email: email,
                
            });
    
            // Set user data in Firestore
            await firestore.collection('users').doc(userRecord.uid).set({
                email: email, // Fill this with the user's email obtained from Google authentication
                isActive: true,
                referenceId: referenceId,
                name: null,
                password: null,
                username: null
            });
    
            return { success: true, message: 'User registered successfully!' };
        } catch (error) {
            return { error: error.message };
        }
    }
    
    
    else {
        // Perform manual registration
        // Check for duplicate email or username
        const isDuplicate = await checkDuplicateEmailAndUsername(email, username);
        if (isDuplicate) {
            return { error: 'Email or username already exists.' };
        }
        
        // Generate unique reference ID
        const referenceId = await generateUniqueReferenceId();
        
        // Create user in Firebase Authentication
        try {
            const userRecord = await firebase.auth().createUser({
                email: email,
                password: password,
                displayName: name,
            });

            // Add user data to Firestore
            await firestore.collection('users').doc(userRecord.uid).set({
                isActive: true,
                name: name,
                email: email,
                password: password,
                username: username,
                referenceId: referenceId
            });

            return { success: true, message: 'User registered successfully!' };
        } catch (error) {
            return { error: error.message };
        }
    }
});
