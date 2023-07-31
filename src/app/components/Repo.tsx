async function fetchRepo(name: string) {
	const response = await fetch(
		`https://api.github.com/repos/farhanazam41/${name}`,
		{ cache: "no-cache" }
	);
	const res = await response.json();
	return res;
}

const Repo = async ({ name }: { name: string }) => {
	console.log(name, "name");
	const repo = await fetchRepo(name);
    console.log(repo,'repo')
	return <div></div>;
};

export default Repo;
