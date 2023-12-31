import React, { createContext, useContext, useEffect, useState } from 'react';
import SelectContent from '../components/suggest/SelectContent';
import { setPage } from '../App';
import SuggestDetail from '../components/suggest/SuggestDetail';
import SuggestConfirm from '../components/suggest/SuggestConfirm';
export const feedback = createContext();

export default function Suggest() {
  const [suggestType, setSuggestType] = useState('mine');
  const [suggestInfo, setSuggestInfo] = useState([]);
  const [myResInfo, setMyResInfo] = useState({});
  const [showTitle, setShowTitle] = useState(true);

  const { componentPage, setComponentPage } = useContext(setPage);
  // console.log(componentPage);
  useEffect(() => {
    /** suggest 페이지 초기 로딩 시, componentPage 숫자 1로 초기화
     *  -> 왜냐면 예약 확정 컴포넌트 로딩 시 componentPage 값이 2로 되어있음
     *  -> 그 상태에서 우상단의 건의하기 누르면 componentPage 값이 2인 제출폼이 보임
     *  -> 그 오류 해결하기 위해서 사용.. 지렸다 ㅇㅈ?
     */
    console.log('here!!');
    setComponentPage(1);
  }, []);
  useEffect(() => {
    if (componentPage === 3) setShowTitle(false);
  }, [componentPage]);

  const handleShowComponent = () => {
    // console.log('??');
    switch (componentPage) {
      case 1:
        return (
          <SelectContent
            setSuggestType={setSuggestType}
            setMyResInfo={setMyResInfo}
          />
        );
      case 2:
        return (
          <SuggestDetail suggestType={suggestType} myResInfo={myResInfo} />
        );
      case 3:
        return <SuggestConfirm />;
      default:
        return <div>로딩중입니다 ... </div>;
    }
  };
  return (
    <feedback.Provider value={{ suggestInfo, setSuggestInfo }}>
      <div>
        {showTitle && (
          <p className='w-[90%] mx-auto text-lg font-semibold my-8'>건의하기</p>
        )}
        {handleShowComponent()}
      </div>
    </feedback.Provider>
  );
}
