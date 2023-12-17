import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div style={{ height: "300px",width: '100%', display: 'flex', justifyContent:'center', alignItems: 'center' }}>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
