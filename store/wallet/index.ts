import { NetworkId, Network as NetworkName } from '@synthetixio/contracts-interface';
import { GasSpeed } from 'queries/network/useEthGasPriceQuery';
import { atom, selector } from 'recoil';

import { truncateAddress } from 'utils/formatters/string';

import { getWalletKey } from '../utils';

export type Network = {
	id: NetworkId;
	name: NetworkName;
	useOvm?: boolean;
};

export const networkState = atom<Network | null>({
	key: getWalletKey('network'),
	default: null,
});

export const isMainnetNetworkState = selector<boolean>({
	key: 'isMainnetNetwork',
	get: ({ get }) => {
		const network = get(networkState)!;
		return network?.name === NetworkName.Mainnet;
	},
});

export const walletAddressState = atom<string | null>({
	key: getWalletKey('walletAddress'),
	default: null,
});

export const isWalletConnectedState = selector<boolean>({
	key: getWalletKey('isWalletConnected'),
	get: ({ get }) => get(walletAddressState) != null,
});

export const truncatedWalletAddressState = selector<string | null>({
	key: getWalletKey('truncatedWalletAddress'),
	get: ({ get }) => {
		const walletAddress = get(walletAddressState);
		if (walletAddress != null) {
			return truncateAddress(walletAddress);
		}
		return walletAddress;
	},
});

export const gasSpeedState = atom<GasSpeed>({
	key: getWalletKey('gasSpeed'),
	default: 'fast',
});

export const customGasPriceState = atom<string>({
	key: getWalletKey('customGasPrice'),
	default: '',
});

export const isL2State = selector<boolean>({
	key: getWalletKey('isL2'),
	get: ({ get }) => {
		return get(networkState)?.useOvm ?? false;
	},
});
