const router = require('express').Router();
const userData = require('../models/data')

const userLogin = async (req,res) => {
    //const userMail = userData.find({Email: req.body.Email})
    if (req.body.Password != req.body.confPassword) {
        req.session.message = {
            type: 'danger',
            intro: 'Pas de correspondance',
            message: 'Vos mots de passe ne correspondent pas'
        }
         res.redirect('/login');
    }else if(req.body.Identity == null || req.body.Password == null){
        req.session.message = {
            type: 'danger',
            intro: 'Champs vides',
            message: 'Veuillez remplir tous les champs SVP'
        }
    }
    else{
        const newUser = new userData({
            Identity: req.body.Identity,    
            Password: req.body.Password
        })
        try {
            await newUser.save().then( () =>   res.redirect('/'))
            .catch((err) =>  console.log(err))
        } catch (err) {
             console.log(err);
        }
    }
}

module.exports = { userLogin }