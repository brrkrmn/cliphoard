import { clipVariants } from "../../../../constants"
import VariantButton from "../VariantButton/VariantButton"

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