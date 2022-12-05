import axios from 'axios';

export class EventsAPI {
  static apikey = 'GfgVh4R7D4nbAHFUVOA6O71Si5aOA40O';
  static params = {
    countryCode: 'us',
  };
  static page = '0';
  static countryCode = 'us';
  static keyword = '';
  static totalPages = 0;
  static currentPage = 0;
  /**
   *
   * @param {options} options - Object of options of query look into API_DOC
   *
   * @returns - Array of events
   */
  static async getEvents(options = {}) {
    const { countryCode = '', keyword = '', page } = options;
    if (keyword.trim() || countryCode.trim() || page) {
      try {
        const res = await axios.get(
          'https://app.ticketmaster.com/discovery/v2/events.json',
          {
            params: {
              page,
              countryCode,
              keyword,
              apikey: EventsAPI.apikey,
            },
          }
        );

        return res.data;
      } catch (e) {}
    } else
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

        return res.data;
      } catch (e) {}
  }
  static async getEvent(id) {
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
    } catch (e) {}
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
    return EventsAPI.getEvents();
  }
}
