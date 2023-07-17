"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Gnb from "../Gnb/page";
import CustomThemeToggleButton from "../CustomThemeToggleButton/page";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
  inner: React.ReactElement;
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
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color="secondary">
          <Toolbar className="header-wrap">
            <Gnb />
            <CustomThemeToggleButton />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {props.inner}
    </React.Fragment>
  );
}
