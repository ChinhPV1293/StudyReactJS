import React, {useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import ListContact from './ListContact/ListContact';
import SearchBar from './SearchBar/SearchBar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Divider from '@material-ui/core/Divider';
import DetailInfoService from '../../service/DetailInfoService';
import Drawer from '@material-ui/core/Drawer';
import AddNewFriend from './AddNewFriend/AddNewFriend';
import GroupComponent from './GroupComponent/GroupComponent';
import Detail from './DetailComponent/Detail';
import ListMemberOfGroup from './GroupComponent/ListMemberOfGroup';
import {Link,Switch,Route,BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import { CssBaseline, 
    Container, 
    Typography, 
    makeStyles, 
    List, 
    AppBar, 
    Toolbar, 
    Badge, 
    Box, 
    Grid, 
    Paper, 
    Button, 
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText
 } from '@material-ui/core';
import {ListItems,secondaryListItems} from './ListItems/ListItem';
import Copyright from "../Utils/Copyright";
import {image1} from '../Utils/Image';
import {baseUrl} from '../Utils/Constant';

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    searchBar: {
        
    }
}));

const Home = props => {
    let { path, url } = useRouteMatch();
    const classes = useStyles();
    const history = useHistory();
    const [searchTerm,setSearchTerm] = React.useState("");
    const [open, setOpen] = React.useState(true);
    const [contactList, setContactList] = React.useState([]);

    useEffect(() => {
        const token= JSON.parse(localStorage.getItem("token"));
        let config = {
            headers: {
              'Authorization': 'Token ' + token
            }
        }
        const fetchData = async () => {
          const result = await axios(
            baseUrl+'friend_mini/',config  
          );
          setContactList(result.data);
        };
        fetchData();
      }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const handleClick = (event) => {
        history.push('/listContact');
    }
    const handleSearch = (event) => {
        const token= JSON.parse(localStorage.getItem("token"));
        let config = {
            headers: {
              'Authorization': 'Token ' + token
            }
        }
        const fetchData = async () => {
          const result = await axios(
            baseUrl+'search?nameFriend='+ searchTerm, config  
          );
          debugger;
          setContactList(result.data);
          console.log(contactList);
          
        };
        fetchData();
    }
    const handleChange = event => {
        setSearchTerm(
            event.target.value
        );
    }
    const handleLogout= event =>{
        history.push('/');
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <Box width="80%">
                        <SearchBar
                            className={classes.searchBar}
                            value={searchTerm}
                            onSearch={handleSearch}
                            onChange={handleChange} />
                    </Box>
                    <Avatar alt="Avatar" src={image1} />
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Button variant="contained" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <ListItems url={url} />
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid xs={10}>
                             <Switch>
                                {/* define a component arrive */}
                                <Route exact path={path}>
                                    <ListContact value={contactList} />
                                </Route>
                                <Route path={`${path}/addNewFriend`}>
                                    <AddNewFriend />
                                </Route>
                                <Route path={`${path}/groupComponent`}>
                                    <GroupComponent />
                                </Route>
                                <Route path={`${path}/detail/:id`}>
                                    <Detail />
                                </Route>
                                <Route path={`${path}/memberGroup/:id`}>
                                    <ListMemberOfGroup />
                                </Route>
                            </Switch>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
                                
        
    );
}

export default Home;