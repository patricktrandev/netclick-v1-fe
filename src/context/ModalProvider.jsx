import React, { createContext, useContext, useEffect, useState } from "react";
const ModalContext = createContext();

export const useModalContext = () => {
  return useContext(ModalContext);
};

const ModalProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShow]);

  const openPopup = (content) => {
    setContent(content);
    setIsShow(true);
  };

  return (
    <ModalContext.Provider value={{ openPopup }}>
      {children}
      {isShow && (
        <div className="fixed inset-0 text-white">
          <div
            className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
            onClick={() => setIsShow(false)}
          >
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
