// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const PilaCoinModule = buildModule('PilaCoinModule', m => {
    const pilaCoin = m.contract('PilaCoin');

    return { pilaCoin };
});

export default PilaCoinModule;
