
export interface Instrument {
  id: string;
  name: string;
  price: number;
  change: number;
}

export interface Position {
  transaction: string;
  direction: 'Buy' | 'Sell';
  lots: number;
  lowerPrice: number;
  currentPrice: number;
  setProfit: number;
  setLoss: number;
  fee: number;
  margin: number;
  profit: number;
  openTime: string;
}

export interface SidebarIcon {
    id: string;
    iconClass: string;
}
