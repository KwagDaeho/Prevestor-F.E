"use client";
import Link from "next/link";

const GetPageList = () => {
  const pages = ["Markets", "Test"];
  return pages.map((pageName, idx) => {
    return (
      <li key={idx}>
        <Link href={`/${pageName}`}>{pageName}</Link>
      </li>
    );
  });
};

export default GetPageList;
