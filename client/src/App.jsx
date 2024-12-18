import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js';
import memories from './images/memories.png';
import Form from "./components/Form/Form.jsx";
import Posts from "./components/Posts/Posts.jsx";
import useStyles from './styles.js';

function App() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <>
            <Container maxWidth='lg'>
                <AppBar className={classes.appBar} position='static' color='inherit'>
                    <img className={classes.image} src={memories} alt="memories" height='60' />
                    <Typography className={classes.heading} variant='h2' align='center'>
                    MemoryNest
                    </Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid
                            container
                            className={classes.mainContainer}
                            justify='center'  // Center content for better alignment on smaller screens
                            alignItems='stretch'
                            spacing={3}
                        >
                            {/* Adjust Grid sizes for responsiveness */}
                            <Grid item xs={12} sm={7} md={8} lg={9}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={5} md={4} lg={3}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    );
}

export default App;
