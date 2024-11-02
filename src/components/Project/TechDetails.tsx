import { BadgeClear } from "../Badge/BadgeClear";

interface TechDataProps {
  techData: string[],
  title: string
}

function TechDetails({techData = [""], title}: TechDataProps) {
  return (
    <p className="text-slate-400 text-sm m-2">
      {title}
      <div className="flex flex-wrap gap-2">
        {
          techData.map(element => <BadgeClear key={element}>{element}</BadgeClear>)
        }
      </div>
    </p>
  )
}

export default TechDetails;