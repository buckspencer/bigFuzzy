import Replicate from "replicate";

export default async function replicateCall(req, res) {
	const queryRegex = /\?([^#]+)/;
	const parsedPrompt = decodeURIComponent(queryRegex.exec(req.url));

	const replicate = new Replicate({
		auth: process.env.REPLICATE_API_TOKEN,
	});
	const output = await replicate.run(
		"ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
		{
			input: {
				parsedPrompt,
			},
		}
	);
	res.status(200).json(output);
}
