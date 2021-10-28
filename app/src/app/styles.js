export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start',
  },

  container:{
    display:'flex',
    flexWrap:'wrap', 
  },

  imageContainer: {
    width:'60%',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    height: '100%', 
    backgroundColor: '#f7f7f7'
  },
  feedsContainer: {
    width:'40%', 
  },
 

  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem', 
    paddingBottom: '1rem',
    borderBottom: '1px solid #ddd'
  },
  headerWrapper:{
    display: 'flex',
    alignItems:'center',
    paddingLeft:'1rem'
  },

  commentsContainer: {
    overflowY: 'scroll',
    height: '100%',
    maxHeight: '308px',
    paddingLeft: '1rem',
    paddingRight: '1rem', 
  },
  profileUser:{
    paddingTop:'1rem',
    paddingBottom:'1rem',
  },
  ul: {
    display:'flex',
    flexWrap: 'wrap',
    margin: '0',
    padding: '0',
    listStyleType: 'none', 
  },

  li: { 
    display:'flex',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: '0.25rem',
  },
  comment: {
    width: '90%', 
  },
  like: {
    width: '10%',
    display:'flex',
    justifyContent: 'end',
  },

  footer: {
    paddingLeft: '1rem',
  },
  footerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  footerLike: {
    display: 'flex',
    justifyContent: 'end', 
    paddingRight: '1rem',
  }, 
  date: {
    opacity: 0.35,
    fontSize: '0.75rem',
  },
  
  
};