'use client';
import React, { useState, useEffect } from 'react';
import TabMenu from '@/components/common/TabMenu';
import ToggleMenu from '@/components/common/ToggleMenu';
import { BsPencil } from 'react-icons/bs';
import { useSearchParams } from 'next/navigation';

import Writable from '@/components/review/writable';
import Written from '@/components/review/written';

/**
 * [Page]
 * @member writable, written
 * 유저의 리뷰 목록에서 탭과 토글, 그 선택값에 따른 컨텐츠를 렌더링 (writable or written)
 * @todo: 실제 데이터 사용 필요
 */

const tabData1 = {
  left: '배달/포장',
  right: '요마트',
};
const tabData2 = {
  left: '작성 가능한 리뷰',
  right: '작성한 리뷰',
};

const UserReview = () => {
  const [tab1, setTab1] = useState('left');
  const [tab2, setTab2] = useState('left');

  const handleGetTab1 = (selectedTab: string) => {
    setTab1(selectedTab);
  };
  const handleGetTab2 = (selectedTab: string) => {
    setTab2(selectedTab);
  };

  const searchParams = useSearchParams();
  const shopId = searchParams.get('shopId');

  console.log(shopId)

  return (
    <div className="bg-grey1">
      <TabMenu
        data={tabData1}
        selected={tab1}
        handleGetSelected={handleGetTab1}
      ></TabMenu>
      <div className="p-4 bg-white">
        <ToggleMenu
          data={tabData2}
          selected={tab2}
          handleGetSelected={handleGetTab2}
        ></ToggleMenu>
      </div>
      <div className="p-4 flex">
        <p className="mt-1 pr-1">
          <BsPencil />
        </p>
        <p className="font-sm font-semibold">
          포토리뷰 작성시 <span className="text-pink1">100 포인트</span>를 드려요.
        </p>
      </div>
      {tab2 === 'left' ? <Writable /> : <Written />}
    </div>
  );
};

export default UserReview;