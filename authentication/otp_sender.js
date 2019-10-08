const twilio = require('twilio');

async function otpGenerator() {
    console.log('saassa')
    // Your Account SID from www.twilio.com/console
    const accountSid = 'AC6c2f8f925afe53ad3080e681d9625aa0';
    // Your Auth Token from www.twilio.com/console
    const authToken = '4d650b820c0c7177ed9501f50b13a054';

    var client = new twilio(accountSid, authToken);

    client.messages.create({
        body: 'Hello from Node',
        to: '+919041626013',  // Text this number
        from: '+915555555555' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}

exports.otpGenerator = otpGenerator;
