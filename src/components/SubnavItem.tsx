import { SubnavItemProps } from '../types/SubnavItem.type'

const SubnavItem = ({ currentState, state, setter, color, label }: SubnavItemProps) => {
  return (
    <button 
        className={`h-[30px] text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-b ${currentState === state ? `border-[${color}]` : 'border-transparent'}`}
        onClick={() => setter(state)}
    >
        { label }
    </button>
  )
}

export default SubnavItem