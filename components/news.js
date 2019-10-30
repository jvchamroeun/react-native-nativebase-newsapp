import { API_URL, API_URL_2, API_KEY, country_code, category, query } from "./constants.js";

export async function getArticles() {

	try {
		let articles = await fetch(`${API_URL}?country=${country_code}&category=${category}`, {
			headers: {
				'X-API-KEY': API_KEY
			}
		});

		let result = await articles.json();
		articles = null;

		return result.articles;
	}
	catch(error) {
		throw error;
	}
}

// ${API_URL}?country=${country_code}&category=${category}
// ${API_URL_2}?q=${query}