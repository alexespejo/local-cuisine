import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
 apiKey: process.env.NUXT_API_SECRET,
});
const openai = new OpenAIApi(configuration);
export default defineEventHandler(async (event) => {
 const response = await openai.createImage({
  prompt: `a hyper realistic image of ${event.context.params.dish} with natural sunlight, photograph, food`,
  n: 1,
  size: "1024x1024",
 });
 console.log(response.data);
 return {
  res: response.data.data[0],
 };
});
