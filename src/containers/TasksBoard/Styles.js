const styles = (theme) => ({
   tasksBoard: {
      // alignItems: theme.body.alignItems,
      // justifyContent: theme.body.justifyContent,
      marginTop: 10,
   },
   tasksListBoard: {
      display: '-webkit-box',
   },
   // shape:{
   //     // backgroundColor: "#ff3598",
   //     // borderColor: "#cccccc",
   //     // color: "#fff",
   //     // padding:20,
   //     // margin:10,
   //     // borderRadius: 4,
   //     backgroundColor: theme.color.primary,
   //     color: theme.shape.textColor,
   //     borderRadius: theme.shape.borderRadius,
   //     fontFamily: theme.typography.fontFamily
   // },
   modalDelete: {
      marginLeft: '100px',
      fontSize: '1.25em',
      fontFamily: 'Helvetica',
   },
   modalTitle: {
      fontStyle: 'oblique',
      fontSize: 'medium',
      fontWeight: 'lighter',
   },
   modalTextBold: {
      fontStyle: 'normal',
      fontSize: 'large',
      fontWeight: 'bold',
   },
});

export default styles;
