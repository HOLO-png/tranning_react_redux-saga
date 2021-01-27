const styles = (theme) => ({
   wrapper: { display: 'flex', flexDirection: 'row', height: '100vh' },
   wrapperContent: {
      width: '100%',
      padding: 10,
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.shared,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   shiftLeft: {
      marginLeft: '-300px',
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
});

export default styles;
