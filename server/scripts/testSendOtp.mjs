import dotenv from 'dotenv';
dotenv.config();

import sendOtp from '../utils/sendOtp.js';

const email = process.argv[2] || 'testuser@igdtuw.ac.in';
const otp = process.argv[3] || Math.floor(100000 + Math.random() * 900000).toString();

(async () => {
  console.log('Sending OTP', otp, 'to', email);
  const ok = await sendOtp(email, otp);
  console.log('sendOtp returned:', ok);
  process.exit(ok ? 0 : 1);
})();
