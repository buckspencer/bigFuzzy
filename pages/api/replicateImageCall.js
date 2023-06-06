import Replicate from "replicate";

export default async function replicateImageCall(req, res) {
	const queryRegex = /\?([^#]+)/;
	const parsedPrompt = queryRegex.exec(req.url);
	const decodedPrompt = decodeURIComponent(parsedPrompt[1]);
	const replicate = new Replicate({
		auth: process.env.NEXT_REPLICATE_API_TOKEN,
	});
	const output = await replicate.run(
		"ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
		{
			input: {
				prompt: decodedPrompt,
			},
		}
	);
	// console.log("IMAGE RESPONSE");
	// console.log(output);
	res.status(200).json(output);
}
