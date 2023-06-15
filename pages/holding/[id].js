import HoldingScreen from "../../components/HoldingScreen";
import React from "react";
import axios from "axios";

const Holding = (props) => {
	return <HoldingScreen {...props} />;
};

export async function getServerSideProps({ params }) {
	const { id } = params;
	const res = await axios.get(`${process.env.NEXT_BASE_URL}/api/pet/${id}`);

	return {
		props: {
			petDetails: res.data,
		},
	};
}

export default Holding;
