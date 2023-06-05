import { client } from "../../sanity/lib/client";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const pet = req.body;
		const _client = client;

		try {
			// Fetch the image from the provided URL and upload it to Sanity
			const imageUrl = pet.imageUrl;
			const imageBuffer = await fetch(imageUrl).then((res) =>
				res.arrayBuffer()
			);
			// console.log("BUFFER");
			// console.log(imageBuffer);
			const uploadedImage = await _client.assets.upload(
				"image",
				Buffer.from(imageBuffer),
				{
					fileName: "namn",
					contentType: "png",
				}
			);
			// console.log("UploadedImage");
			// console.log(uploadedImage);
			// Create the pet object with a reference to the uploaded image
			pet.image = {
				_type: "image",
				asset: {
					_type: "reference",
					_ref: uploadedImage._id,
				},
			};
			// console.log("petObject");
			// console.log(pet);
			const createdPet = await _client
				.create(pet)
				.then((result) => {
					// console.log("CREATE RESULT");
					// console.log(result);
					res.status(200).json({ message: "Pet Created", _id: result._id });
				})
				.catch((err) => {
					res.status(500).json({ message: "Error creating pet", err });
				});
		} catch (error) {
			res.status(500).json({ message: "Error creating pet", error });
		}
	}
}
