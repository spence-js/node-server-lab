module.exports = {
    test: (req, res) => {
        console.log('hi?')
        res.status(200).send('hello there')
    }
}