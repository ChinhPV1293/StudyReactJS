import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles,
    Paper,
    Grid,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Box } from '@material-ui/core';
import {image2} from '../../Utils/Image';
import axios from 'axios';
import {baseUrl} from '../../Utils/Constant';

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
    const history= useHistory();
    const [listGroup,setListGroup] = useState([]);
    const handleClick = (event,value) => {
        history.push("/home/memberGroup/"+ value);
    }
    useEffect(() => {
        const token= JSON.parse(localStorage.getItem("token"));
        let config = {
            headers: {
              'Authorization': 'Token ' + token
            }
        }
        const fetchData = async () => {
          const result = await axios(
            baseUrl+'group_friends/',config
          );
          setListGroup(result.data);
          console.log(result);
          debugger;
        };
        fetchData();
      }, []);

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    listGroup.map((group, index) =>
                        <Grid key={index} item xs={3} className="classes.myCard">
                            <Paper className={classes.paper}>

                                <CardActionArea onClick= { (event) => handleClick(event, group.id)}>
                                    <CardMedia
                                        component="img"
                                        className={classes.media}
                                        image={image2}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {group.nameGroup}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Box
                                                component="div"
                                                textOverflow="ellipsis"
                                                overflow="hidden"
                                                bgcolor="background.paper"
                                            >
                                                {group.description}
                                            </Box>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Paper>

                        </Grid>
                    )
                }
                     
                
                 {/* <Grid item xs={3} className="classes.myCard">
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
                </Grid> */}

                

                {/* <Grid item xs={3} className="classes.myCard">
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
                </Grid> */}
                </Grid>
        </div >   
    );
}

export default GroupComponent;