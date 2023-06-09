// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "pet",
	title: "Pet",
	type: "document",
	fields: [
		{
			// Auth0 subscriber ID
			name: "userId",
			title: "UserId",
			type: "string",
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "originStory",
			title: "OriginStory",
			type: "string",
		},
		{
			name: "uniqueTrait",
			title: "UniqueTrait",
			type: "string",
		},
		{
			name: "imageUrl",
			title: "ImageUrl",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
	],
};
