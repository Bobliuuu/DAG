import Web3 from "web3";
import Safe, {
  SafeFactory,
  SafeAccountConfig,
  ContractNetworksConfig,
} from "@safe-global/protocol-kit";
import { Web3Adapter } from "@safe-global/protocol-kit";

export const createSafe = async (signerAddress: string, safeOwners: string[]) => {
  const provider = new Web3.providers.HttpProvider("http://localhost:8545");
  const web3 = new Web3(provider);
  const safeAccountConfig: SafeAccountConfig = {
    owners: safeOwners,
    threshold: 2,
  }

  const ethAdapter = new Web3Adapter({
    web3,
    signerAddress: signerAddress,
  });

  const chainId = await ethAdapter.getChainId();
  const contractNetworks: ContractNetworksConfig = {
    [chainId]: {
      safeMasterCopyAddress: "<MASTER_COPY_ADDRESS>",
      safeProxyFactoryAddress: "<PROXY_FACTORY_ADDRESS>",
      multiSendAddress: "<MULTI_SEND_ADDRESS>",
      multiSendCallOnlyAddress: "<MULTI_SEND_CALL_ONLY_ADDRESS>",
      fallbackHandlerAddress: "<FALLBACK_HANDLER_ADDRESS>",
      signMessageLibAddress: "<SIGN_MESSAGE_LIB_ADDRESS>",
      createCallAddress: "<CREATE_CALL_ADDRESS>",
      simulateTxAccessorAddress: "<SIMULATE_TX_ACCESSOR_ADDRESS>",
      safeMasterCopyAbi: "<MASTER_COPY_ABI>", // Optional. Only needed with web3.js
      safeProxyFactoryAbi: "<PROXY_FACTORY_ABI>", // Optional. Only needed with web3.js
      multiSendAbi: "<MULTI_SEND_ABI>", // Optional. Only needed with web3.js
      multiSendCallOnlyAbi: "<MULTI_SEND_CALL_ONLY_ABI>", // Optional. Only needed with web3.js
      fallbackHandlerAbi: "<FALLBACK_HANDLER_ABI>", // Optional. Only needed with web3.js
      signMessageLibAbi: "<SIGN_MESSAGE_LIB_ABI>", // Optional. Only needed with web3.js
      createCallAbi: "<CREATE_CALL_ABI>", // Optional. Only needed with web3.js
      simulateTxAccessorAbi: "<SIMULATE_TX_ACCESSOR_ABI>", // Optional. Only needed with web3.js
    },
  };

  const safeFactory = await SafeFactory.create({ ethAdapter, contractNetworks })
  const safeSdk = await safeFactory.deploySafe({ safeAccountConfig })

  return safeSdk;
};