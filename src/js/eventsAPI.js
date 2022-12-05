
import axios from 'axios';
export class EventsAPI {
	static apikey = 'GfgVh4R7D4nbAHFUVOA6O71Si5aOA40O';
	static params = {
		countryCode: 'us',
	};
	static totalPages = 0;
	static currentPage = 0;
	/**
	 *
	 * @param {options} options - Object of options of query look into API_DOC
	 *
	 * @returns - Array of events
	 */
	static async getEvents(options = {}) {
		const { countryCode = '', keyword = '', size = '', page = '' } = options;
		if (keyword.trim() || countryCode.trim() || page != EventsAPI.currentPage) {
			EventsAPI.params = {
				...options,
			};
		}
		try {
			const res = await axios.get(
				'https://app.ticketmaster.com/discovery/v2/events.json',
				{
					params: {
						...EventsAPI.params,
						apikey: EventsAPI.apikey,
					},
				}
			);
			await ({
				totalPages: EventsAPI.totalPages,
				number: EventsAPI.currentPage,
			} = res.data.page);
			return res.data._embedded.events;
		} catch (e) { }
	}

	static async getEvent(id) {
		let event;
		try {
			const res = await axios.get(
				`https://app.ticketmaster.com/discovery/v2/events/${id}.json`,
				{
					params: {
						apikey: EventsAPI.apikey,
					},
				}
			);

			return res;
		} catch (e) { }
	}
	/**
	 *
	 * @returns - Current page of Query. Start from ZERO
	 */
	static getCurrentPage() {
		return EventsAPI.currentPage;
	}
	/**
	 *
	 * @returns - Total pages of events
	 */
	static getTotalPages() {
		return EventsAPI.totalPages;
	}
}

