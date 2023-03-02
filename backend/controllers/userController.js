const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Otp = require('../models/otp');
const nodemailer = require("nodemailer");

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// login user
const loginUser = async (req, res) => {
    const { email, password, userType } = req.body
    let emptyFields = []

    if(!email) {
        emptyFields.push('email')
    }
    if(!password) {
        emptyFields.push('password')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }
    
    try {
        const user = await User.login({email, password, userType})

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token, userType})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const { email, password, userType } = req.body
    let emptyFields = []

    if(!email) {
        emptyFields.push('email')
    }
    if(!password) {
        emptyFields.push('password')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }
    
    try {
        const user = await User.signup({email, password, userType})

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token, userType})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const emailSend = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })

    if( user ) {
        const otpCode = Math.floor((Math.random() * 10000) + 1)

        const otpData = await Otp.create({ 
            email: req.body.email, 
            code: otpCode, 
            expiresIn: new Date().getTime() + 300*1000,
        })

        mailer(req.body.email,otpCode)
        res.status(200).json({ otpData })

    }
    else {
        res.status(400).json({error: 'Email Id does not exist'})
    }
}

const changePassword = async (req, res) => {
    const data = await Otp.findOne({ email: req.body.email, code: req.body.otpCode })
    console.log(data)
    if ( data ) {
        const currentTime = new Date().getTime()

        const timeDiff = data.expiresIn - currentTime;
        console.log('hai')
        if ( timeDiff < 0) {
            res.status(400).json({error: 'Token Expired'})
        } else {
            let user = await User.findOne({ email: req.body.email })
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(req.body.password, salt)
            user.password = hash;
            user.save()
            console.log('hello')
            res.status(200).json({mssg:'Password Changed Successfully'})
        }
    } else {
        res.status(400).json({error:'Invalid Otp'})
    }
}

const mailer = async (email, otp) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: email, // generated ethereal user
          pass: 'xdcy enke gtlu oexw', // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: 'hemanthphaneendra@gmail.com', // sender address
        to: "hemanthphaneendra@gmail.com", // list of receivers
        subject: "Reset Password", // Subject line
        text: "Hello world?", // plain text body
        html: `${otp}`, // html body
      });
}

module.exports = { 
    loginUser, 
    signupUser, 
    emailSend, 
    changePassword
 }