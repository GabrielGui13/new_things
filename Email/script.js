const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

//set public folder to put archives
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile('main.html', {
        root: path.join(__dirname, './')
    })
})

app.post('/send', (req, res) => {
    let name = req.body.nome
    let mailto = req.body.emailto
    let subject = req.body.subject
    let message = req.body.message

    let transporter = nodemailer.createTransport({ //conectar na conta do transporte
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'gabrielgostosotestes@gmail.com',
            pass: 'teste52468'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    async function sendMail() {
        const info = await transporter.sendMail({
            from: `Gabriel Gostoso <gabrielgostosotestes@gmail.com>`,
            to: [mailto],
            subject: subject,
            html: `<h1> Olá ${name}! \n${message} </h1> <img src="cid:inception">`,
            attachments: [{
                filename: 'inception.png',
                path: __dirname + '/inception.png',
                cid: 'inception'
            }]
        })
        console.log(info.messageId)
        res.send(
            `   <script>alert('Email enviado! ${info.messageId}')</script>
                <a href='/'>Voltar</a>
                <style>
                    a {
                        text-align: center;
                        font-size: 30px;
                        border: 1px solid black;
                    }
                </style>
            `
        )
    }
    sendMail()
})

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}!`)
})