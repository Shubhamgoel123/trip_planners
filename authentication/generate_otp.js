const otpGenerator = require('otp-generator')

function generateOtp() {
    return otpGenerator.generate(
        6, 
        { digits: true, alphabets: false, upperCase: false, specialChars: false }
    );
}

exports.generateOtp = generateOtp;
