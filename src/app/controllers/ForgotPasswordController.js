import crypto from 'crypto';
import * as Yup from 'yup';
import User from '../models/User';
import ForgotPasswordMail from '../jobs/ForgotPasswordMail';
import Queue from '../../lib/Queue';

class ForgotPasswordController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ error: 'Email doesnt exists' });
    }

    const token = crypto.randomBytes(20).toString('hex');

    const now = new Date();

    now.setHours(now.getHours() + 1);

    const { password_reset_token, password_reset_expires } = await user.update({
      password_reset_token: token,
      password_reset_expires: now,
    });

    await Queue.add(ForgotPasswordMail.key, {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });

    return res.json({
      password_reset_token,
      password_reset_expires,
    });
  }
}

export default new ForgotPasswordController();
