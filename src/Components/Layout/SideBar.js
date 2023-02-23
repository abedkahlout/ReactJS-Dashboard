import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import "./Layout.css";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { NavLink } from "react-router-dom";
import React from "react";
import { t } from "i18next";

const topics = [
	{
		title: "Dashboard",
		icon: HomeOutlinedIcon,
		link: "home",
	},
	{
		title: "Products",
		icon: SourceOutlinedIcon,
		link: "product",
	},
	{
		title: "CodeQR",
		icon: QrCodeOutlinedIcon,
		link: "",
	},
	{
		title: "Numbers",
		icon: BarChartOutlinedIcon,
		link: "",
	},
	{
		title: "Card",
		icon: CreditCardOutlinedIcon,
		link: "",
	},
	{
		title: "Categories",
		icon: ProductionQuantityLimitsIcon,
		link: "",
	},
];
function SideBar() {
	return (
		<div>
			<div>
				<Toolbar>
					<Typography className="Logo" variant="h6">
						AbedELqaderLogo
					</Typography>
				</Toolbar>

				<List className="routing">
					{topics.map((item, index) => (
						<NavLink  to={`/${item.link}`}>
							<ListItem key={item.title + index + "o"} disablePadding>
								<ListItemButton>
									<ListItemIcon className="icon-theme">
										<item.icon />
									</ListItemIcon>
									<ListItemText primary={t(item.title)} sx={{ textAlign: "start" }} />
								</ListItemButton>
							</ListItem>
						</NavLink>
					))}
					        
					
				</List>
			</div>
		</div>
	);
}

export default SideBar;
