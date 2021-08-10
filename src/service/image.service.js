import EarthImg from "../../public/assets/img/earth.jpeg";
import JupiterImg from "../../public/assets/img/jupiter.jpeg";
import MarsImg from "../../public/assets/img/mars.jpeg";
import MercuryImg from "../../public/assets/img/mercury.jpeg";
import SaturnImg from "../../public/assets/img/saturn.jpeg";
import VenusImg from "../../public/assets/img/venus.jpeg";

const images = [
  {
    id: 0,
    name: "Earth",
    value: EarthImg,
  },
  {
    id: 1,
    name: "Jupiter",
    value: JupiterImg,
  },
  {
    id: 2,
    name: "Mars",
    value: MarsImg,
  },
  { id: 3, name: "Mercury", value: MercuryImg },
  {
    id: 4,
    name: "Saturn",
    value: SaturnImg,
  },
  {
    id: 5,
    name: "Venus",
    value: VenusImg,
  },
];

function removeSpace(str) {
  return str.replace(/\s/g, "");
}

export function imageService(name) {
  const _name = removeSpace(name).toLowerCase();
  const _result = images.filter((ele) =>
    ele.name.toLowerCase().includes(_name)
  );

  return _result?.[0]?.value;
}
