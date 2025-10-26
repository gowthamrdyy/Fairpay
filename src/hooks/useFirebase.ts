import { firestoreService } from '../services/firebase';

export const useFirebase = () => {
  return {
    addDocument: firestoreService.addDocument,
    getDocuments: firestoreService.getDocuments,
    queryDocuments: firestoreService.queryDocuments,
    updateDocument: firestoreService.updateDocument,
    deleteDocument: firestoreService.deleteDocument,
  };
};
