const Nexmo = require('nexmo');
const { generateOtp } = require('./generate_otp');

function otpSender(phone) {
    const nexmo = new Nexmo({
        apiKey: process.env.NEXMO_API_KEY,
        apiSecret: process.env.NEXMO_API_SECRET,
    });

    otp = generateOtp();
    const from = 'Trip Planners';
    const to = phone;
    const text = 'Otp for Registration ' + otp;

    nexmo.message.sendSms(from, to, text);
    return otp;
}

exports.otpSender = otpSender;
