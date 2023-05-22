import { allUsersQuery } from "../../utils/queries";
import { client } from "../../sanity/lib/client";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const data = await client.fetch(allUsersQuery());

		if (data) {
			res.status(200).json(data);
		} else {
			res.json([]);
		}
	}
}
