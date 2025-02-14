export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours-1}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}