/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].jsx` route
 */

import { API_VERSION, DATA_SET, PROJECT_ID } from "./env";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./sanity/schema";
import { visionTool } from "@sanity/vision";

export default defineConfig({
	basePath: "/studio",
	projectId: PROJECT_ID,
	dataset: DATA_SET,
	// Add and edit the content schema in the './sanity/schema' folder
	schema,
	plugins: [
		deskTool(),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({
			defaultApiVersion: API_VERSION,
		}),
	],
});
