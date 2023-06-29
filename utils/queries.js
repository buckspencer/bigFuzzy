export const allPetsQuery = () => {
	const query = `*[_type == "pet"]`;

	return query;
};

export const recentPetsQuery = () => {
	const query = `*[_type == "pet"] | order(_createdAt) [0...5]`;

	return query;
};

export const singlePetQuery = (petId) => {
	const query = `*[_type == "pet" && _id == '${petId}']`;

	return query;
};

export const usersPetQuery = (userId) => {
	const query = `*[_type == "pet" && userId == '${userId}'] | order(_createdAt desc) [0]`;

	return query;
};
