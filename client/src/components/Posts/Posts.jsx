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
    const [loadingIds, setLoadingIds] = useState([]); // Track loading state per post

    const handleLike = async (id) => {
        setLoadingIds((prev) => [...prev, id]); // Add the ID to the loading array
        await dispatch(likePost(id));
        setLoadingIds((prev) => prev.filter((loadingId) => loadingId !== id)); // Remove the ID from the loading array
    };

    const handleDelete = async (id) => {
        setLoadingIds((prev) => [...prev, id]); // Add the ID to the loading array
        await dispatch(deletePost(id));
        setLoadingIds((prev) => prev.filter((loadingId) => loadingId !== id)); // Remove the ID from the loading array
    };

    return (
        <>
            {!posts.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                                <div className={classes.overlay}>
                                    <Typography variant="h6">{post.creator}</Typography>
                                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                                </div>
                                <div className={classes.overlay2}>
                                    <Button
                                        style={{ color: 'white' }}
                                        size="small"
                                        color="primary"
                                        onClick={() => setCurrentId(post._id)}
                                    >
                                        <MoreHorizIcon fontSize="default" />
                                    </Button>
                                </div>
                                <div className={classes.details}>
                                    <Typography variant="body2" color="textSecondary">
                                        {post.tags.map((tag) => `#${tag} `)}
                                    </Typography>
                                </div>
                                <Typography className={classes.title} variant="h5" gutterBottom>
                                    {post.title}
                                </Typography>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {post.message}
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => handleLike(post._id)}
                                        disabled={loadingIds.includes(post._id)}
                                    >
                                        <ThumbUpAltIcon fontSize="small" /> Like&nbsp;{post.likeCount}
                                    </Button>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => handleDelete(post._id)}
                                        disabled={loadingIds.includes(post._id)}
                                        style={{ color: 'red' }}
                                    >
                                        <DeleteIcon fontSize="small" /> Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Posts;
