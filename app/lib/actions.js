/* All Server Actions */
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function getImages(prompt) {
  console.log(prompt);
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
}
