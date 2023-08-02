async function fetchRepoContents(name: string) {
	const response = await fetch(
		`https://api.github.com/repos/farhanazam41/${name}/contents`
	);
	const res = await response.json();
	return res;
}

const RepoDirs = async ({ name }: { name: string }) => {
	const contents = await fetchRepoContents(name);
	const dirs = contents.filter((dir: any) => dir.type === 'dirs')
    console.log(dirs,'dirs')
	return <div></div>;
};

export default RepoDirs;
