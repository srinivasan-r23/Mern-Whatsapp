import React, { ReactElement } from "react";

const InputField: React.FC<{ customStyle: string; placeHolderText: string }> =
  ({ customStyle, placeHolderText }): ReactElement => {
    return (
      <input
        type="text"
        className={customStyle}
        placeholder={placeHolderText}
      />
    );
  };

export default InputField;
