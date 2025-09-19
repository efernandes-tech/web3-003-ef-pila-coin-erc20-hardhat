import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { expect } from 'chai';
import hre from 'hardhat';

describe('PilaCoin Tests', function () {
    async function deployFixture() {
        const [owner, otherAccount] = await hre.ethers.getSigners();

        const PilaCoin = await hre.ethers.getContractFactory('PilaCoin');
        const pilaCoin = await PilaCoin.deploy();

        return { pilaCoin, owner, otherAccount };
    }

    it('Should test', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        expect(true).to.equal(true);
    });
});
