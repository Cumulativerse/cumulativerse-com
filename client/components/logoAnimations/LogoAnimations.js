// React SVG
import { ReactSVG } from 'react-svg';
import logo from 'assets/images/Cumulativerse.svg';

export function HeapversesOneWayRotation({ width = "100px" }) {
  const svgStyle = {
    width: width
  };

  return (
    <ReactSVG src={logo.src} style={svgStyle} afterInjection={(_err, svg) => {
      // List of all heapverse circles in svg element
      const heapverses = svg.getElementById("Heapverses").children;
      for (let i = 0; i < heapverses.length; i++) {
        const radius = parseFloat(heapverses[i].getAttribute('r'));
        const cx = parseFloat(heapverses[i].getAttribute('cx'));
        const cy = parseFloat(heapverses[i].getAttribute('cy'));
        const newCx = radius / 3 + cx;
        heapverses[i].setAttribute("cx", newCx);
        heapverses[i].setAttribute("style", "animation: rotate-full 1s linear infinite both; transform-origin: " + cx + "px " + cy + "px;")
      };
    }} />
  );
}