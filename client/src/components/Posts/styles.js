import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
    borderWidth: 2,
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    fontSize: '1.2rem',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    fontSize: '1.2rem',
  },
  grid: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      margin: '10px',
    },
  },
  title: {
    padding: '0 16px',
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
