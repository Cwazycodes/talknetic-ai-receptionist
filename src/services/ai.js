const { OpenAi } = require("openai");
const buisness = require("../config/business-profile.json");

const openai = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });

async function getAiResponse(input) {
  const prompt = `You are a friendly receptionist for ${buisness.name}.
    Buisness Info:
    Hours: ${buisness.hours}
    Location: ${buisness.location}
    Services: ${buisness.services.join(", ")}
    
    Respond helpfully to: "${input}"`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4-turbo",
  });

  return completion.choices[0].message.content;
}

module.exports = { getAiResponse };
