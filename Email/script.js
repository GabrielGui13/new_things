const nodemailer = require('nodemailer')

function main() {
    let name = document.getElementById('name').value
    let mailto = document.getElementById('emailto').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    console.log(name, mailto, subject, message)

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
            from: `${name} <${mailto}>`,
            to: [mailto, 'gabrielguilherme13@hotmail.com'],
            subject: subject,
            html: `<h1> ${message} </h1> <img src="cid:inception">`,
            attachments: [{
                filename: 'inception.png',
                path: __dirname + '/inception.png',
                cid: 'inception'
            }]
        })
        console.log(info.messageId)
        alert(info.messageId)
    }
    //sendMail()    
}

function load() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", getInfo);
}
window.addEventListener("load", load)

load()