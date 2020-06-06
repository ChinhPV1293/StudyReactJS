import React from 'react';
import { makeStyles,
    Paper,
    Grid,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Box } from '@material-ui/core';
import {image2} from '../../Utils/Image';

const useStyles= makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        margin: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 400,
    },
    myCard:{
        
    }
}) )
const GroupComponent = props =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image= {image2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bạn Cũ UIT
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <Box
                                            component="div"
                                            textOverflow="ellipsis"
                                            overflow="hidden"
                                            bgcolor="background.paper"
                                        >
                                    Những Người bạn cùng học tại trường UIT
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Grid>

                <Grid item xs={3} className="classes.myCard">
                    <Paper className={classes.paper}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image= {image2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Đồng nghiệp tại Fsoft
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <Box
                                        component="div"
                                        textOverflow="ellipsis"
                                        overflow="hidden"
                                        bgcolor="background.paper"
                                    >
                                        Đồng Nghiệp tại fsoft
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Grid>

                <Grid item xs={3} className="classes.myCard">
                    <Paper className={classes.paper}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image= {image2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bạn Cũ cấp 3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <Box
                                        component="div"
                                        textOverflow="ellipsis"
                                        overflow="hidden"
                                        bgcolor="background.paper"
                                    >
                                        Những Người bạn cùng học tại trường Cấp 3 Lê Quý Đôn
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Grid>

                <Grid item xs={3} className="classes.myCard">
                    <Paper className={classes.paper}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image= {image2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bạn Lớp võ vovinam Nhân Văn
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <Box
                                        component="div"
                                        textOverflow="ellipsis"
                                        overflow="hidden"
                                        bgcolor="background.paper"
                                    >
                                    Những Người bạn cùng tập luyện tại Vovinam Nhân Văn
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Grid>
                <Grid item xs={3} className="classes.myCard">
                    <Paper className={classes.paper}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image= {image2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bạn Lớp Học lập trình web
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <Box
                                        component="div"
                                        textOverflow="ellipsis"
                                        overflow="hidden"
                                        bgcolor="background.paper"
                                    >
                                        Những Người bạn cùng học tại lớp lập trình ứng dụng web
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Grid>
            </Grid>
        </div>   
    );
}

export default GroupComponent;