interface MailTo {
  name: string;
  email: string;
}

interface MailMessage {
  subject: string;
  body: string;
  attachment?: string[] ;
}

type SendMailType = {
  to: MailTo;
  message: MailMessage;
}

class Mailservice {
  sendmail({ to, message }: SendMailType) {
    return `Email enviado para ${to.name} com assunto ${message.subject}, a message ${message.body}`;
  }
}

export default new Mailservice();