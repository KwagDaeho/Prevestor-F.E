import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GetPageList = () => {
  const pages = [
    { link: "Events", name: "이벤트" },
    { link: "LeaderBoard", name: "리더보드" },
    { link: "User", name: "내 정보" },
    // { link: "View", name: "카메라 영상" },
    // { link: "Module", name: "모듈 설정" },
    { link: "Test", name: "테스트" },
  ];
  const pathname = usePathname().replace("/", "");
  return (
    <>
      {pages.map((page, idx) => {
        return (
          <li key={idx}>
            <Button
              size="small"
              variant={pathname === page.link ? "contained" : "text"}
              disabled={pathname === page.link ? true : false}
              color="primary">
              <Link href={`/${page.link}`}>{page.name}</Link>
            </Button>
          </li>
        );
      })}
    </>
  );
};

export default GetPageList;
