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

    it('Should get balance', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const balance = await pilaCoin.balanceOf(owner.address);

        expect(balance).to.equal(1000n * 10n ** 18n);
    });

    it('Should transfer', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const balanceOwnerBefore = await pilaCoin.balanceOf(owner.address);
        const balanceOtherBefore = await pilaCoin.balanceOf(
            otherAccount.address,
        );

        await pilaCoin.transfer(otherAccount.address, 1n);

        const balanceOwnerAfter = await pilaCoin.balanceOf(owner.address);
        const balanceOtherAfter = await pilaCoin.balanceOf(
            otherAccount.address,
        );

        expect(balanceOwnerBefore).to.equal(1000n * 10n ** 18n);
        expect(balanceOwnerAfter).to.equal(1000n * 10n ** 18n - 1n);

        expect(balanceOtherBefore).to.equal(0);
        expect(balanceOtherAfter).to.equal(1);
    });

    it('Should NOT transfer', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const instance = pilaCoin.connect(otherAccount);

        await expect(instance.transfer(owner.address, 1n)).to.be.revertedWith(
            'Insufficient balance',
        );
    });

    it('Should approve', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        await pilaCoin.approve(otherAccount.address, 1n);

        const value = await pilaCoin.allowance(
            owner.address,
            otherAccount.address,
        );

        expect(value).to.equal(1n);
    });

    it('Should transfer from', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const balanceOwnerBefore = await pilaCoin.balanceOf(owner.address);
        const balanceOtherBefore = await pilaCoin.balanceOf(
            otherAccount.address,
        );

        await pilaCoin.approve(otherAccount.address, 10n);

        const instance = pilaCoin.connect(otherAccount);
        await instance.transferFrom(owner.address, otherAccount.address, 5n);

        const allowance = await pilaCoin.allowance(
            owner.address,
            otherAccount.address,
        );

        const balanceOwnerAfter = await pilaCoin.balanceOf(owner.address);
        const balanceOtherAfter = await pilaCoin.balanceOf(
            otherAccount.address,
        );

        expect(balanceOwnerBefore).to.equal(1000n * 10n ** 18n);
        expect(balanceOwnerAfter).to.equal(1000n * 10n ** 18n - 5n);

        expect(balanceOtherBefore).to.equal(0);
        expect(balanceOtherAfter).to.equal(5);

        expect(allowance).to.equal(5);
    });

    it('Should NOT transfer from (balance)', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const instance = pilaCoin.connect(otherAccount);

        await expect(
            instance.transferFrom(
                otherAccount.address,
                otherAccount.address,
                1n,
            ),
        ).to.be.revertedWith('Insufficient balance');
    });

    it('Should NOT transfer from (allowance)', async function () {
        const { pilaCoin, owner, otherAccount } = await loadFixture(
            deployFixture,
        );

        const instance = pilaCoin.connect(otherAccount);

        await expect(
            instance.transferFrom(owner.address, otherAccount.address, 1n),
        ).to.be.revertedWith('Insufficient allowance');
    });
});
