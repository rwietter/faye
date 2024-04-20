import { Sun } from "phosphor-react";
import { useEffect, useRef } from "react";

const updateTheme = () => {
	const theme = localStorage.getItem("theme") || "";
	const html = document.querySelector("html");
	if (!html) return;
	html.classList.value = theme;
	return;
};

const storeTheme = () => {
	const theme = document.querySelector("html")?.classList?.value || "";
	localStorage.setItem("theme", theme);
	return;
};

const SwitchTheme = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		updateTheme();
	}, []);

	const handleSwitchTheme = () => {
		buttonRef.current?.setAttribute("data-active", "true");
		document.querySelector("html")?.classList.toggle("dark");
		storeTheme();

		const timeout = setTimeout(() => {
			buttonRef.current?.removeAttribute("data-active");
			clearTimeout(timeout);
		}, 500);
		return;
	};

	return (
		<button
			type="button"
			aria-label="toggle change theme"
			title="toggle change theme"
			className="flex"
			onClick={handleSwitchTheme}
			ref={buttonRef}
		>
			<Sun
				aria-hidden="true"
				size={22}
				className="text-primary dark:text-white"
			/>
		</button>
	);
};

export default SwitchTheme;
