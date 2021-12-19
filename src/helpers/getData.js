export default function getData({ url, text, options }) {
	const finalyUrl = url + 'search=' + text;
	const response = fetch(`${finalyUrl}`, {
		...options,
		method: 'GET',
	}).then((answer) => {
		if (answer.ok) {
			return answer.json();
		}

		return answer.json().then((error) => {
			const err = new Error('Oops..., something went wrong');
			err.data = error;
			throw err;
		});
	});

	return response;
}
