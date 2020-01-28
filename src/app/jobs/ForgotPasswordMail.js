import Mail from '../../lib/Mail';

class ForgotPasswordMail {
  get key() {
    return 'ForgotPasswordMail';
  }

  async handle({ data }) {
    const { token, user } = data;

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Alterar Senha',
      template: 'forgotPassword',
      context: {
        token,
      },
    });
  }
}

export default new ForgotPasswordMail();
