import { Copy, Download, Swatches } from "phosphor-react";
import type React from "react";
import { memo } from "react";

interface TabarProps {
	isModal: boolean;
	handleModalColorSelect: () => void;
	gradients: string[];
	handleSetColor: (color: string) => void;
}

const Tabar: React.FC<TabarProps> = ({
	gradients,
	isModal,
	handleModalColorSelect,
	handleSetColor,
}) => {
	return (
		<section className="flex border-2 border-gray-400 justify-evenly rounded-md w-full max-w-lg p-4 backdrop-blur-lg backdrop-filter bg-white/30 shadow-2xl mobile-scaling">
			<Swatches
				size={32}
				className="cursor-pointer text-primary dark:text-white"
				onClick={handleModalColorSelect}
			/>
			{isModal && (
				<div className="fixed inset-0 -top-20 w-min h-min border-2 border-gray-400 bg-white/30 backdrop-blur-xl backdrop-filter p-2 rounded-md bg-opacity-50 flex space-x-2 ">
					{gradients.map((gradient: string) => (
						<div
							key={gradient}
							style={{ backgroundImage: gradient }}
							onClick={() => handleSetColor(gradient)}
							onKeyUp={() => handleSetColor(gradient)}
							className="w-12 h-12 rounded-md cursor-pointer hover:shadow-lg hover:opacity-80 transition-all"
						/>
					))}
				</div>
			)}
			<Copy size={32} className="cursor-pointer text-primary dark:text-white" />
			<Download
				size={32}
				className="cursor-pointer text-primary dark:text-white"
			/>
		</section>
	);
};

export default memo(Tabar);
