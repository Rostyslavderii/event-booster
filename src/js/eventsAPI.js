import axios from 'axios';

export class EventsAPI {
	static apikey = 'GfgVh4R7D4nbAHFUVOA6O71Si5aOA40O';
	static params = {
		countryCode: 'us',
	};
	static page = "0";
	static countryCode = "us"
	static keyword = "";
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
		if (keyword.trim() || countryCode.trim()) {
			EventsAPI.countryCode = countryCode;
			EventsAPI.keyword = keyword;
		}
		if(page != EventsAPI.currentPage){
			EventsAPI.page= page;
		}
		try {
			const res = await axios.get(
				'https://app.ticketmaster.com/discovery/v2/events.json',
				{
					params: {
						page: EventsAPI.page,
						countryCode: EventsAPI.countryCode,
						keyword: EventsAPI.keyword,
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

const id = 'vvG1HZ92maYSm6';
const event = EventsAPI.getEvent(id);
console.log(event);
event.then(r => console.log(r.data));
