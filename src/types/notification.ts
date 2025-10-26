export interface NotificationPreference {
  userId: string;
  email?: string;
  enableEmailAlerts: boolean;
  alertFrequency: 'daily' | 'weekly' | 'monthly';
  watchedRoles: string[];
  watchedCompanies: string[];
  watchedLocations: string[];
  salaryThreshold?: number;
}

export interface Alert {
  id: string;
  userId: string;
  type: 'new_salary' | 'trend_change' | 'market_update';
  title: string;
  message: string;
  data: any;
  read: boolean;
  createdAt: Date;
}
