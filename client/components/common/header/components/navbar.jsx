import {
	Badge,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const pages = [
	{
		id: 1,
		name: "Home",
		path: "/",
	},
	{
		id: 2,
		name: "Shop",
		path: "/shop",
	},
	{
		id: 3,
		name: "Blogs",
		path: "/blog",
	},
	{
		id: 4,
		name: "Abouts",
		path: "/about",
	},
];

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default function Navbar(props) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	useEffect(() => {
		return () => {
			document.addEventListener("scroll", () => {
				setAnchorEl(null);
			});
		};
	}, [anchorEl]);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar
					sx={{
						padding: "0 48px",
						position: "unset",
						backgroundColor: "transparent",
						color: "black",
						alignItems: "center",
						boxShadow: "none",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Typography
						variant="h5"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						SELL
					</Typography>
					<Toolbar>
						<Box
							sx={{
								display: { xs: "none", md: "flex" },
							}}
						>
							{pages.map((item, index) => (
								<Box
									key={index}
									sx={{
										margin: "8px 16px",
										padding: "8px 16px",
										display: "inherit",
										color: "black",
										"&:hover": {
											color: "gray",
											bgcolor: "transparent",
										},
									}}
								>
									<Link href={item.path}>{item.name}</Link>
									<Box>
										<KeyboardArrowDownIcon />
									</Box>
								</Box>
							))}
						</Box>
					</Toolbar>
					<Stack direction="row" spacing={2}>
						<IconButton>
							<BiSearch size={24} />
						</IconButton>
						<IconButton
							id="basic-button"
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						>
							<HiOutlineUserCircle size={24} />
						</IconButton>
						<IconButton>
							<Link href="/cart">
								<Badge badgeContent={3} color="primary">
									<BsCart2 size={24} />
								</Badge>
							</Link>
						</IconButton>
					</Stack>
					<Menu
						disableScrollLock={true}
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu>
				</AppBar>
			</ElevationScroll>
		</React.Fragment>
	);
}
