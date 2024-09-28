import VariantButton from "./components/VariantButton/VariantButton"
import { clipVariants } from "./constants"

const VariantList = () => {
  return (
    <div className="flex items-center justify-center w-full gap-4">
      {clipVariants.map(variant => (
        <VariantButton key={variant.type} variant={variant} />
      ))}
    </div>
  )
}

export default VariantList