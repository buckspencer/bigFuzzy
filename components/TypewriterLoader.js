import React, { useEffect, useRef } from "react";

const TypewriterLoader = ({ text }) => {
	const typewriterRef = useRef(null);

	useEffect(() => {
		let charIndex = 0;

		const typewriterEffect = setInterval(() => {
			const currentText = text.substring(0, charIndex);
			typewriterRef.current.textContent = currentText;

			charIndex++;

			if (charIndex > text.length) {
				charIndex = 0;
			}
		}, 100);

		return () => clearInterval(typewriterEffect);
	}, [text]);

	return (
		<div className="flex items-center justify-center h-24">
			<h2 ref={typewriterRef} className="text-2xl font-mono"></h2>
		</div>
	);
};

export default TypewriterLoader;
