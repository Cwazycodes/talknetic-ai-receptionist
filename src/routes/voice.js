const express = require("express");
const router = express.Router();
const { getAiResponse } = require("../services/ai");
const { sendSummary } = require("../services/email");
const VoiceResponse = require("twilio").twiml.VoiceResponse;

router.post("/", async (req, res) => {
  const twiml = new VoiceResponse();
  const speech = req.body.SpeechResult || "No input detected";

  const reply = await getAiResponse(speech);
  twiml.say(reply);

  await sendSummary("your@email.com", speech);

  res.type("text/xml");
  res.send(twiml.toString());
});

// POST route for Twilio webhook

module.exports = router;
