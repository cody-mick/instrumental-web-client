export function titleCase(str: any) {
	const sentence = str.toLowerCase().split(" ");
	for (let i = 0; i < sentence.length; i++) {
		sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
	}
	sentence.join(" ");
	return sentence;
}

export default titleCase;
