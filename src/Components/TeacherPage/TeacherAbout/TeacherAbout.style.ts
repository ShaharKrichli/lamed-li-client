import React, { FC } from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

// Define the box-shadow values
const boxShadow = '5px 6px 29px 6px rgba(0,0,0,0.91)';

// breakpoints for half screen and mobile
 const halfScreenBreakpoint = '900px';
const mobileBreakpoint = '600px';

export const Title = styled('h1')({
  fontSize: "1.5rem",
  display: "inline-block",
})

export const Container = styled(Box)(({ theme }) => ({
  
  width: '50%', // Set width to 100%
  height: '160px', // Set height as desired
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: boxShadow,
  display: 'flex',
  flexDirection: "column",
  marginRight: '3rem',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  padding: '1rem',
  marginTop: '3rem', // Adjust padding

   // Media query for half screen screens
   [`@media (max-width: ${halfScreenBreakpoint})`]: {
    flexDirection: "column",
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    flexDirection: "column",
    paddingBlock: '1rem',
  },
}));

export const PersonalDetails = styled(Box)(({ theme }) => ({
  width: '70%', // Set width to 70%
  display: 'flex',
  flexDirection: 'column',

  // Media query for half screen screens
    // Media query for half screen screens
    [`@media (max-width: ${halfScreenBreakpoint})`]: {
      width: "30rem",
    },
  
    // Media query for mobile
    [`@media (max-width: ${mobileBreakpoint})`]: {
      width: "25rem",
    },
}));

export const Description = styled('div')({
  fontSize: '1rem',
  paddingBottom: '1rem',
});
