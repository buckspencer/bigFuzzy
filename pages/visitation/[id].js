import React from "react";
import VisitationScreen from "../../components/VisitationScreen";

const Visitation = (props) => {
	const { petDetails } = props;
	return <VisitationScreen petDetails={petDetails} />;
};

export async function getServerSideProps({ params }) {
	const { id } = params;
	const res = await fetch(
		`${process.env.NEXT_BASE_URL}/api/pet/usersPet/${atob(id)}`
	);

	const data = await res.json();

	return {
		props: {
			petDetails: data,
		},
	};
}

export default Visitation;
