import React from "react";

interface IRunButton {
  runAStar: () => void;
  disableButtons: boolean;
}

const RunAlgorithmButton: React.FC<IRunButton> = ({
  runAStar,
  disableButtons,
}): JSX.Element => {
  return (
    <button onClick={runAStar}>
      <img src="/play.svg" alt="reset" className="w-12 h-12" />
    </button>
  );
};
export default RunAlgorithmButton;
