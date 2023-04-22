const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
 apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
 prompt: "hyper realistic image of clam chowder",
 n: 2,
 size: "1024x1024",
});
