import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

// Define the box-shadow values
const boxShadow = '5px 6px 29px 6px rgba(0,0,0,0.91)';

// breakpoints for half screen and mobile
const halfScreenBreakpoint = '900px';
const mobileBreakpoint = '600px';

export const Title = styled('h1')({
  fontSize: '1.5rem',
  display: 'inline-block',
});

export const Container = styled(Box)(({ theme }) => ({
  width: '50%', // Adjusted width to about 60%
  height: '160px', // Set height as desired
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: boxShadow,
  display: 'flex',
  flexDirection: 'column',
  marginRight: '3rem',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  padding: '1rem',
  marginTop: '3rem', // Adjust padding

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    flexDirection: 'column',
    alignItems: 'center', // Adjust alignment
    padding: '0.5rem', // Adjust padding
    marginTop: '1rem', // Adjust padding
    marginRight: 0, // Remove right margin
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    flexDirection: 'column',
    padding: '0.5rem', // Adjust padding
    marginTop: '1rem', // Adjust padding
    marginRight: 0, // Remove right margin
  },
}));

export const PersonalDetails = styled(Box)(({ theme }) => ({
  width: '90%', // Adjusted width
  display: 'flex',
  flexDirection: 'column',

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: '100%', // Adjust width
    alignItems: 'center', // Adjust alignment
    marginTop: '1rem', // Adjust padding
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: '100%', // Adjust width
    alignItems: 'center', // Adjust alignment
    marginTop: '1rem', // Adjust padding
  },
}));

export const Description = styled('div')({
  fontSize: '1rem',
  paddingBottom: '1rem',
});
