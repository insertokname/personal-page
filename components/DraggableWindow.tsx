import { useFile } from '@/contexts/FileContext';
import { File } from '@/types/File';
import React, { useState, useRef, useEffect } from 'react';
import CloseIcon from './icons/CloseIcon';

interface DraggableWindowProps {
  file: File;
  children: React.ReactNode;
}

export const DraggableWindow = ({ file, children }: DraggableWindowProps) => {
  const { close } = useFile();
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const wnd = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const rawX = e.clientX - offset.current.x;
      const rawY = e.clientY - offset.current.y;
      const headerH = headerRef.current?.offsetHeight || 0;
      const width = wnd.current?.offsetWidth || 0;
      const clampedY = Math.max(0, Math.min(rawY, window.innerHeight - headerH));
      const clampedX = Math.max(-width / 2, Math.min(rawX, window.innerWidth - width / 2));
      setPos({ x: clampedX, y: clampedY });
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      const t = e.touches[0];
      const rawX = t.clientX - offset.current.x;
      const rawY = t.clientY - offset.current.y;
      const headerH = headerRef.current?.offsetHeight || 0;
      const width = wnd.current?.offsetWidth || 0;
      const clampedY = Math.max(0, Math.min(rawY, window.innerHeight - headerH));
      const clampedX = Math.max(-width / 2, Math.min(rawX, window.innerWidth - width / 2));
      setPos({ x: clampedX, y: clampedY });
      e.preventDefault();
    };
    const handleEnd = () => setDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [dragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!wnd.current) return;
    const rect = wnd.current.getBoundingClientRect();
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setDragging(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (!wnd.current) return;
    const rect = wnd.current.getBoundingClientRect();
    offset.current = {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
    setDragging(true);
    e.preventDefault();
  };

  return (
    <div
      ref={wnd}
      className="fixed bg-gruvbox-bg_h shadow-xl rounded border border-gruvbox-bg_s w-80"
      style={{ top: pos.y, left: pos.x }}
    >
      <div
        ref={headerRef}
        className="bg-gruvbox-bg_h px-3 pt-3 flex justify-between items-center cursor-move select-none rounded-t"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <span className="text-gruvbox-green text-center">{file.name}</span>
        <button onClick={() => close(file)} className="text-gruvbox-fg hover:text-gruvbox-fg p-1">
          <CloseIcon size={26} />
        </button>
      </div>
      <div className="px-4 pb-4 pt-1 overflow-auto">{children}</div>
    </div>
  );
};
