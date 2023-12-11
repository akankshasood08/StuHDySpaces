import { useState } from 'react';

const PasswordInput = ({
	placeholder,
	setter,
	width = "70",
	forgot = false
}: {
	placeholder: string,
	setter: Function,
	width?: string,
	forgot?: boolean
}) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className={`relative w-[${width}%]`}>
			<input
				type={showPassword ? "text" : "password"}
				className="w-[100%] text-2xl mb-5 pb-3 focus:outline-none bg-transparent border-b-2 border-black"
				placeholder={placeholder}
				onChange={e => setter(e.target.value)} />
			<button
				id="toggle-button"
				type="button"
				data-toggle-password='{ "target": "#password-input" }'
				className="absolute -top-2 -end-2 p-3.5 rounded-e-md focus:outline-none"
				onClick={() => setShowPassword(!showPassword)}
			>
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-neutral-600"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
					<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
					<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
					<line
						className={showPassword ? "hidden" : ""}
						x1="2"
						x2="22"
						y1="2"
						y2="22"
					/>
					<path
						className={showPassword ? "block" : "hidden"}
						d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
					/>
					<circle
						className={showPassword ? "block" : "hidden"}
						cx="12"
						cy="12"
						r="3"
					/>
				</svg>
			</button>
			{forgot &&
				<a
					className="absolute right-0 -bottom-3"
					href="/forgot"
				>
					Forgot password?
				</a>
			}

		</div>
	)
}

export default PasswordInput;