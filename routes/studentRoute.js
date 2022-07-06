
const express = require('express');
const {getAllStudents, showStudentForm, createStudent, getSingleStudent , deleteStudent , editStudentForm, editStudents } = require('../controllers/StudentControllers');
const router = express.Router();
const multer = require('multer');
const path = require('path');



//multer config

const storage = multer.diskStorage({

    destination : (req , file , cb) => {
             
        cb(null , path.join(__dirname, '../assets/upload/'))
    },
    filename : (req , file , cb) => {


        cb(null , Date.now()+'_'+ file.originalname)

    }

});

//load multer

const studentMulter = multer({

    storage : storage

}).single('photo');


//student route
router.get('/', getAllStudents);

router.post('/', studentMulter , createStudent);

router.get('/create', showStudentForm);

router.get('/edit/:id', editStudentForm);

router.post('/edit/:id', studentMulter , editStudents);

router.get('/delete/:id', deleteStudent);


router.get('/create', showStudentForm);

router.get('/:id', getSingleStudent);




//express router


module.exports = router;