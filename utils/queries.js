export const recentPetsQuery = () => {
	const query = `*[_type == "pet"] | order(_createdAt) [0...5]`;

	return query;
};

export const singlePetQuery = (petId) => {
	const query = `*[_type == "pet" && _id == '${petId}']`;

	return query;
};
