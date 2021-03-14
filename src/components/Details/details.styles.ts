import { makeStyles } from '@material-ui/core';

export default makeStyles({
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px 20px 0',

    position: 'absolute',
    width: 550,
    height: 137,
    left: 0,
    top: 0,
  },

  location: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '23px',
    color: '#333333',
  },

  descriptionInfo: {
    display: 'flex',
    paddingTop: 5,
    width: '100%',
  },

  description: {
    fontSize: 14,
    lineHeight: '16px',
    color: '#666666',
    height: 32,
    textTransform: 'capitalize',
    padding: '2px',
  },

  icon: {
    width: 64,
    height: 64,
  },

  degree: {
    fontWeight: 700,
    fontSize: 44,
    lineHeight: '52px',
  },

  scaleSelected: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    }
  },

  scale: {
    '&:hover': {
      cursor: 'pointer',
    }
  },

  weatherInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0',
    position: 'static',

    width: '100%',
    height: 64,
    left: '20px',
    top: '76px',

    '& > div': {
      width: '50%',
    },

    '& > div:last-child': {
      paddingTop: 5,

      '& > p': {
        fontSize: 14,
        lineHeight: '16px',
        marginTop: 2,
      },
    },
  },
});

