import Link from "next/link";
import GetPageList from "./GetPageList/page";
import { Typography } from "@mui/material";

interface PropsType {}

function Gnb({}: PropsType) {
  return (
    <div id="header_gnb_wrap">
      <Link href={"/"}>
        <Typography variant="h2" color="primary">
          <span>Logo</span>
        </Typography>
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
