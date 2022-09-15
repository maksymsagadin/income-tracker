import React, { useState, useEffect, useContext } from 'react'
import { ExpenseTrackerContext } from '../../../context/context'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import useStyles from './styles'
import { v4 as uuidv4 } from 'uuid'
import { useSpeechContext } from '@speechly/react-client'
import formatDate from '../../../utils/formatDate'
import { incomeCategories, expenseCategories } from '../../../constants/categories'
import { resetCategories } from '../../../constants/categories'

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

const Form = () => {
    const classes = useStyles()
    const { addTransaction } = useContext(ExpenseTrackerContext)
    const [ formData, setFormData ] = useState(initialState)
    const { segment } = useSpeechContext()
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories

    const createTransaction = () => {
        if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
        addTransaction(transaction)
        resetCategories()
        setFormData(initialState)
    }
    useEffect(() => {
        if (segment) {
            if (segment.intent.intent === 'add_expense') {
                setFormData({...formData, type:'Expense'})
            } else if (segment.intent.intent === 'add_income') {
                setFormData({...formData, type:'Income'})
            } else if (segment.isFinal &&  segment.intent.intent === 'create_transaction') {
                return createTransaction()
            } else if (segment.isFinal &&  segment.intent.intent === 'cancel_transaction') {
                return setFormData(initialState)
            }
            segment.entities.forEach((e) => {
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
                switch (e.type) {
                    case 'amount':
                        setFormData({ ...formData, amount: e.value })
                        break
                    case 'category':
                        if (incomeCategories.map((incomeCategory) => incomeCategory.name).includes(category)) {
                            setFormData({ ...formData, name: 'Income', category })
                        } else if (expenseCategories.map((expenseCategory) => expenseCategory.name).includes(category)) {
                            setFormData({ ...formData, name: 'Expense', category })
                        }
                        break
                    case 'date':
                        setFormData({ ...formData, date: e.value })
                        break
                    default:
                        break
                }
            })
            if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
                createTransaction()
            }
        }
    },[segment])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' gutterBottom variant='subtitle2'>
                    {segment && segment.words.map((word) => word.value).join(' ')}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {selectedCategories.map((category) => <MenuItem key={category.name} value={category.name}> {category.name} </MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type='number' label='Amount' fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type='date' label='Date' fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}/>
            </Grid>
            <Button className={classes.button} fullWidth variant='outlined' color='primary' onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form