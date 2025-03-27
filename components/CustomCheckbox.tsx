"use client";

import Image from "next/image";
import React, { ChangeEvent } from "react";

export default function CustomCheckbox({
	checked,
	onChange,
}: {
	checked: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}): React.ReactElement {
	return (
		<div className='relative inline-block'>
			<input
				type='checkbox'
				checked={checked}
				onChange={onChange}
				className='peer sr-only'
			/>
			<div
				className={`
          h-5 w-5 rounded cursor-pointer
          border transition-colors duration-200
          ${
						checked
							? "bg-[#2469F6] border-[#2469F6]"
							: "bg-white border-gray-300"
					}
          peer-focus:ring-2 peer-focus:ring-offset-1 peer-focus:ring-blue-100
        `}
				onClick={() => {
					const syntheticEvent = {
						target: { checked: !checked },
					} as ChangeEvent<HTMLInputElement>;
					onChange(syntheticEvent);
				}}>
				{checked && (
					<Image
						src='/vector.svg'
						alt='Check icon'
						width={16}
						height={16}
						className='absolute inset-0 m-auto'
					/>
				)}
			</div>
		</div>
	);
}
