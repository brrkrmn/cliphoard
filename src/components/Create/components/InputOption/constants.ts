import { Option } from "../../../../context/appProvider.types";

export const inputOptions: Option[] = [
  {
    type: "text",
    color: "blue",
    icon: "match_case",
    inputType: "text"
  },
  {
    type: "password",
    color: "red",
    icon: "vpn_key",
    inputType: "password"
  },
  {
    type: "url",
    color: "yellow",
    icon: "link",
    inputType: "url"
  },
  {
    type: "code",
    color: "green",
    icon: "code",
    inputType: "text"
  }
]