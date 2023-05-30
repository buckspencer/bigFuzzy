import createdBy from "./schemas/createdBy";
import pet from "./schemas/pet";
import user from "./schemas/user";

export const schema = {
	types: [user, pet, createdBy],
};
