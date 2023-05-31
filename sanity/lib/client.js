import { API_TOKEN, API_VERSION, DATA_SET, PROJECT_ID } from "../env";

import { createClient } from "next-sanity";

export const client = createClient({
	projectId: PROJECT_ID,
	dataset: DATA_SET,
	apiVersion: API_VERSION,
	useCdn: false,
	token: API_TOKEN,
});
