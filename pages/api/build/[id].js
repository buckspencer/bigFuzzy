import { client } from "../../../sanity/lib/client";
import { singlePetQuery } from "../../../utils/queries";

export default async function handler(req, res) {
	const { id } = req.query; // Extract the ID parameter from the request query

	try {
		const query = singlePetQuery(id);
		const data = await client.fetch(query);

		if (data) {
			res.status(200).json(data); // Return the pet data as JSON response
		} else {
			res.status(404).json({ error: "Pet not found" }); // Return a 404 error if pet is not found
		}
	} catch (error) {
		// console.error("Error retrieving pet:", error);
		res.status(500).json({ error: "Internal server error" }); // Return a 500 error for any other errors
	}
}
