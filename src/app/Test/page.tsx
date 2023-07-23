"use client";
import getSwrApi from "src/utils/getSwrApi";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { countState, numberState2 } from "src/recoil/atoms";

const Test = () => {
  const val1 = useRecoilValue(countState);
  const [val2, setVal2] = useRecoilState(numberState2);
  const fetchUrl = "http://192.168.0.150:8080/api/v1/sign/sign_in";
  const inputData = {
    login_id: "jhjung",
    login_pwd: "asdf1234",
    login_capcha: "111111",
  };
  const handleVal2Click = () => {
    setVal2(val2 + 1);
  };
  const fecthOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputData),
  };
  const swrResult = getSwrApi(fetchUrl, fecthOption);
  return swrResult.isError ? (
    <div>
      <p>== ERROR ==</p>
      <p>failed to load.</p>
    </div>
  ) : swrResult.isLoading ? (
    <div>loading...</div>
  ) : (
    <>
      <div>T E S T</div>
      <div>
        <h3>Name DATA</h3>
        <div>{val1}</div>
        <div onClick={handleVal2Click}>{val2}</div>
        <div>{swrResult.data.statusCode}</div>
      </div>
    </>
  );
};

export default Test;
