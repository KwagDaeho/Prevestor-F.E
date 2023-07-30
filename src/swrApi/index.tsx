import useSWR from "swr";

// input data가 있을 경우, url에 사전처리 필요
const swrApi = (url: string, fetchOption?: Object) => {
  const fetcher = (api: string) =>
    fetch(api, fetchOption).then((res) => res.json());
  const swrOption = {
    revalidateOnFocus: false,
  };
  const {
    data: data,
    error,
    isLoading,
    // isValidating,
  } = useSWR(url, fetcher, swrOption);
  return {
    data: data,
    isLoading: isLoading,
    isError: error,
    // isValidating: isValidating,
  };
};
export default swrApi;
