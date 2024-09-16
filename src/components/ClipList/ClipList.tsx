import { sectionStyles } from "../../constants"
import { Clip } from "../../context/Clip/ClipProvider.types"
import ClipCard from "./components/ClipCard/ClipCard"

const ClipList = () => {
  const list: Clip[] = [
    { id: "so", variant: "text", title: "Email", content: "esma.berra.karaman@hotmail.com" },
    { id: "swo", variant: "url", title: "Linkedin Profile", content: "https://www.linkedin.com/in/berra-karaman-3936471b0/" },
    { id: "sqo", variant: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "sero", variant: "url", title: "Github", content: "https://github.com/brrkrmn?tab=repositories" },
    { id: "swerweo", variant: "text", title: "License", content: "MIT license" },
    { id: "swero", variant: "text", title: "This", content: "mock content" },
    { id: "sqaaqo", variant: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "s123qo", variant: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "s3qo", variant: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "sq", variant: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "swsdfvo", variant: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "sq;sofdko", variant: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "ssofqo", variant: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "sq3iqo", variant: "password", title: "Code&Line password", content: "somethingsomething123" },

  ]
  return (
    <div className={`${sectionStyles} overflow-scroll flex-col py-4 gap-3`}>
      {list.map((clip) => (
        <ClipCard clip={clip}/>
      ))}
    </div>
  )
}

export default ClipList