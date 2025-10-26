export interface EconomicIndicator {
  id: string;
  indicator: string;
  value: number;
  date: Date;
  source: string;
  country: string;
}

export interface EconomicTrend {
  date: string;
  value: number;
}
