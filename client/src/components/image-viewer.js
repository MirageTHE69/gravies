import { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const LargeImageViewer = ({ images, isViewerOpen, setIsViewerOpen }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    isViewerOpen && (
      <ImageViewer
        src={images}
        currentIndex={currentImage}
        disableScroll={false}
        closeOnClickOutside={true}
        onClose={closeImageViewer}
      />
    )
  );
};

export default LargeImageViewer;
