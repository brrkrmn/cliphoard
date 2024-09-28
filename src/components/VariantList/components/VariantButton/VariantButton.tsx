import { useModalContext } from "../../../../context/Modal";
import { Variant } from "../../VariantList.types";

const VariantButton = ({ variant }: { variant: Variant }) => {
  const { setSelectedVariant, selectedVariant } = useModalContext()
  const variantStyles = selectedVariant !== "" && selectedVariant.type === variant.type ? variant.selectedStyles : variant.styles;

  const onClick = () => {
    setSelectedVariant(variant)
  }

  return (
    <button
      type="button"
      onClick={onClick}
      data-microtip-position="bottom"
      role="tooltip"
      aria-label={variant.name}
      className={`${variantStyles} transition-all duration-300 w-12 h-12 border-2 rounded-full flex justify-center items-center`}
    >
      <span className="material-symbols-outlined w-6 h-6">{variant.icon}</span>
    </button>
  )
}

export default VariantButton;