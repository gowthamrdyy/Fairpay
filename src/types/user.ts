export interface User {
  uid: string;
  anonymousId: string;
  email?: string;
  createdAt: Date;
  preferences: {
    notifications: boolean;
    theme: 'light' | 'dark';
  };
}
