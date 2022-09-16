import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  mobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  desktop: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0%',
    },
  },
  last: {
    [theme.breakpoints.down('xs')]: {
    //   marginBottom: theme.spacing(2),
      paddingBottom: '150px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}))