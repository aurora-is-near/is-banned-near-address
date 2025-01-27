import { ADDRESSES } from './addresses';

export const isBannedNearAddress = (address: string): boolean =>
  ADDRESSES.has(address);
