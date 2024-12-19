import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
      borderRadius: 15,
      margin: '30px 0',
      padding: '10px 20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5', // Subtle background for contrast
  },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px', // Adds space between the logo and text
  },
  heading: {
      color: '#333',
      fontWeight: 'bold',
      fontSize: '2rem', // Clean and responsive font size
      [theme.breakpoints.up('sm')]: {
          fontSize: '2.5rem',
      },
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer:{
      flexDirection:'column-reverse',
    }
  }
  
}));

