import Repo from "@/app/components/Repo"

interface PagePramas {
    params: { name : string}
}

const RepoPage = ({params}: PagePramas) => {
  return (
    <div>
      <Repo name={params.name} />
    </div>
  )
}

export default RepoPage
