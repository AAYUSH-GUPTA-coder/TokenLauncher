import { createClient } from "wagmi";
import { getDefaultClient } from 'connectkit';

const scroll = {
  id: 997,
  name: "scrollAlpha",
  network: "scrollAlpha",
  nativeCurrency: {
    decimals: 18,
    name: "scrollAlpha",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://alpha-rpc.scroll.io/l2"] },
  },
  testnet: true,
};

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'FitQuest',
    chains: [scroll],
  })
);