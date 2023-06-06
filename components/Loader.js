import Image from "next/image";
import React from "react";
import logo from "../assets/cat.svg";
import styles from "./css/Loader.module.css";

const Loader = () => {
	return (
		<div className="flex items-center justify-center">
			<div className={styles.container}>
				<Image
					src={logo}
					alt="Cat"
					width={64}
					height={64}
					className={styles.bounce}
				/>
			</div>
		</div>
	);
};

export default Loader;
