const express = require('express');
const MensRanking = require('../models/model')

const router = new express.Router();


// get all data from our database
router.get('/mens', async (req, res) => {
    try {
        const getMensData = await MensRanking.find({}).sort({"rank":1})
        res.send(getMensData)
    } catch (error) {
        res.send(error.message)
    }
})

// get data for indivisual person from our database
router.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getMenData = await MensRanking.findById({ _id })
        res.status(200).send(getMenData)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

// create  or store data to database
router.post('/mens', async (req, res) => {
    try {
        const MenRecord = new MensRanking(req.body)
        const inserted = await MenRecord.save()
        res.status(201).send(inserted)
        console.log(req.body);
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
})

// update  stored data of database 
router.patch('/mens/:id', async (req, res) => {
    try {
        // const MenRecord = new MensRanking(req.body)
        const _id = req.params.id
        const updated = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(202).send(updated)
        console.log(req.body);
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
})

// delete or remove  stored data ofindividual from database 
router.delete('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const deleted = await MensRanking.findByIdAndDelete(_id);
        res.status(203).send(deleted)
        console.log(req.body);
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
})

module.exports = router