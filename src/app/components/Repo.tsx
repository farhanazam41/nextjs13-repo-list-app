import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name: string) {
	const response = await fetch(
		`https://api.github.com/repos/farhanazam41/${name}`,
		{ cache: "no-cache" }
	);
	const res = await response.json();
	return res;
}

const Repo = async ({ name }: { name: string }) => {
	const repo = await fetchRepo(name);

	return (
		<>
			<h2>{repo.name}</h2>
			<p>{repo.description}</p>
			<div className='card-stats'>
				<div className='card-stat'>
					<FaStar />
					<span>{repo.stargazers_count}</span>
				</div>
				<div className='card-stat'>
					<FaCodeBranch />
					<span>{repo.forks_count}</span>
				</div>
				<div className='card-stat'>
					<FaEye />
					<span>{repo.watchers_count}</span>
				</div>
			</div>
		</>
	);
};

export default Repo;
