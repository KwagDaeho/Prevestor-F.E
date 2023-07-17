// 'use client';

import Link from "next/link";
import GetPageList from "./GetPageList/page";

// Props의 Type 선언
interface PropsType {}

function Gnb({}: PropsType) {
  return (
    <div id="header_gnb_wrap">
      <Link href={"/"}>
        <h2>Prevestor</h2>
      </Link>
      <nav>
        <ol id="header_gnb">
          <GetPageList />
        </ol>
      </nav>
    </div>
  );
}

export default Gnb;
