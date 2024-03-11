export default function formatMoney(
	value: number,
	locale: {
		sign: string;
		locale: string;
	} = {
		sign: 'R$',
		locale: 'pt-BR',
	},
) {
	return (
		locale.sign +
		Number(value).toLocaleString(locale.locale, {
			style: 'decimal',
			maximumFractionDigits: 2,
			minimumFractionDigits: 2,
		})
	);
}
