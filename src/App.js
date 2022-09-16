import React, { useRef } from 'react'
import { Grid } from '@material-ui/core'
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui'
import { useSpeechContext } from '@speechly/react-client'
import Details from './components/Details/Details'
import Main from './components/Main/Main'

import useStyles from './styles'

const App = () => {
    const classes = useStyles()
    const main = useRef()
    const { segment } = useSpeechContext()

    const executeScroll = () => {
        if ( segment ) main.current.scrollIntoView({ block: 'end',  behavior: 'smooth' })
    }

    return (
        <>
            <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>
                <Grid item xs={12} sm={3} className={classes.desktop}>
                    <Details title='Income' />
                </Grid>
                <Grid ref={main} item xs={12} sm={4} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.mobile}>
                    <Details title='Income' />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.last}>
                    <Details title='Expense' />
                </Grid>
            </Grid>
            <PushToTalkButtonContainer onChange={executeScroll()}>
                <PushToTalkButton />
            </PushToTalkButtonContainer>
        </>
    )
}

export default App