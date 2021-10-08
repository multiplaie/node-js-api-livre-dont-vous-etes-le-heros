const express = require('express');
const router = express.Router();

const {SectionModel} = require('../models/sectionModel');

router.get('/', (req, res) => {
    
    SectionModel.find((err, sections) => {
        if(!err) res.send(sections);
        else console.log('Error to get data:' + err);
    });
});

router.get('/:id', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.params.id);
    SectionModel.findOne({_id: req.params.id}, (err, section) => {
        if(!err) res.send(section);
        else console.log('Error find section :' + err);
    });
});

router.post('/', (req, res) =>{
    const newSection = new SectionModel({
        _id: req.body._id,
        content: req.body.content,
        next: req.body.next
    });

    newSection.save((err,section) => {
        if(!err) res.send(section);
        else console.log('Error creating new data : '+ err)
    });
});




module.exports = router;