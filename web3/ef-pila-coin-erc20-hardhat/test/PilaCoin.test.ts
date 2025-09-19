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

    it('Should have correct name', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const name = await pilaCoin.name();

        expect(name).to.equal('PilaCoin');
    });

    it('Should have correct symbol', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const symbol = await pilaCoin.symbol();

        expect(symbol).to.equal('PLC');
    });

    it('Should have correct decimals', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const decimals = await pilaCoin.decimals();

        expect(decimals).to.equal(18);
    });

    it('Should have correct totalSupply', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const totalSupply = await pilaCoin.totalSupply();

        expect(totalSupply).to.equal(1000n * 10n ** 18n);
    });
});
