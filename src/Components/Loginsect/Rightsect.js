import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import "./LoginStyle.css";

function Rightsect() {
	return (
		<div className="right-sect">
			<Container>
				<Stack spacing={5}>
					<h2>Login</h2>

					<TextField label="Email" type="email" variant="filled" />
					<TextField label="Password" type="password" variant="filled" />
					<Button variant="contained">Login</Button>
				</Stack>
			</Container>
		</div>
	);
}

export default Rightsect;
