import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#7B1FA2',
    secondary: '##FFEB3B',
    error: '#D32F2F',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#7C4DFF',
    textColor: '#fff',
    borderColor: '#cccccc',
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default theme;
