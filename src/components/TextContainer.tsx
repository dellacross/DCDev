const TextContainer = ({ content }: { content?: string }) => {
  return (
    <div className='whitespace-pre-line text-sm py-2 px-1 hyphens-auto text-white lg:overflow-y-auto'>{ content }</div>
  )
}

export default TextContainer