import { useFile } from '@/contexts/FileContext';
import React, { useState, useRef, useEffect } from 'react';
import CloseIcon from './icons/CloseIcon';
import { SingleFileType } from './Files/types';

let windowCount = 0;
const OFFSET_STEP = 30;

interface DraggableWindowProps {
  file: SingleFileType;
  children: React.ReactNode;
}

export const DraggableWindow = ({ file, children }: DraggableWindowProps) => {
  const { close } = useFile();
  const [pos, setPos] = useState(() => {
    const initial = {
      x: (window.innerWidth / 10) + (windowCount * OFFSET_STEP % (window.innerWidth / 2)),
      y: (window.innerHeight / 10) + (windowCount * OFFSET_STEP % (window.innerHeight - 200)),
    };
    windowCount++;
    return initial;
  });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const wnd = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [calcWidth, setCalcWidth] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 600 ? window.innerWidth * 0.8 : file.width ?? 500
  );

  const isInteractive = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return false;
    return !!target.closest('button, a, input, textarea, select, [contenteditable="true"], [data-no-drag], iframe');
  };

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

  useEffect(() => {
    const handleResize = () => {
      setCalcWidth(window.innerWidth < 768 ? window.innerWidth * 0.8 : file.width ?? 500);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [file.width]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!wnd.current) return;
    if (isInteractive(e.target)) return;
    const rect = wnd.current.getBoundingClientRect();
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setDragging(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (!wnd.current) return;
    if (isInteractive(e.target)) return;
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
      className={"fixed bg-gruvbox-bg_h shadow-xl rounded border border-gruvbox-bg_s cursor-move"}
      style={{
        top: pos.y,
        left: pos.x,
        width: calcWidth
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <div
        ref={headerRef}
        className="bg-gruvbox-bg_h px-3 pt-3 flex justify-between items-center select-none rounded-t"
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
