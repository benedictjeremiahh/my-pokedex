import { Backdrop, Button, Fade, Grid, Modal } from "@material-ui/core";
import React from "react";
import { useStyles } from "./ModalReleaseConfirmation.styles";

const ModalReleaseConfirmation = (props) => {
	const { open, onConfirm, nickname } = props;
	const classes = useStyles();

	const onYesConfirm = () => {
		onConfirm(true);
	};

	const onNoConfirm = () => {
		onConfirm(false);
	};

	if (!open) return null;
	return (
		<Modal
			className={classes.modal}
			open={open}
			onClose={onNoConfirm}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
			data-testid="modal-release-confirmation"
		>
			<Fade in={open}>
				<Grid container className={classes.content}>
					<Grid item xs={12} className={classes.modalTitle}>
						Are you sure?
					</Grid>
					<Grid
						item
						xs={12}
						className={classes.modalSubTitle}
						data-testid="modal-release-confirmation-subtitle"
					>
						You are about to release <b>{nickname}</b> back to its
						habitat, are you sure you want to do this?
					</Grid>
					<Grid
						component={Button}
						item
						xs={12}
						md={4}
						className={`${classes.buttonConfirmation} ${classes.danger}`}
						onClick={onYesConfirm}
						data-testid="modal-release-confirmation-yes-confirm"
					>
						Yes, I am sure
					</Grid>
					<Grid
						component={Button}
						item
						xs={12}
						md={4}
						className={`${classes.buttonConfirmation} ${classes.success}`}
						onClick={onNoConfirm}
						data-testid="modal-release-confirmation-no-confirm"
					>
						No, Let me think
					</Grid>
				</Grid>
			</Fade>
		</Modal>
	);
};

export default ModalReleaseConfirmation;
