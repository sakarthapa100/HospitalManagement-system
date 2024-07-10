import React from 'react';
import { Button } from './button';
import Image from 'next/image';

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      className={className ?? 'shad-primary-btn w-full'}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={20}
            height={20}
            className="animate-spin"
          />{' '}
          Loading ...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;