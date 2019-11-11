

const express = require('express')
const router = new express.Router()

router.get('/', async (req, res) => {

    var jsonTest = {
        valueA: 'value1',
        valueB: 'value2'
    }

    try {
        res.status(201).send(jsonTest)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('*/', (req, res) => {
    res.render('404', {
        errorMessage: 'Resource not found!'
    })
})

module.exports = router