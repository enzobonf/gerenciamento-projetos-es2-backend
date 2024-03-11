import { format, toDate, formatInTimeZone } from 'date-fns-tz';

export default function formatDateToTimeZone(
	date: Date | string,
	timezone: string,
) {
	const dateAux =
		formatInTimeZone(new Date(date), timezone, 'yyyy-MM-dd') + 'T00:00:00';

	return new Date(dateAux);
}
