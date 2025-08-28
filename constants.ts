
import type { Instrument, Position, SidebarIcon } from './types';

export const initialInstruments: Instrument[] = [
  { id: 'XAUUSD', name: 'XAUUSD', price: 3373.35, change: 0.14 },
  { id: 'XAGUSD', name: 'XAGUSD', price: 37.398, change: 1.03 },
  { id: 'BTCUSD', name: 'BTCUSD', price: 115027.4, change: 0.72 },
  { id: 'ETHUSD', name: 'ETHUSD', price: 3717.36, change: 6.31 },
  { id: 'LTCUSD', name: 'LTCUSD', price: 119.93, change: 8.64 },
  { id: 'AUDUSD', name: 'AUDUSD', price: 0.64661, change: -0.04 },
  { id: 'EURUSD', name: 'EURUSD', price: 1.15673, change: -0.18 },
  { id: 'GBPUSD', name: 'GBPUSD', price: 1.2721, change: -0.21 },
  { id: 'USOIL', name: 'USOIL', price: 80.55, change: 1.50 },
  { id: 'TSLA', name: 'TSLA', price: 183.01, change: -2.45 },
];

export const mockPositions: Position[] = [
    {
        transaction: '#184607',
        direction: 'Buy',
        lots: 1,
        lowerPrice: 212.241222,
        currentPrice: 211.63,
        setProfit: 0,
        setLoss: 0,
        fee: 0.01,
        margin: 212.241222,
        profit: -61.1222,
        openTime: '2025-08-04 15:06:32',
    },
    {
        transaction: '#184608',
        direction: 'Sell',
        lots: 0.5,
        lowerPrice: 1.15690,
        currentPrice: 1.15673,
        setProfit: 1.15000,
        setLoss: 1.16000,
        fee: 0.005,
        margin: 100.00,
        profit: 8.50,
        openTime: '2025-08-04 14:32:11',
    }
];

export const sidebarIcons: SidebarIcon[] = [
    { id: 'chart', iconClass: 'fas fa-chart-line' },
    { id: 'exchange', iconClass: 'fas fa-exchange-alt' },
    { id: 'history', iconClass: 'fas fa-history' },
    { id: 'envelope', iconClass: 'fas fa-envelope' },
    { id: 'bitcoin', iconClass: 'fab fa-bitcoin' },
    { id: 'calendar', iconClass: 'fas fa-calendar-alt' },
    { id: 'gift', iconClass: 'fas fa-gift' },
    { id: 'trash', iconClass: 'fas fa-trash' },
];
