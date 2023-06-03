// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "pet",
	title: "Pet",
	type: "document",
	fields: [
		{
			name: "createdBy",
			title: "createdBy",
			type: "createdBy",
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
			name: "imageUrl",
			title: "ImageUrl",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "file",
			options: {
				hotspot: true,
			},
		},
	],
};
