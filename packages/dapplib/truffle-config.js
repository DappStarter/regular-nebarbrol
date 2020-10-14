require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth ridge proof gesture narrow orient test'; 
let testAccounts = [
"0x8f81e1aa4bc775c08eb26063d625736ee54f1d9be6cfee78d54ccb2ca6b9e1f7",
"0xf55c11fd522d36ebc78f631cc91b99380281c7d626b0e69db01a7dd2c147133c",
"0x6f6b309b0e477930d5185d6803265655da4c7ab3717bb9a70385f2dfee1e079f",
"0x196c4a29a5c4808da2e311a286d2159eb0d44459a13f989a200c79a54abb07e1",
"0x96113984a2be31d645e0c297e4269e4d901e94a8f5c58c45de5f1bfa59537897",
"0x6c66ed76f877f980187c9db7901f092e1ea12e23204e47540c3b4ebb955cf399",
"0x1309b60a8afb6b4f01591ee9d9a843620755a424caa3444b66b10169bf14cd57",
"0x09e579828330097cb56281a8f3973a722b42cb26e96438318e5b94a6193fabd8",
"0x5084e944f9bb4cb3cb0935b5c433a5ce983a564dd68d4ca871853287126d3a26",
"0x87b25fb5ef4d714c9816cf00ed5c4935c9acb7de6713f8e4b6c82625be006470"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
