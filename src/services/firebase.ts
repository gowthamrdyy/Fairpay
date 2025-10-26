import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  Timestamp,
  query,
  where,
  limit,
  orderBy,
  QueryConstraint
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase only if config is valid
let app: any = null;
let db: any = null;
let auth: any = null;

try {
  // Check if Firebase config is properly set
  if (firebaseConfig.apiKey && firebaseConfig.projectId && 
      !firebaseConfig.apiKey.includes('your-') && 
      firebaseConfig.apiKey.length > 20) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    console.log('Firebase initialized successfully');
  } else {
    console.warn('Firebase config not set - running in offline mode');
  }
} catch (error) {
  console.error('Firebase initialization failed - running in offline mode:', error);
}

export { db, auth };

export const firestoreService = {
  async addDocument(collectionName: string, data: any) {
    if (!db) {
      console.warn('Firebase not initialized - document not saved');
      return 'offline-' + Date.now();
    }
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: Timestamp.now(),
      });
      console.log('Document added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  },

  async getDocuments(collectionName: string) {
    if (!db) {
      console.warn('Firebase not initialized - returning empty array');
      return [];
    }
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const documents: any[] = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      return documents;
    } catch (error) {
      console.error('Error getting documents:', error);
      throw error;
    }
  },

  async queryDocuments(
    collectionName: string,
    constraints: QueryConstraint[]
  ) {
    if (!db) {
      console.warn('Firebase not initialized - returning empty array');
      return [];
    }
    try {
      const q = query(collection(db, collectionName), ...constraints);
      const querySnapshot = await getDocs(q);
      const documents: any[] = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      return documents;
    } catch (error) {
      console.error('Error querying documents:', error);
      throw error;
    }
  },

  async updateDocument(collectionName: string, docId: string, data: any) {
    if (!db) {
      console.warn('Firebase not initialized - document not updated');
      return;
    }
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, {
        ...data,
        updatedAt: Timestamp.now(),
      });
      console.log('Document updated:', docId);
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  },

  async deleteDocument(collectionName: string, docId: string) {
    if (!db) {
      console.warn('Firebase not initialized - document not deleted');
      return;
    }
    try {
      await deleteDoc(doc(db, collectionName, docId));
      console.log('Document deleted:', docId);
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  },
};

export { Timestamp, query, where, limit, orderBy };
