const { t } = require('../Transaction')

const redeemTokens = async (req, res) => {

    // console.log(req.body)
    const { userKey, amount } = req.body;
    // console.log(typeof (amountt))
    // const userKey = '9AV3WHZBbjnWByYrt32RuVYSExSnyMpqQsL9ho8qb6ok'
    // const amount = 0.01
    const lampports = amount * 1000000000;
    const thash = await t(userKey, lampports);
    res.status(200).json({ "thash": thash })
}

module.exports = {
    redeemTokens
}