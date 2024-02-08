import { cn } from '@/utils/style';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type SidebarProps = {
  close: () => void;
  isOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ close, isOpen }) => {
  return (
    <div
      className={cn(
        'absolute lg:relative min-h-screen flex-col gap-6 border-r bg-white p-10 pr-6 text-base',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      <div className="flex justify-end lg:hidden">
        <AiOutlineClose className="size-5 cursor-pointer" onClick={close} />
      </div>
      <Link href="/" className="w-48 font-medium text-gray-600 hover:underline">
        홈
      </Link>
      <Link
        href="/tag"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        태그
      </Link>
      <Link
        href="/tag"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        Web Development
      </Link>
      <div className="mt-10 flex items-center gap-4"></div>
    </div>
  );
};

export default Sidebar;
