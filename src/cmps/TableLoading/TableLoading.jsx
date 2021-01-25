import Lottie from 'react-lottie';
import * as loadingJSON from './loading.json';


export default function TableLoading({ loading, elg, user }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJSON.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };


  return (
    <div className="ElgFinishLoading-main-container">
        <Lottie options={defaultOptions} height={120} width={120} />
    </div>
  );
}
