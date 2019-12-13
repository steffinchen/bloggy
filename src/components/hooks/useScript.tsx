import { useEffect } from 'react';

interface UseScriptProps {
  src?: string;
  async: boolean;
  innerHtml?: string;
}

const useScript = ({ src, async, innerHtml }: UseScriptProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    if (src) {
      script.src = src;
    }
    if (innerHtml) {
      script.innerHTML = innerHtml;
    }
    script.async = async;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src, async, innerHtml]);
};

export default useScript;
