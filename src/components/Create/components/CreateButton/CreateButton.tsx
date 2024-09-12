const CreateButton = ({ onClick }: { onClick: () => void}) => {
  return (
    <button onClick={onClick} className="rounded-3xl border-2 border-border-blue text-foreground-blue bg-background-white px-6 py-[6px] font-bold text-sm hover:text-foreground-white hover:bg-background-blue hover:border-background-blue transition">Create</button>
  )
}

export default CreateButton;