import './Welcome.scss';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import assistImg from '../../assets/img/assist/assist.welcome.png'

export default function NavBar() {
  const dispatch = useDispatch();
  function onNext() {
      dispatch(({type: 'FINISH_STEP_2'}), )
  }
  return <div className="welcome-main-container">
    <div className="welcome-img">
      <img src={assistImg} alt=""/>
    </div>
      <div className="welcome-txt">
      <h1>היי, אני דידו.</h1>
      <h2>נעים להכיר!</h2>
      <h3>אני הולכת ללות אותך בתהליך הגשת ההקלות לפסיכומטרי!
      </h3>
      <h3>בשביל להתחיל, קודם כל אני רוצה לראות שיש לך באמת אפשרות לקבל הקלות.
      </h3>
      </div>
      <Button type="primary" onClick={()=> onNext()}>נשמע טוב, בואי נתחיל!<LeftOutlined /></Button>

  </div>;
}
