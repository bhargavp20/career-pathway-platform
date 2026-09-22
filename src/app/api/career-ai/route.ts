import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Check API key
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing");

      return NextResponse.json(
        {
          error: "Gemini API key is missing",
        },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey,
    });

    const body = await request.json();

    const {
      subjects = [],
      activities = [],
      interests = [],
    } = body;

    const prompt = `
You are Pathway, an AI career exploration assistant for Class 11 and 12 students.

Student profile:

Subjects:
${subjects.length > 0 ? subjects.join(", ") : "Not specified"}

Activities:
${activities.length > 0 ? activities.join(", ") : "Not specified"}

Interests:
${interests.length > 0 ? interests.join(", ") : "Not specified"}

Suggest 4 different career pathways the student could explore.

For EACH pathway provide:

1. Pathway name
2. Why it may match the student's profile
3. Important skills to develop
4. Typical degree or course route

Important rules:

- Do NOT tell the student which career they should choose.
- Do NOT rank the pathways.
- Do NOT call one pathway the "best".
- Present the options as possibilities to explore.
- Keep the explanation simple and student-friendly.
- Do not invent specific college fees, admission requirements or salary figures.
`;

    console.log("Calling Gemini...");
    console.log("Model: gemini-3.5-flash-lite");

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
      config: {
        maxOutputTokens: 800,
      },
    });

    console.log("Gemini response received");

    return NextResponse.json({
      result: response.text || "No response was generated.",
    });
  } catch (error) {
    console.error("========== GEMINI ERROR ==========");
    console.error(error);
    console.error("==================================");

    return NextResponse.json(
      {
        error: "Failed to generate career suggestions",
        details:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}