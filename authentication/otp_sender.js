const twilio = require('twilio');

async function otpGenerator() {
    console.log('saassa')
    // Your Account SID from www.twilio.com/console
    const accountSid = ACCOUNT_SID;
    // Your Auth Token from www.twilio.com/console
    const authToken = AUTH_TOKEN;

    var client = new twilio(accountSid, authToken);

    client.messages.create({
        body: 'Hello from Node',
        to: '+919041626013',  // Text this number
        from: '+915555555555' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}

exports.otpGenerator = otpGenerator;
