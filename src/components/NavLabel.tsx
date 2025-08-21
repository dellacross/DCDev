import { NavLabelProps } from "../types/NavLabel.type"

const NavLabel = ({ label, color, extraclass }: NavLabelProps) => {
  return (
    <p className={`text-white mx-[10px] lg:flex hidden bg-[#262626] w-max px-4 py-[2px] border-b border-[${color}] border-solid text-[${color}] ${extraclass}`}>
        { label }
    </p>
  )
}

export default NavLabel