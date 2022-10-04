import CallIcon from "@mui/icons-material/Call";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function HeaderContact() {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			p={2}
			backgroundColor="white"
			zIndex={100}
		>
			<Box display="flex">
				<CallIcon sx={{ marginRight: "8px" }} />
				<Typography>020-800-456-747</Typography>
				<Divider
					sx={{
						margin: "0 8px",
						width: "1px",
						backgroundColor: "gray",
					}}
				/>
				<Typography>Free shipping on orders over $300</Typography>
			</Box>
		</Box>
	);
}
