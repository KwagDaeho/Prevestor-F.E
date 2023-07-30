"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Gnb from "src/components/Gnb/page";
import CustomThemeToggleButton from "./CustomThemeToggleButton/page";
import { useRecoilState } from "recoil";
import { Button } from "@mui/material";
import { isCashMode } from "src/recoil/atoms";
import { useEffect } from "react";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  const [cashMode, setCashMode] = useRecoilState(isCashMode);
  const handleCashMode = () => {
    setCashMode(!cashMode);
  };
  useEffect(() => {
    console.log("Code Check");
    console.log(window.location.search.substring(6));
  }, []);

  const handleLogin = () => {
    const REST_API_KEY = "f381f44ca1404bd573270c48200628fb";
    const REDIRECT_URI = "http://localhost:3000";
    const loginLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = loginLink;
    console.log("Do Login");
  };
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color="secondary">
          <Toolbar className="header-wrap">
            <Gnb />
            <Button
              style={{
                marginLeft: "auto",
                marginRight: "30px",
              }}
              size="small"
              color="primary"
              onClick={handleCashMode}>
              <span style={{ padding: "3px 9px" }}>
                Mode : {cashMode ? "Cash" : "Point"}
              </span>
            </Button>
            <Button
              style={{
                marginBlock: "10px",
              }}
              size="small"
              color="primary"
              onClick={handleLogin}>
              <span style={{ padding: "3px 9px" }}>로그인</span>
            </Button>
            <CustomThemeToggleButton />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {props.children}
    </React.Fragment>
  );
}
