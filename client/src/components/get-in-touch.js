import { Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { Section } from 'ui';

const GetInTouch = () => (
  <Section offwhite>
    <Stack alignItems='center'>
      <GetInTouchButton
        href='mailto:aminpainter786@gmail.com'
        variant='contained'>
        Get in touch
      </GetInTouchButton>
    </Stack>
  </Section>
);

/////////////////////////////////////////////////////////////////////////////
const GetInTouchButton = styled(Button)({
  height: '3.5rem',
  width: '15rem',
});

export default GetInTouch;
