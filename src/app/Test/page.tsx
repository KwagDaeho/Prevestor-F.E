"use client";
import swrApi from "src/swrApi";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { countState, numberState2 } from "src/recoil/atoms";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const Test = () => {
  const [optionList, setOptionList] = useState(0);
  const val1 = useRecoilValue(countState);
  const [val2, setVal2] = useRecoilState(numberState2);
  const onChangeOptions = (e: any) => {
    setOptionList(e.target.value);
    console.log(e.target.value);
  };
  const handleVal2Click = () => {
    setVal2(val2 + 1);
  };

  const fetchUrl = "http://192.168.0.150:8080/api/v1/sign/sign_in";
  const inputData = {
    login_id: "jhjung",
    login_pwd: "asdf1234",
    login_capcha: "111111",
  };
  const fecthOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputData),
  };
  const swrResult = swrApi(fetchUrl, fecthOption);
  return swrResult.isError ? (
    <div>
      <p>== ERROR ==</p>
      <p>failed to load.</p>
    </div>
  ) : swrResult.isLoading ? (
    <div>Fetch Data loading...</div>
  ) : (
    <>
      <div>T E S T</div>
      <div>
        <h3>Name DATA</h3>
        <div>{val1}</div>
        <div onClick={handleVal2Click}>{val2}</div>
        <div>{swrResult.data.statusCode}</div>
      </div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={optionList}
          label="Age"
          onChange={onChangeOptions}
          defaultValue={0}>
          {/* <MenuItem value="0">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={0.1}>Ten</MenuItem>
          <MenuItem value={0.2}>Twenty</MenuItem>
          {/* <MenuItem value={0.3}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </>
  );
};

export default Test;
