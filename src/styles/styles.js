const styles = {
  background: {       // The big container containing everything I'll add
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    color: 'black',
    height: '100%',
  },
  projectTable: {     // The table showing the cards containing projects
    flex: 8,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  card: {     // Card showing the projects for projectTable
    margin: 4,
    maxWidth: '20rem',
    minWidth: '18rem',
    flex: 1,
  },
  mutedText: {
    color: '#9e9e9e',
  },
  bar: {
    flex: 1,
    backgroundColor: '#2C6E49',
    padding: 8,
    width: '100%',
    color: 'white',
  }
};

export default styles;
