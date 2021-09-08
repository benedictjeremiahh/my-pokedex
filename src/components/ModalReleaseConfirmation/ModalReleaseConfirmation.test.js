import { render, screen, fireEvent } from "@testing-library/react";
import ModalReleaseConfirmation from "./ModalReleaseConfirmation.component";

const props = {
	open: false,
	onConfirm: jest.fn(),
	nickname: "ivysaur1",
};

describe("<ModalReleaseConfirmation />", () => {
	test("renders without error", () => {
		render(<ModalReleaseConfirmation {...props} open={true} />);
		const modalReleaseConfirmation = screen.getByTestId(
			"modal-release-confirmation"
		);
		expect(modalReleaseConfirmation).toBeInTheDocument();

		const modalReleaseConfirmationSubtitle = screen.getByTestId(
			"modal-release-confirmation-subtitle"
		);
		expect(modalReleaseConfirmationSubtitle).toHaveTextContent(
			props.nickname
		);
	});

	test("renders null if props open is false / faulty", () => {
		render(<ModalReleaseConfirmation {...props} open={false} />);
		const modalReleaseConfirmation = screen.queryByTestId(
			"modal-release-confirmation"
		);
		expect(modalReleaseConfirmation).not.toBeInTheDocument();
	});

	test("if yes confirm button clicked, calls onConfirm with true", () => {
		render(<ModalReleaseConfirmation {...props} open={true} />);
		const modalReleaseConfirmation = screen.queryByTestId(
			"modal-release-confirmation-yes-confirm"
		);
		fireEvent.click(modalReleaseConfirmation);
		expect(props.onConfirm).toBeCalledTimes(1);
		expect(props.onConfirm).toBeCalledWith(true);
	});

	test("if no confirm button clicked, calls onConfirm with false", () => {
		render(<ModalReleaseConfirmation {...props} open={true} />);
		const modalReleaseConfirmation = screen.queryByTestId(
			"modal-release-confirmation-no-confirm"
		);
		fireEvent.click(modalReleaseConfirmation);
		expect(props.onConfirm).toBeCalledTimes(1);
		expect(props.onConfirm).toBeCalledWith(false);
	});
});
