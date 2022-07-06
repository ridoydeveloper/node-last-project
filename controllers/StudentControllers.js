

const Student = require('../models/studentModel');
const fs = require('fs');
const path = require('path')


/**
 * 
 *  
 * @des get all student data
 * @name GET / student/
 * @access public
 */




const getAllStudents = async ( req , res) => {


    let students  = await Student.find();

    res.render('index', { students });
}

/**
 * 
 *  
 * @des get all student data
 * @name GET / student/
 * @access public
 */


 const getSingleStudent = async ( req , res) => {
    
    let id = req.params.id;

    let singleData = await Student.findById(id);

    res.render('show',{
        singleData
    });
}



/**
 * 
 *  
 * @des Creates student data
 * @name GET / student/
 * @access public
 */


 const showStudentForm = ( req , res) => {

    res.render('create')
}

/**
 * 
 *  
 * @des Creates student data
 * @name GET / student/
 * @access public
 */


 const createStudent = ( req , res) => {


    // store data to DB
    
    Student.create({
        ...req.body,
        photo : req.file.filename
    });

    //redirect to home page

    res.redirect('/student')
}

/**
 * 
 *  
 * @des delete student data
 * @name GET / student/
 * @access public
 */


const deleteStudent = async (req , res ) => {
 
    let id = req.params.id;

   await Student.findByIdAndDelete(id)

    res.redirect('/student');

}

 const editStudentForm = async ( req , res ) => {

    let id = req.params.id;

   
    
  let editStudent = await Student.findById(id);

    res.render('edit' , {

        editStudent
    })
 }



 const editStudents = async (req , res) => {

    let id = req.params.id;
    
    let filename = req.body.old_photo

    if (req.file) {

        filename = req.file.filename

         fs.unlink(path.join(__dirname, `../assets/upload/${req.body.old_photo}`),
          (err) => {
            if (err) {
              console.error(err)
              return
            }
            //file removed
          });
    }


   await Student.findByIdAndUpdate(id , { ...req.body, 
    
        photo :filename } ,{
            new : true
        })

        res.redirect('/student')
 }
 


module.exports = {


    getAllStudents,
    createStudent,
    getSingleStudent,
    showStudentForm,
    deleteStudent,
    editStudentForm,
    editStudents
 
    
}