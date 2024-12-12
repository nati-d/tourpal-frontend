import React, {ReactNode} from "react";

type HeaderProps = {
	icon: ReactNode;
	title: string;
};

const Header = ({icon, title}: HeaderProps) => {
	return (
		<div className='mb-2'>
			{" "}
			<h2
				className='text-lg font-semibold 
                tracking-wide flex items-center gap-2'
			>
				{icon} {title}
			</h2>
		</div>
	);
};

export default Header;
