// pages/api/getPetOriginStory.js

export default async function getPetOriginStory(req, res) {
	const { animalType } = req.query;
	const prompt = `2 key value pairs where the first key called \"name\" is the first\
  and last name of a royal ${animalType} and the 2nd key \"story\" is a 200 word Tolkienesque\
  origin story with the datatype STRING and an escaped newline char every 10 words in present participal for a royal\
  ${animalType} that includes the royal ${animalType}'s\
  name and a vivid description of a fantasy backstory.`;

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
		const correctedText = data.choices[0].text.trim();
		console.log("API");
		console.log(correctedText);
		const ensureClosing = addQuotesAndCurlyBrace(correctedText);
		res.status(200).json(JSON.parse(ensureClosing));
	} catch (error) {
		console.error("Error getting originStory:", error);
		res.status(500).json({ error: "Failed to get originStory" });
	}
}

function addQuotesAndCurlyBrace(str) {
	if (!str.endsWith('"') && !str.endsWith("}")) {
		str += '"';
		str += "}";
	}
	return str;
}
