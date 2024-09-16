import { sectionStyles } from "../../constants"
import Clip, { ClipValue } from "../Clip/Clip"

const ClipList = () => {
  const list: ClipValue[] = [
    { id: "so", type: "text", title: "Email", content: "esma.berra.karaman@hotmail.com" },
    { id: "swo", type: "url", title: "Linkedin Profile", content: "https://www.linkedin.com/in/berra-karaman-3936471b0/" },
    { id: "sqo", type: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "sero", type: "url", title: "Github", content: "https://github.com/brrkrmn?tab=repositories" },
    { id: "swerweo", type: "text", title: "License", content: "MIT license" },
    { id: "swero", type: "text", title: "This", content: "mock content" },
    { id: "sqaaqo", type: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "s123qo", type: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "s3qo", type: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "sq", type: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "swsdfvo", type: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "sq;sofdko", type: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "ssofqo", type: "password", title: "Code&Line password", content: "somethingsomething123" },
    { id: "sq3iqo", type: "password", title: "Code&Line password", content: "somethingsomething123" },

  ]
  return (
    <div className={`${sectionStyles} overflow-scroll flex-col py-4 gap-3`}>
      {list.map((clip, index) => (
        <Clip clip={clip}/>
      ))}
    </div>
  )
}

export default ClipList