import { Button } from 'antd';
import React from 'react';

export default function OnError(props = { handleTryAgain: () => {} }) {
  const { handleTryAgain } = props;
  return (
    <div className="bg-white rounded-lg w-full h-[80dvh] flex flex-col gap-3 justify-center items-center">
      <div>Failed to load Magazine</div>
      <Button
        style={{ borderColor: "white", backgroundColor: 'var(--primary-button-color)', color: 'var(--primary-button-text-color)', height: '35px' }}
        onClick={handleTryAgain}
      >
        Try again
      </Button>
    </div>
  );
}
