import { createTheme } from "@mui/material";
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        myColor: {
            customBackground: grey[100],
            textColor: grey[600]
        },
    }
});

export default theme;