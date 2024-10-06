import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { message } = req.body

  if (!message || message.trim() === '') {
    return res.status(400).json({ message: 'Pesan tidak boleh kosong' })
  }

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);
    const response = await result.response;
    const botMessage = response.text();

    res.status(200).json({ message: botMessage })
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat memproses permintaan.', error: error.message });
  }
}