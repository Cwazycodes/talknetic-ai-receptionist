const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendSummary(to, transcript) {
    const msg = {
        to,
        from: 'calls@talknetic.ai', // Use the email address or domain you verified
        subject: 'AI Receptionist Call Summary',
        text: `Here is the summary of your call:\n\n${transcript}`,
    };
    
    try {
        await sgMail.send(msg);
        console.log('Summary sent successfully');
    } catch (error) {
        console.error('Error sending summary:', error);
    }
}

module