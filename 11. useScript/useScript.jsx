import useAsync from "../hooks 6 - 10/useAsync";

export default function useScript(url) {
  return useAsync(() => {
    const script = document.createElement("script");
    script.source = url;
    script.async = true;

    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url]);
}
