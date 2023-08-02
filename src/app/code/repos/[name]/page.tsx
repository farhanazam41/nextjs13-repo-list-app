import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

interface PagePramas {
	params: { name: string };
}

const RepoPage = ({ params }: PagePramas) => {
	return (
		<div>
			<Repo name={params.name} />
      <RepoDirs name={params.name} />
		</div>
	);
};

export default RepoPage;
