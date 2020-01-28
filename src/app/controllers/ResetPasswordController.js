import * as Yup from 'yup';
import User from '../models/User';

class ResetPasswordController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password')]),
      token: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { password, token, email } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user.password_reset_token !== token) {
      return res.status(400).json({ error: 'Invalid Token' });
    }

    const now = new Date();
    if (now > user.password_reset_expires) {
      return res
        .status(400)
        .json({ error: 'Token expired,generate another one' });
    }

    await user.update({
      password,
      password_reset_token: null,
      password_reset_expires: null,
    });
    return res.json({ message: 'Password changed successfully' });
  }
}

export default new ResetPasswordController();
