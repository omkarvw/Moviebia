
const bs58 = require('bs58');
const solanaweb3 = require('@solana/web3.js');

// const connection = new solanaweb3.Connection("https://api.testnet.solana.com",)

// const something = bs58.decode("58cQ4uDXBYppJ44HFsnhDdg3M4yrrikvjF7y1AyGYjgPdt7RwbSxqitjbCTPkW6xSQ9fZDiawg5AVkx2x7MJyo7K")

// // const something2 = bs58.decode("5zg2e6M5E1cG97aR82as2LevHqP3zjBYUWSGoFxQf1EdEnQtXyoQVKEqDATEuwJn7Bcc2zFAXrTXuK9GHH5CHbg5")

// // console.log(typeof (something))
// // console.log(something2)

// const senderWallet = solanaweb3.Keypair.fromSecretKey(
//     something
// )

// const receiverWallet = solanaweb3.Keypair.fromSecretKey(
//     something2
// )

// const balancee = async () => {
//     let senderBalance = await connection.getBalance(senderWallet.publicKey)
//     console.log("Sender Balance: ", senderBalance / solanaweb3.LAMPORTS_PER_SOL)
//     let receiverBalance = await connection.getBalance(receiverWallet.publicKey)
//     console.log("Receiver Balance: ", receiverBalance / solanaweb3.LAMPORTS_PER_SOL)
// };

// balancee();

// const airdropp = async () => {
//     let txhash = await connection.requestAirdrop(senderWallet.publicKey, solanaweb3.LAMPORTS_PER_SOL);
//     await connection.confirmTransaction(txhash);
//     console.log("txhash : ", txhash)
// }

// airdropp();
// userKey = 9AV3WHZBbjnWByYrt32RuVYSExSnyMpqQsL9ho8qb6ok

// const t = async (lampps, userKey) => {

//     const connection = new solanaweb3.Connection("https://api.testnet.solana.com",)

//     const something = bs58.decode("58cQ4uDXBYppJ44HFsnhDdg3M4yrrikvjF7y1AyGYjgPdt7RwbSxqitjbCTPkW6xSQ9fZDiawg5AVkx2x7MJyo7K")

//     // const something2 = bs58.decode("5zg2e6M5E1cG97aR82as2LevHqP3zjBYUWSGoFxQf1EdEnQtXyoQVKEqDATEuwJn7Bcc2zFAXrTXuK9GHH5CHbg5")

//     // console.log(typeof (something))
//     // console.log(something2)

// const senderWallet = solanaweb3.Keypair.fromSecretKey(
//     something
// )

// let transaction = new solanaweb3.Transaction().add(
//     solanaweb3.SystemProgram.transfer({
//         fromPubkey: senderWallet.publicKey,
//         toPubkey: '9AV3WHZBbjnWByYrt32RuVYSExSnyMpqQsL9ho8qb6ok',
//         lamports: lampps
//     })
// )
// transaction.feepayer = senderWallet.publicKey
// let transactionHash = await connection.sendTransaction(transaction, [senderWallet])
// console.log("transactionHash : ", transactionHash)
// return transactionHash
// }

const createConn = async () => {
    const connection = new solanaweb3.Connection("https://api.testnet.solana.com",)
    return connection
}

const userKey = '9AV3WHZBbjnWByYrt32RuVYSExSnyMpqQsL9ho8qb6ok'

const t = async (userKey, lampps) => {
    const connection = await createConn();

    const something = bs58.decode("58cQ4uDXBYppJ44HFsnhDdg3M4yrrikvjF7y1AyGYjgPdt7RwbSxqitjbCTPkW6xSQ9fZDiawg5AVkx2x7MJyo7K")
    const senderWallet = solanaweb3.Keypair.fromSecretKey(
        something
    )
    let transaction = new solanaweb3.Transaction().add(
        solanaweb3.SystemProgram.transfer({
            fromPubkey: senderWallet.publicKey,
            toPubkey: userKey,
            lamports: lampps
        })
    )
    transaction.feepayer = senderWallet.publicKey
    let transactionHash = await connection.sendTransaction(transaction, [senderWallet])
    console.log("transactionHash : ", transactionHash)
    return transactionHash

}

// t(userKey, 0.01 * 1000000000);
module.exports = {
    t
}