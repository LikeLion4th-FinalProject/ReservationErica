import { useContext, useEffect, useState } from 'react';
import { setPage } from '../../../App';
import RecordList from './RecordList';
import RecordDetail from './RecordDetail';

function SuggestCard({ recordInfo }) {
  console.log('res', recordInfo);
  const { componentPage, setComponentPage } = useContext(setPage);
  const [detailInfo, setDetailInfo] = useState();

  useEffect(() => {
    console.log(componentPage);
    setComponentPage(1);
  }, []);

  const handleComponentPage = () => {
    switch (componentPage) {
      case 1:
        console.log('걸리나?');
        return (
          <RecordList recordInfo={recordInfo} setDetailInfo={setDetailInfo} />
        );
      case 2:
        return <RecordDetail detailInfo={detailInfo} />;
    }
  };

  return <>{handleComponentPage()}</>;
}

export default SuggestCard;
