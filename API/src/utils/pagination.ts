import { Constants } from 'src/config/constants.config';

export const getPagination = ({ page, records_per_page }: any) => {
	return {
		page: +page || 0,
		records_per_page:
			Math.min(records_per_page, Constants.MAX_RECORDS_PER_PAGE) ||
			Constants.MAX_RECORDS_PER_PAGE,
	};
};
