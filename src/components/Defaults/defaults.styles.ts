import { makeStyles } from '@material-ui/core';

export default makeStyles({
  weatherModule: {
    position: 'absolute',
    width: 590,
    height: 300,
    left: 44,
    top: 125,
    background: '#ffffff',
    border: '1px solid rgba(150, 150, 150, 0.3)',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '4px',
  },

  defaultPart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: '35%',

    '& > svg': {
      fontSize: '4rem',
      paddingBottom: '10px',
    },
  }
});