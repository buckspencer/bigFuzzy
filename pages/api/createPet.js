import { client } from "../../sanity/lib/client";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const pet = req.body;
		const _client = client;

		_client
			.create(pet)
			.then((response) =>
				res.status(200).json({ message: "Pet Created", _id: response._id })
			)
			.catch((error) =>
				res.status(500).json({ message: "Error creating pet", error })
			);
	}
}
