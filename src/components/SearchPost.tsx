import { Link } from "phosphor-react";
import type React from "react";

const SearchPost: React.FC = () => {
	return (
		<form className="w-full relative">
			<fieldset className="w-full relative">
				<legend className="sr-only">Search post</legend>
				<input
					type="text"
					placeholder="Search post"
					className="bg-gray-200 border-2 border-gray-500 outline-none focus:outline-4 focus:outline-offset-0  focus:outline-sky-600 w-full px-4 py-2 rounded-md text-primary dark:text-white dark:bg-gray-700 transition-all focus:px-2 focus:border-none"
				/>
				<Link
					size={22}
					className="absolute top-1/2 right-4 transition-all transform -translate-y-1/2 text-primary dark:text-white"
				/>
			</fieldset>
		</form>
	);
};

export default SearchPost;
