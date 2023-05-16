import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import LargeImageViewer from 'components/image-viewer';

const certificates = new Array(process.env.REACT_APP_CERTIFICATES_COUNT).map(
  (_garbage, i) =>
    `https://res.cloudinary.com/du4afitbs/image/upload/v1665294698/Images/certificates/${i}.jpg`
);

const CertificatesPage = () => {
  const [isViewerOpen, setIsViewerOpen] = useState();

  return (
    <>
      <Box p={10}>
        <Typography textAlign='center' variant='h4'>
          Certifications
        </Typography>

        <Grid container mt={8} spacing={4}>
          {certificates.map((certificateUrl, i) => (
            <Grid container item md={4} xs={12} justifyContent='center' key={i}>
              <CertificateImage
                onClick={() => setIsViewerOpen(true)}
                src={certificateUrl}
                alt='CERTIFICATE'
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <LargeImageViewer
        isViewerOpen={isViewerOpen}
        setIsViewerOpen={setIsViewerOpen}
        images={certificates}
      />
    </>
  );
};

/////////////////////////////////////////////////////////////////////////////
const CertificateImage = styled('img')({
  height: '15rem',
  cursor: 'zoom-in',
});

export default CertificatesPage;
