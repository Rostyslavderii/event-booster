import axios from 'axios';
export class EventsAPI {
  static #apikey = 'GfgVh4R7D4nbAHFUVOA6O71Si5aOA40O';
  static #params = {
    countryCode: 'us',
  };
  static #totalPages = 0;
  static #currentPage = 0;
  /**
   *
   * @param {options} options - Object of options of query look into API_DOC
   *
   * @returns - Array of events
   */
  static async getEvents(options = {}) {
    const { countryCode = '', keyword = '', size = '' } = options;
    if (keyword.trim() || countryCode.trim()) {
      this.#params = {
        ...options,
      };
    }
    try {
      const res = await axios.get(
        'https://app.ticketmaster.com/discovery/v2/events.json',
        {
          params: {
            ...this.#params,
            apikey: this.#apikey,
          },
        }
      );

      await ({ totalPages: this.#totalPages, number: this.#currentPage } =
        res.data.page);
      return res.data._embedded.events;
    } catch (e) {
      console.log(e);
    }
  }
  /**
   *
   * @returns - Current page of Query. Start from ZERO
   */
  static getCurrentPage() {
    return this.#currentPage;
  }
  /**
   *
   * @returns - Total pages of events
   */
  static getTotalPages() {
    return this.#totalPages;
  }
}
