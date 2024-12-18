import React, { useState } from 'react';
import useStyles from "./styles.js";
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Button, Typography, Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../actions/posts';

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [loading, setLoading] = useState(false);  // To handle action loading state

    const handleLike = (id) => {
        setLoading(true);
        dispatch(likePost(id))
            .finally(() => setLoading(false)); // Reset loading state after dispatch
    };

    const handleDelete = (id) => {
        setLoading(true);
        dispatch(deletePost(id))
            .finally(() => setLoading(false)); // Reset loading state after dispatch
    };

    return (
        <>
            {!posts.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                                <div className={classes.overlay}>
                                    <Typography variant='h6'>{post.creator}</Typography>
                                    <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
                                </div>
                                <div className={classes.overlay2}>
                                    <Button style={{ color: 'white' }} size='small' color='primary' onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
                                </div>
                                <div className={classes.details}>
                                    <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
                                </div>
                                <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
                                <CardContent>
                                    <Typography variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button 
                                        size='small' 
                                        color='primary' 
                                        onClick={() => handleLike(post._id)}
                                        disabled={loading}
                                    >
                                        <ThumbUpAltIcon fontSize='small' /> Like&nbsp;{post.likeCount}
                                    </Button>
                                    <Button 
                                        size='small' 
                                        color='primary' 
                                        onClick={() => handleDelete(post._id)}
                                        disabled={loading}
                                        style={{ color: 'red' }}
                                    >
                                        <DeleteIcon  fontSize='small' /> Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
}

export default Posts;
