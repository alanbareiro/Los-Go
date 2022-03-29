const path = require('path');
const fs = require('fs');
//declaramos nodemailer para enviar desde /contacto
const nodemailer = require('nodemailer');

const proposalFilePath = path.join(__dirname, '../data/proposal.json');
const proposals = JSON.parse(fs.readFileSync(proposalFilePath, 'utf-8'));

const controller = {

    index: (req, res) => {
        res.render('index');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    proposal: (req, res) => {
        const id = req.params.id;
        const product = proposals.find(product => {
            return product.id == id
        })
        console.log(product);
        res.render('proposal', { product: product });
    },
    send: (req, res) => {
        //console.log(req.body);
        //res.send(req.body);
        //res.json(req.body);
        /*const transporter = nodemailer.createTransport({
            port: 465,               // true para 465, false para otros puertos
            host: "mail.racs.com.ar",
            auth: {
                user: 'consultasweb@racs.com.ar',
                pass: 'W3b2022*',
            },
            secure: true,
        });
        const mailData = {
            from: 'consultasweb@racs.com.ar',  // mail del envio
            to: 'consultasweb@racs.com.ar',   // lista de mail enviados
            subject: 'Consulta WEB LosGo',
            text: `El nombre es : ${req.body.name } ----- El tel/email es : ${req.body.phone + ' / ' + req.body.email} ----- La consulta es : ${req.body.consulta} `,
        };
        transporter.sendMail(mailData, function (error, info) {
            if (error)
                console.log(error)
            else
                console.log(info);
            //console.log(req.body);
            //console.log(req.body.name);
        });*/
        res.redirect('/');
    }
}

module.exports = controller;