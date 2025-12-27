import axios from "axios";

export const cropSense = async (req, res) => {
  try {
    const { soilType, climate, location } = req.body;

    const prompt = `
You are an agriculture expert.

Suggest the best crops for farming based on:
- Soil Type: ${soilType}
- Climate: ${climate}
- Location: ${location}

Give 3 crop suggestions with short reasons.
`;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          key: process.env.GEMINI_API_KEY,
        },
      }
    );

    const aiText =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    res.json({
      suggestion: aiText || "No suggestion generated.",
    });
  } catch (error) {
    console.error(
      "Gemini Error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      message: "AI service error. Please try again later.",
    });
  }
};
