import { ChevronDown, ChevronUp } from "lucide-react"
import { ListButtonProps } from "../types/ListButton.type"

const ListButton = ({ state, setter, label, color }: ListButtonProps) => {
  return (
    <button
        onClick={() => setter(!state)}
        className={`lg:hidden flex text-white mx-[10px] flex bg-[#262626] w-max px-2 py-[2px] border-b border-[${color}] border-solid text-white gap-2`}
    >
        { state ? <ChevronUp /> : <ChevronDown /> }
        { label }
    </button>
  )
}

export default ListButton