// pages/api/getPetOriginStory.js

export default async function getPetOriginStory(req, res) {
	const { petInfo, message } = req.body;

	const prompt = `A user has just entered a chat with you and I need you to be ${petInfo.name}\
	the following backstory, ${petInfo.originStory} and respond to the following prompt, ${message}`;

	const arg = {
		model: "text-davinci-003",
		prompt: prompt,
		temperature: 0.3,
		max_tokens: 500,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	};
	try {
		const response = await fetch("https://api.openai.com/v1/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEXT_APP_OPENAI_API_KEY}`,
			},
			body: JSON.stringify(arg),
		});

		const data = await response.json();
		const responseText = data.choices[0].text;

		res.status(200).json(responseText);
	} catch (error) {
		// console.error("Error getting originStory:", error);
		res.status(500).json({ error: `Failed to get message ${error}` });
	}
}
