import React from "react";
import VisitationScreen from "../../components/VisitationScreen";

const Visitation = (props) => {
	const { petInfo } = props;
	return <VisitationScreen petInfo={petInfo} />;
};

export async function getServerSideProps({ params }) {
	const { id } = params;
	const res = await fetch(
		`${process.env.NEXT_BASE_URL}/api/pet/usersPet/${atob(id)}`
	);

	const data = await res.json();

	return {
		props: {
			petInfo: data,
		},
	};
}

export default Visitation;
