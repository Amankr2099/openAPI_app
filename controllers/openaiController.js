//const { Configuration, OpenAIApi } = require('openai')
import { Configuration, OpenAIApi } from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const generateImage = async (req, res) => {

    try {
        const response = await openai.images.generate({
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
        });
        image_url = response.data.data[0].url;
        res.send(image_url)
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

module.exports = { generateImage }