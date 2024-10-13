import { Spin } from "antd";

const Loader = () => {
  return (
    <Spin style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
  )
};

export default Loader;
