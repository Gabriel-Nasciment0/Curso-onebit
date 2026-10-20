module.exports = {
    // GET /welcome
    index: (req, res) => {
        const displayName = req.authenticatedUser?.name ?? "visitante"

        return res.json({
            message: `Seja bem-vindo(a), ${displayName}!`,
        })
    },
}
