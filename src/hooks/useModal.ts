import { useState } from "react";

export type UseModalReturn = {
  show: () => void;
  hide: () => void;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function useModal(): UseModalReturn {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return {
    show,
    hide,
    isVisible,
    setIsVisible
  };
}

export default useModal;
