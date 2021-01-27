const drawerWidth = 400;
const styles = (theme) => ({
   drawer: {
      flexShrink: 0,
      width: '300px',
      fontSize: 'large',
      zIndex: 10,
   },
   drawerPaper: {
      width: '300px',
   },
   drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
   },
   menuItem: {
      textDecoration: 'none',
      color: '#333',
      display: 'flex',
   },
   iconItem: {
      justifyContent: 'center',
   },
   menuLinkActive: {
      '&>div': {
         backgroundColor: 'rgba( 0, 0, 0, 0.08)',
      },
   },
});

export default styles;
