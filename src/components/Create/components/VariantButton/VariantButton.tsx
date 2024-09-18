import { useCreateClipContext } from "../../../../context/CreateClip";
import { ClipVariant } from "../../../../context/CreateClip/CreateClipProvider.types";

const VariantButton = ({ variant }: { variant: ClipVariant }) => {
  const { setSelectedVariant, selectedVariant, setStep } = useCreateClipContext()

  const onClick = () => {
    setSelectedVariant(variant.type)
    setStep("create-form")
  }

  return (
    <button
      onClick={onClick}
      className={`${variant.borderStyle} ${variant.textStyle} ${variant.bgStyle} ${selectedVariant === variant.type && variant.selectedStyle} transition-all duration-300 w-12 h-12 bg-background-white border-2 hover:text-foreground-white rounded-full flex justify-center items-center`}
    >
      <span className="material-symbols-outlined w-6 h-6">{variant.icon}</span>
    </button>
  )
}

export default VariantButton;