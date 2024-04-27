import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env.local' });

if (!process.env.OPENAI_API_KEY) {
    throw new Error("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option.");
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const assistant = await openai.beta.assistants.create({
    name: "GeoHealth Navigator",
    instructions: "You are specialized in medical information gathering. You analyze the user's inquiry regarding their symptoms, ask for their medical condition and insurance information, then come up with a suggestions to certain treatment and give specific addresses to healthcare providers whose cost can be covered by their insurance.",
    model: "gpt-4-turbo",
    tools: [
        {
            type: "function",
            function: {
                name: "giveMedicalAdvice",
                description: "Give medical advice based on symptoms",
                parameters: {
                    type: "object",
                    properties: {
                        symptom: {
                            type: "string",
                            description: "Medical symptoms, e.g., coughing, fever, redeyes, etc.",
                        },
                    },
                    required: ["symptom"],
                },
            },
        },

        {
            type: "function",
            function: {
                name: "getHealthcareProvider",
                description: "Get the address and contact information of healthcare providers whose cost can be covered by provided insurance type",
                parameters: {
                    type: "object",
                    properties: {
                        insurance: {
                            type: "string",
                            description: "The insurance plan, e.g., Obamacare Plans, Wellfleet Student Plans, etc.",
                        },
                    },
                    required: ["insurance"],
                },
            },
        },
    ],
})
