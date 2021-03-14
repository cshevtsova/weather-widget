import { makeStyles } from '@material-ui/core';

export default makeStyles({
  dayItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0 0 0 ',
    position: 'static',
    width: 73.88,
    height: 123,
    display: 'flex',

    border: '1px solid rgba(150, 150, 150, 0.3)',
    cursor: 'pointer',
  },

  dayItemSelected: {
    background: '#f7f7f7',
  },

  dayName: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '16px',
  },

  iconWrapper: {
    width: 64,
    height: 64,
  },

  icon: {
    width: 64,
    height: 64,
  },

  maxTemp: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '21px',
  },

  minTemp: {
    fontSize: 14,
    lineHeight: '16px',
    marginTop: 2,
  },
});