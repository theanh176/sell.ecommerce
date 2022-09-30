import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "@mui/material";

export default function Media(props) {
	const { loading = false } = props;

	return (
		<Container maxWidth="xl" my={5}>
			<Grid
				container
				wrap="nowrap"
				sx={{ justifyContent: "space-evenly" }}
			>
				{(loading ? Array.from(new Array(4)) : data).map(
					(item, index) => (
						<Box
							key={index}
							sx={{ width: 210, marginRight: 10, my: 5 }}
						>
							{item ? (
								<img
									style={{ width: 210, height: 118 }}
									alt={item.title}
									src={item.src}
								/>
							) : (
								<Skeleton
									variant="rectangular"
									width={210}
									height={118}
								/>
							)}

							{item ? (
								<Box sx={{ pr: 2 }}>
									<Typography gutterBottom variant="body2">
										{item.title}
									</Typography>
									<Typography
										display="block"
										variant="caption"
										color="text.secondary"
									>
										{item.channel}
									</Typography>
									<Typography
										variant="caption"
										color="text.secondary"
									>
										{`${item.views} • ${item.createdAt}`}
									</Typography>
								</Box>
							) : (
								<Box sx={{ pt: 0.5 }}>
									<Skeleton />
									<Skeleton width="60%" />
								</Box>
							)}
						</Box>
					)
				)}
			</Grid>
		</Container>
	);
}

Media.propTypes = {
	loading: PropTypes.bool,
};
