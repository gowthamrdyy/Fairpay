import { auth } from './firebase';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

export const authService = {
  async authenticateAnonymously(): Promise<string> {
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
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });
  },

  onAuthStateChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  },
};
