import { DATA_SET, PROJECT_ID } from "../../env";

import createImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
	projectId: PROJECT_ID || "",
	dataset: DATA_SET || "",
});

export const urlForImage = (source) => {
	console.log(imageBuilder);
	return imageBuilder?.image(source).auto("format").fit("max");
};
