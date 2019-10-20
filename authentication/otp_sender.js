const Nexmo = require('nexmo');
const { generateOtp } = require('./generate_otp');

function otpSender(phone) {
    const nexmo = new Nexmo({
        apiKey: 'a788eafc',
        apiSecret: 'lNITzeDTW9db8hxo',
    });

    otp = generateOtp();
    const from = 'Trip Planners';
    const to = phone;
    const text = 'Otp for Registration ' + otp;

    nexmo.message.sendSms(from, to, text);
    return otp;
}

exports.otpSender = otpSender;
