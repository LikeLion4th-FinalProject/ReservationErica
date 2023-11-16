import { createContext, useContext, useEffect, useState } from 'react';
import DateDropdown from '../components/DateDropdown';
import IndicatorSection from '../components/IndicatorSection';
import PlaceCard from '../components/PlaceCard';
import { RoomList, dayList } from '../styles/static';
import TimeSelect from '../components/reservation/TimeSelect';
import ButtonList from '../components/ButtonList';
// import { getToken } from '../api/login';
import { searchDayTable } from '../api/reservation';
import ConfirmInfo from '../components/reservation/ConfirmInfo';
import ReserveConfirm from '../components/reservation/ReserveConfirm';
import { setPage } from '../App';
export const reserveConfirm = createContext();
export const fillReserveInfo = createContext();
export const pickDate = createContext();

function ReserveHome() {
  const { componentPage, setComponentPage } = useContext(setPage);
  const [resInfo, setResInfo] = useState({
    kakao_id: null,
    room_name: null,
    date: null,
    start: null,
    end: null,
    people_num: null,
  });

  useEffect(() => {
    /** suggest 페이지 초기 로딩 시, componentPage 숫자 1로 초기화
     *  -> 왜냐면 예약 확정 컴포넌트 로딩 시 componentPage 값이 2로 되어있음
     *  -> 그 상태에서 우상단의 건의하기 누르면 componentPage 값이 2인 제출폼이 보임
     *  -> 그 오류 해결하기 위해서 사용.. 지렸다 ㅇㅈ?
     */
    setComponentPage(1);
  }, []);

  // getTimezoneOffset()은 현재 시간과의 차이를 분 단위로 반환하는 함수 => 9시간 이므로 -540 이 나올거임
  const offset = new Date().getTimezoneOffset() * 60000; // ms 단위를 맞추기 위해 60000 곱해줌
  // const today = new Date(Date.now() - offset);
  const today = new Date();
  // console.log(today);

  const offsetToday = new Date(Date.now() - offset);
  const nowDate = offsetToday.toISOString().split('T')[0];
  // console.log(nowDate);

  const [selectedDate, setSelectedDate] = useState({
    pickDate: nowDate,
    pickDay: dayList[today.getDay()],
  });
  const [listDayTable, setListDayTable] = useState([]);
  // console.log(listDayTable);

  /*  */
  const asyncTest = async () => {
    const result = await searchDayTable(selectedDate.pickDate);
    setListDayTable(result);
  };

  useEffect(() => {
    if (selectedDate) {
      console.log(
        `"searchdaytable/" 로 axios 요청 보내기 시작\n selectedDate : ${selectedDate.pickDate}`
      );
      asyncTest();
    }
  }, [selectedDate, sessionStorage.getItem('token')]);

  return (
    <fillReserveInfo.Provider value={{ resInfo, setResInfo }}>
      <pickDate.Provider value={{ selectedDate, setSelectedDate }}>
        {componentPage !== 1 ? (
          <ReserveConfirm resInfo={resInfo} />
        ) : (
          <section className='mt-4 relative'>
            <DateDropdown />
            <IndicatorSection />
            <div className='px-4 mt-5'>
              <TimeSelect nowDate={nowDate} listDayTable={listDayTable} />
              {/* {RoomList.map((room, index) => (
          <PlaceCard key={index} idx={index} title={room} />
        ))} */}
            </div>
          </section>
        )}
      </pickDate.Provider>
    </fillReserveInfo.Provider>
  );
}

export default ReserveHome;
