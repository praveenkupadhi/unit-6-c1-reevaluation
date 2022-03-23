import { NavLink } from "react-router-dom";

const links = [
	{
		title: "Home",
		link: "/",
	},
	//   add the other link as well
	{
		title: "About",
		link: "/about",
	},
	{
		title: "Products",
		link: "/products",
	},
];
export const Navbar = () => {
	return (
		//map through the link and display it in header
		<header>
			{links.map((e, i) => {
				return (
					<NavLink to={e.link} key={i}>
						{e.title}
					</NavLink>
				);
			})}
		</header>
	);
};
