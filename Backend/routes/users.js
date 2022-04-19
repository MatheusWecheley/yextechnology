var express = require('express');
var router = express.Router();
const User = require('../users/user')
const jwt = require('jsonwebtoken')
const barberSchema = require('../users/barbers');
const ImageSchema = require('../middleware/upload')
const imgs = require('../middleware/imgs')
require('dotenv').config();
const secret = process.env.JWT_TOKEN;



router.get('/list-images', async (req, res) => {
    await ImageSchema.find()
    .then((images) => {
        return res.json({
            images,
            url: 'http://localhost:3001/files/users/'
        })
    })
})

router.get('/users/details'), async (req, res) => {
    const {_id} = req.params;
    const barberr = await ImageSchema.findOne({_id})
    res.json(barberr)
}


// router.post('/users/admin'), async (req, res) => {
//     const {name, street, number} = req.body;
//     const barber = new barberSchema({name, street, number})
//     try {
//         await barber.save();
//         res.status(200).json(barber);
//     } catch (err) {
//         res.status(500).json({error: 'Error register new Barber'})
//     }
// }

router.post('/users/admin', imgs.single('image'), async (req, res) => {
    const newImage = new ImageSchema({
        barber: req.body.barber,
        street: req.body.street,
        number: req.body.number,
        name: req.file.filename,
        image: req.file,
    })
    newImage.save().then(() => res.send('Sucesso'))



})

router.post('/register', async(req,res) => {
    const { name, email, password } = req.body;
    const user = new User( { name, email, password } );

    try {
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({error : 'Error registering new user'});
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try{
        let user = await User.findOne({ email })
        if(!user) {
            res.status(401).json({error: 'User not found'})
        } else {
            user.isCorrectPassword(password, function(err,same) {
                if(!same )
                res.status(401).json({error: 'Password already in use'})
                else {
                    const token = jwt.sign({email}, secret, {expiresIn: '10d'});
                    res.json({user: user, token: token});
                }
            })
        }
    }catch (err) {
        res.status(500).json({error :'Internal Errro, try again'});
    }
})

module.exports = router;