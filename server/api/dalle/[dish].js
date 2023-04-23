import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
 apiKey: "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",
});
const openai = new OpenAIApi(configuration);
export default defineEventHandler(async (event) => {
 const response = await openai.createImage({
  prompt: `a hyper realistic image of ${event.context.params.dish} with moody lighting, photograph, food`,
  n: 1,
  size: "1024x1024",
 });
 console.log(response.data);
 return {
  res: response.data.data[0],
 };
});
