export const allUsersQuery = () => {
  const query = `*[_type == "user"]`;

  return query;
};

export const singlePetQuery = (petId) => {
  const query = `*[_type == "pet" && _id == '${petId}']`;

  return query;
};
