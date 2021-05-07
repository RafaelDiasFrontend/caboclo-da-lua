const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'rafael.ddsociety@gmail.com',
    from: 'contato@agenciakpax.com.br',
    subject: 'Seja Bem Vindo - Plataforma de Cursos',
    text: 'Isso é apenas um teste, tenha calma!'
})
