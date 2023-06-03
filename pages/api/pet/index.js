import { client } from "../../../sanity/lib/client";
import { recentPetsQuery } from "../../../utils/queries";

export default async function handler(req, res) {
	try {
		const query = recentPetsQuery();
		// Fetch the last 6 most recently created pets from Sanity
		const recentPets = await client.fetch(query);
		// Return the results as a JSON response
		res.status(200).json({ pets: recentPets });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Something went wrong" });
	}
}
