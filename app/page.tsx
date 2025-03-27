"use client";

import PageSelector from "@/components/PageSelector";

export default function PageSelectorDemo() {
	const handleDone = (selectedPages: string[]) => {
		console.log("Selected pages:", selectedPages);
		// You can add your logic here to handle the selected pages
	};

	return (
		<div className='min-h-screen flex items-center justify-center p-4 bg-gray-50'>
			<PageSelector onDone={handleDone} />
		</div>
	);
}
