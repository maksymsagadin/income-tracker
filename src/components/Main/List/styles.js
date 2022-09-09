import { makeStyles } from '@material-ui/core/styles'
import { red, blue } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
  avatarIncome: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}))