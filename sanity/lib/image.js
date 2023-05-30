import createImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
	projectId: process.env.SANITY_PROJECT_ID || "",
	dataset: process.env.SANITY_DATASET || "",
});

export const urlForImage = (source) => {
	return imageBuilder?.image(source).auto("format").fit("max");
};
