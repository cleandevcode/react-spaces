import EarthImg from "../assets/img/earth.jpeg";
import JupiterImg from "../assets/img/jupiter.jpeg";
import MarsImg from "../assets/img/mars.jpeg";
import MercuryImg from "../assets/img/mercury.jpeg";
import SaturnImg from "../assets/img/saturn.jpeg";
import VenusImg from "../assets/img/venus.jpeg";

const images = [
  {
    name: "Earth",
    value: EarthImg,
  },
  {
    name: "Jupiter",
    value: JupiterImg,
  },
  {
    name: "Mars",
    value: MarsImg,
  },
  {
    name: "Mercury",
    value: MercuryImg,
  },
  {
    name: "Saturn",
    value: SaturnImg,
  },
  {
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

  console.log(">>>>>>", _result);
  return _result?.[0]?.value;
}
