import Adoption from "../../components/Adoption";
import React from "react";
import axios from "axios";

const Build = (props) => {
	return <Adoption {...props} />;
};

export async function getServerSideProps({ params }) {
	const { id } = params;
	const res = await axios.get(`${process.env.NEXT_BASE_URL}/api/build/${id}`);

	return {
		props: {
			petDetails: res.data,
		},
	};
}

export default Build;
