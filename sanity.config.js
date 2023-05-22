/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].jsx` route
 */

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./sanity/schema";
import { visionTool } from "@sanity/vision";

export default defineConfig({
	basePath: "/studio",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataSet: process.env.NEXT_PUBLIC_SANITY_DATASET,
	// Add and edit the content schema in the './sanity/schema' folder
	schema,
	plugins: [
		deskTool(),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({
			defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
		}),
	],
});
