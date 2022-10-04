import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function ControlledAccordions(props) {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box bgcolor="transparent">
			<Accordion
				sx={{ boxShadow: "none" }}
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon fontSize="large" />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					sx={{ paddingLeft: "0", flexDirection: "row-reverse" }}
				>
					<Typography
						sx={{ flexShrink: 0, paddingLeft: "16px" }}
						fontWeight="bold"
						variant="h5"
					>
						{props.name}
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ paddingTop: "0" }}>
					{props.children}
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}
