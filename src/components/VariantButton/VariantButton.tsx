import { useModalContext } from "../../context/Modal"
import { ClipVariant } from "../../context/Modal/ModalProvider.types"

const VariantButton = ({ variant }: { variant: ClipVariant }) => {
  const { setSelectedVariant, selectedVariant } = useModalContext()

  const onClick = () => {
    setSelectedVariant(variant.type)
  }

  return (
    <button
      type="button"
      onClick={onClick}
      data-microtip-position="bottom"
      role="tooltip"
      aria-label={variant.type}
      className={`${variant.borderStyle} ${variant.textStyle} ${variant.bgStyle} ${selectedVariant === variant.type && variant.selectedStyle} transition-all duration-300 w-12 h-12 bg-white border-2 hover:text-white rounded-full flex justify-center items-center`}
    >
      <span className="material-symbols-outlined w-6 h-6">{variant.icon}</span>
    </button>
  )
}

export default VariantButton;