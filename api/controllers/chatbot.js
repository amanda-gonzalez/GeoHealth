import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env.local' });

if (!process.env.OPENAI_API_KEY) {
    throw new Error("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option.");
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});



export const chatbot = async (req, res) => {
    const { messages } = req.body;
    try {
        const response = await openai.assistants.sessions.create({
            assistant_id: "asst_WlBMjb2a2W6E3i6waIpFRTho",
            messages: messages,
        });
        res.json(response.data);
    } catch (error) {
        console.error("Failed to query OpenAI using Assistant ID:", error);
        console.error("Error details:", error.response ? error.response.data : error.message);
        res.status(500).send("Error querying OpenAI Assistant with Assistant ID");
    }
}
