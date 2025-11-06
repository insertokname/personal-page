import React, { useCallback, useEffect, useState } from 'react';

interface ZoomableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    toggleLabel?: string;
}

const overlayButtonClasses = "absolute bottom-3 right-3 rounded-full border border-white/40 bg-black/70 px-3 py-1 text-xs font-semibold text-white shadow transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const closeButtonClasses = "absolute top-6 right-6 rounded-full border border-white/40 bg-black/70 px-3 py-1 text-sm font-semibold text-white shadow transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export const ZoomableImage: React.FC<ZoomableImageProps> = ({ className = '', toggleLabel = 'Enlarge image', ...imgProps }) => {
    const [isOpen, setIsOpen] = useState(false);

    const baseImageClasses = 'max-h-full w-full select-none rounded-md shadow-md';
    const zoomedImageClasses = 'max-h-[90vh] max-w-[90vw] select-none rounded-lg shadow-2xl';

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                close();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Preserve body scroll position while the zoom overlay is open.
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [close, isOpen]);

    return (
        <>
            <div className="relative inline-block">
                <img
                    {...imgProps}
                    className={`${baseImageClasses} ${className}`.trim()}
                    alt='zoomed image'
                />
                <button
                    type="button"
                    onClick={open}
                    className={overlayButtonClasses}
                    aria-label={toggleLabel}
                >
                    Zoom
                </button>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={close}
                >
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            close();
                        }}
                        className={closeButtonClasses}
                        aria-label="Close image"
                    >
                        X
                    </button>
                    <img
                        {...imgProps}
                        className={`${zoomedImageClasses} ${className}`.trim()}
                        onClick={(event) => event.stopPropagation()}
                        alt='zoomed image'
                    />
                </div>
            )}
        </>
    );
};

export default ZoomableImage;
