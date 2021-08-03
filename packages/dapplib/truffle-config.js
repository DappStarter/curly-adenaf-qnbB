require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stock rate noble slow great light army gesture'; 
let testAccounts = [
"0x3709e4da0371dc05c98dde5258f549cb60a6e824ba34b678716dbc8089e95187",
"0xc83688e7b873972baf81acfbb4694f64c78536ceb2c2bf61d5bf0826288ff499",
"0x0b67066db249d85a9577b593c4372facfaf44d41f31a526c06eba2852629ea80",
"0x50cbe7c19509a89d404453eed588893805aa5e4d959c5f9171494aa2d7932b49",
"0xb5d5b883906641a711d35b45d8fd3f8b0ea8e133fe27f9deeab87c5cd40d18dd",
"0x21aeac53288eeed0a6960596029b523aa8a2f7068c1081a00a6c16c725438075",
"0x704b691487edd179fe325cb73540e7c0b5385cc4526a122b051b973987be0624",
"0xbf3847259b7dbde010347ad375f4846e445de55486e786f0b09f29b4f6ad8cf4",
"0xce2c86903fbb484cbdb921f28213be5ff45d896d5c32c652fa4bcbb622e45931",
"0xcc656948224b988ac6c84fd4c9fca9e0ce81a796f2454d9bfe2d13652da01454"
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
            version: '^0.8.0'
        }
    }
};

