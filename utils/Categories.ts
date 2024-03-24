
import { MdOutlinePiano, MdStorefront } from "react-icons/md";
import { GiSaxophone ,GiMicrophone, GiPortugal } from "react-icons/gi";
import { TbHandRock } from "react-icons/tb";
import { FaRadio } from "react-icons/fa6";

export const categories = [
  {
    label: "Todos",
    icon: MdStorefront,
  },
  {
    label: "Jazz",
    icon: GiSaxophone ,
  },
  {
    label: "Pop",
    icon: GiMicrophone,
  },
  {
    label: "Rock",
    icon: TbHandRock,
  },
  {
    label: "HipHop",
    icon: FaRadio,
  },
  {
    label: "Música clássica",
    icon: MdOutlinePiano,
  },
  {
    label: "Musica Portuguesa",
    icon: GiPortugal,
  },
];
