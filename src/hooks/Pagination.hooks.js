import { useState } from "react";

const usePagination = ({ defaultPage, defaultOffset, limit }) => {
	const [page, setPage] = useState(defaultPage);
	const [offset, setOffset] = useState(defaultOffset);

	const onChangePagination = (e, pageNumber) => {
		setPage(pageNumber);
		if (pageNumber === 1) {
			setOffset(0);
		} else {
			setOffset((pageNumber - 1) * limit + 1);
		}
	};

	return [page, offset, onChangePagination];
};

export default usePagination;
