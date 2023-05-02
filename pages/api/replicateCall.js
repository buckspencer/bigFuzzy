// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Replicate from "replicate";

export default async function replicateCall(req, res) {
	const replicate = new Replicate({
		auth: process.env.REPLICATE_API_TOKEN,
	});
	const output = await replicate.run(
		"ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
		{
			input: {
				prompt: "red otter wearing royal cloths, 4k photo",
			},
		}
	);
	res.status(200).json(output);
}
