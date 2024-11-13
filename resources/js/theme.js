import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#800000', // Maroon color for primary
      },
      secondary: {
        main: '#c70039', // Dark red for secondary
      },
      background: {
        default: '#f5f5f5', // Light background color for the page
      },
      text: {
        primary: '#333',    // Main text color
        secondary: '#666',  // Secondary text color
      },
      error: {
        main: '#b00020',  // Maroon-like color for error state
      },
      success: {
        main: '#4caf50', // Green for success (adjust as needed)
      },
      warning: {
        main: '#ff9800', // Orange for warning (adjust as needed)
      },
    },
});

export default theme;