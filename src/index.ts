import { BYBIT_ADDRESSES } from './bybit-addresses';
import { OLD_NEAR_ADDRESSES } from './old-near-addresses';

/**
 * Helper function that checks presence of address in list of banned addresses.
 * See bin scripts for methodology.
 */
export const isBannedNearAddress = (address: string): boolean =>
  OLD_NEAR_ADDRESSES.has(address) || BYBIT_ADDRESSES.has(address);
