export const roundToTwoDigitsAfterComma = (floatNumber) => {
	return parseFloat((Math.round(floatNumber * 100) / 100).toFixed(2));
};

export const cleanString = (string) => string.replace(/[^a-zA-Z ]/g, " ");
