import { auth } from './firebase';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

export const authService = {
  async authenticateAnonymously(): Promise<string> {
    if (!auth) {
      console.warn('Firebase auth not initialized - running in offline mode');
      return 'offline-user-' + Date.now();
    }
    try {
      const result = await signInAnonymously(auth);
      console.log('Anonymous user authenticated:', result.user.uid);
      return result.user.uid;
    } catch (error) {
      console.error('Error authenticating anonymously:', error);
      throw error;
    }
  },

  async getCurrentUser(): Promise<User | null> {
    if (!auth) {
      console.warn('Firebase auth not initialized - returning null user');
      return null;
    }
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });
  },

  onAuthStateChange(callback: (user: User | null) => void) {
    if (!auth) {
      console.warn('Firebase auth not initialized - no auth state changes');
      // Return a dummy unsubscribe function
      callback(null);
      return () => {};
    }
    return onAuthStateChanged(auth, callback);
  },
};
