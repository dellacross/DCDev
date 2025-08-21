import { HighlightedLabelProps } from '../types/HighlightedLabel.type'

const HighlightedLabel = ({ label, color, extraclass }: HighlightedLabelProps) => {
  return (
    <div className={`flex text-lg px-4 py-2 bg-[${color}30] text-[${color}] min-h-[50px] items-center ${extraclass}`}>
      { label }
    </div>
  )
}

export default HighlightedLabel