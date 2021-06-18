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

    let output = 
    `
    <div class="container">
    <style>
        *{
            font-family: Arial, Helvetica, sans-serif
        }
        .container, a {
            display: flex;
            justify-content: center;
        }
        .content {
            max-width: 650px;
            width: 100%;
        }
        button {
            background-color: #FA2486;
            color: white;
            cursor: pointer;
            border: none;
            padding: 15px;
            display: flex;
            justify-content: center;
            margin: auto;
            font-weight: bold;
        }
        p:nth-of-type(6) {
            font-size: 13px;
        }
        p:nth-of-type(8), p:nth-of-type(7) {
            text-align: center;
        }
    </style>
    <div class="content">
        <img src="cid:ultima-chance" alt="ultima-chance">
        <p>Oi, Gabriel. Tudo bem?</p>
        <p>Vimos que sua prova ainda está pendente e ela é FUNDAMENTAL para confirmar sua participação. Somente com ela o seu cadastro está totalmente válido.</p>
        <p>Você tem até hoje, 17/06, <b>às 23:59h</b> para concluir sua participação, então aproveite esse tempinho para finalizar 
            a mamada e participar do treinamento. Uma das 10.000 bucetas pode ser sua!
        </p>
        <p>
            O <b>Hiring Coders</b> é um programa de educação e seleção de pessoas desenvolvedoras que 
            desejam trabalhar nas principais empresas de pornografia para ecommerce do Brasil.
        </p>
        <p>E você vai ficar de fora?</p>

        <button>QUERO CONCLUIR A PROVA</button>

        <p>Qualquer dúvida, basta entrar em contato conosco pelo suporte@gama.academy e se já tiver feito sua prova, pode desconsiderar essa mensagem. =)</p>

        <p>Enviado para: gabrielcp4@outlook.com</p>

        <a href="#">Cancelar a inscrição</a>

        <p>Gama Academy, Rua Capitão Antônio Rosa, 376, São Paulo - São Paulo, 01443-010, Brasil</p>
    </div>
</div>
    `

    async function sendMail() {
        const info = await transporter.sendMail({
            from: /* `Gabriel Gostoso <gabrielgostosotestes@gmail.com>` */`Bruce | Gama Academy <gabrielgostosotestes@gmail.com>`,
            to: [mailto],
            subject: subject,
            html: /* `<h1> Olá ${name}! \n${message} </h1> <img src="cid:inception">` */ output,
            attachments: [{
                filename: 'ultima-chance.png',
                path: __dirname + '/ultima-chance.png',
                cid: 'ultima-chance'
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