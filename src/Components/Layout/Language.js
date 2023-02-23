import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";
import TranslateIcon from "@mui/icons-material/Translate";
import i18next from "i18next";

function Language(props) {
	const lang = Cookies.get("i18next") || "en";

	function changeLanugage(lang) {
		i18next.changeLanguage(lang);
		if (lang === "ar") {
			document.body.dir = "rtl";
		} else {
			document.body.dir = "ltr";
		}
	}
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	return (
		<div>
			{" "}
			<Button
				sx={{ mr: 0 }}
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<TranslateIcon />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={(handleClose, () => changeLanugage("ar"))}>
					Arabic
				</MenuItem>
				<MenuItem onClick={(handleClose, () => changeLanugage("en"))}>
					English
				</MenuItem>
			</Menu>
		</div>
	);
}

export default Language;
