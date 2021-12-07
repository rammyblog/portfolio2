import JavascriptSVG from '../assets/svg/javascript.svg?component';
import CssSVG from '../assets/svg/css.svg?url';
import ReactSVG from '../assets/svg/react.svg?component';
// import HTMLSVG from '../assets/svg/html-5.svg?component';
// import NodeSVG from '../assets/svg/nodejs.svg?component';
// import PythonSVG from '../assets/svg/python.svg?component';

const Skills = () => {
  return (
    <div>
      <ReactSVG />
      <img src={CssSVG} alt="" srcset="" />
      <JavascriptSVG />
      {/* <CssSVG />
      <HTMLSVG />
      <NodeSVG />
      <PythonSVG /> */}
    </div>
  );
};

export default Skills;
