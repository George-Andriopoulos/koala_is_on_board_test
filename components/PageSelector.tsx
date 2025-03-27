"use client";

import React from "react";
import { ChangeEvent } from "react";
import { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";

type PageState = {
	allPages: boolean;
	page1: boolean;
	page2: boolean;
	page3: boolean;
	page4: boolean;
	[key: string]: boolean;
};

const PageSelector = ({ onDone }: { onDone: (selected: string[]) => void }) => {
	const [selectedPages, setSelectedPages] = useState<PageState>({
		allPages: false,
		page1: false,
		page2: false,
		page3: false,
		page4: false,
	});

	const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		setSelectedPages({
			allPages: isChecked,
			page1: isChecked,
			page2: isChecked,
			page3: isChecked,
			page4: isChecked,
		});
	};

	const handleCheckboxChange = (page: string) => {
		setSelectedPages((prev) => {
			const updated = { ...prev, [page]: !prev[page] };

			if (page !== "allPages") {
				const allSelected =
					updated.page1 && updated.page2 && updated.page3 && updated.page4;

				updated.allPages = allSelected;
			}

			return updated;
		});
	};

	const resetCheckboxes = () => {
		setSelectedPages({
			allPages: false,
			page1: false,
			page2: false,
			page3: false,
			page4: false,
		});
	};

	const handleDone = () => {
		const selected = Object.entries(selectedPages)
			.filter(([key, value]) => key !== "allPages" && value)
			.map(([key]) => key);

		if (onDone) onDone(selected);

		// Reset all checkboxes after done
		resetCheckboxes();
	};

	return (
		<div className='w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6'>
			<div className='space-y-4'>
				<div className='flex items-center justify-between py-2 border-b border-gray-200'>
					<span className='text-gray-700'>All pages</span>
					<CustomCheckbox
						checked={selectedPages.allPages}
						onChange={handleSelectAll}
					/>
				</div>

				<div className='flex items-center justify-between py-2'>
					<span className='text-gray-700'>Page 1</span>
					<CustomCheckbox
						checked={selectedPages.page1}
						onChange={() => handleCheckboxChange("page1")}
					/>
				</div>

				<div className='flex items-center justify-between py-2'>
					<span className='text-gray-700'>Page 2</span>
					<CustomCheckbox
						checked={selectedPages.page2}
						onChange={() => handleCheckboxChange("page2")}
					/>
				</div>

				<div className='flex items-center justify-between py-2'>
					<span className='text-gray-700'>Page 3</span>
					<CustomCheckbox
						checked={selectedPages.page3}
						onChange={() => handleCheckboxChange("page3")}
					/>
				</div>

				<div className='flex items-center justify-between py-2'>
					<span className='text-gray-700'>Page 4</span>
					<CustomCheckbox
						checked={selectedPages.page4}
						onChange={() => handleCheckboxChange("page4")}
					/>
				</div>

				<div className='pt-4 border-t border-gray-200'>
					<button
						onClick={handleDone}
						className='w-full bg-[#FFCE22] hover:bg-[#FFD84D] text-gray-800 font-medium py-3 px-4 rounded transition duration-150 ease-in-out'>
						Done
					</button>
				</div>
			</div>
		</div>
	);
};

export default PageSelector;
