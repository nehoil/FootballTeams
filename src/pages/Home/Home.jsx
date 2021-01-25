
import './Home.scss'
import Lottie from 'react-lottie';
import * as footballJSON from './football.json';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: footballJSON.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="home-container container">
      <div className="text-img">
      <h1>View, Search, and save your favorite Football teams!</h1>
      <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      <Link to="/teams">
      <Button>START NOW ⚽</Button>
      </Link>
    </div>
  );
}