import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings, Task } from "@mui/icons-material";

// GET Icons:
const getIcon = (icon) => {
	switch (icon) {
		case "HOME":
			return <Home></Home>;
		case "TASK":
			return <Task></Task>;
		case "SETTINGS":
			return <Settings></Settings>;
		default:
			return <Home></Home>;
	}
};
const MenuListItem = ({ list }) => {
	const nav = useNavigate();
	const myNavigate = (path) => {
		nav(path);
	};
	return (
		<List>
			{list.map(({ text, path, icon }, index) => {
				return (
					<ListItem key={index} button onClick={() => myNavigate(path)}>
						<ListItemIcon>{getIcon(icon)}</ListItemIcon>
						<ListItemText primary={text}></ListItemText>
					</ListItem>
				);
			})}
		</List>
	);
};

export default MenuListItem;
