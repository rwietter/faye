import { Info } from "phosphor-react";
import { useState } from "react";
import SearchPost from "./components/SearchPost";
import SwitchTheme from "./components/SwitchTheme";
import Card from "./features/card";
import Tabar from "./features/tabar";

const gradients = [
	"linear-gradient(150deg, rgb(0, 224, 245), rgb(31, 158, 255), rgb(51, 85, 255))",
	"linear-gradient(150deg, rgb(0, 176, 158), rgb(19, 77, 93), rgb(16, 23, 31))",
	"linear-gradient(160deg, rgb(204, 251, 252), rgb(197, 234, 254), rgb(189, 211, 255))",
];

function App() {
	const [color, setColor] = useState(gradients[0]);
	const [isModal, setModal] = useState<boolean>(false);

	const handleModalColorSelect = () => {
		setModal((modal) => !modal);
	};

	const handleSetColor = (color: string) => {
		setColor(color);
	};

	return (
		<div className="flex flex-col min-h-lvh h-full bg-white text-primary dark:bg-gray-950 dark:text-secondary pb-10">
			<header className="flex w-full flex-col p-4 md:px-8">
				<section className="flex justify-between items-center">
					<div>
						<p className="text-secondary dark:text-gray-200 font-sans text-3xl font-bold ">
							Faye
						</p>
					</div>
					<nav className="flex space-x-4 items-baseline">
						<Info className="text-primary dark:text-white" size={22} />
						<SwitchTheme />
					</nav>
				</section>
				<section className="self-center flex items-start justify-center h-full w-full pt-8">
					<SearchPost />
				</section>
			</header>

			<main className="pt-8 px-4 flex flex-col items-center justify-start">
				<Card color={color} />
			</main>

			<footer className="flex items-center justify-center pt-14 px-4">
				<Tabar
					gradients={gradients}
					isModal={isModal}
					handleModalColorSelect={handleModalColorSelect}
					handleSetColor={handleSetColor}
				/>
			</footer>
		</div>
	);
}

export default App;
