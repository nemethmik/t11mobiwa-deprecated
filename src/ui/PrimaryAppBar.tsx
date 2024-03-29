/* tslint:disable:max-classes-per-file comment-format ordered-imports member-ordering jsx-boolean-value object-literal-sort-keys interface-over-type-literal */
import * as React from "react"
import * as PropTypes from "prop-types"
import {AppBar,Badge,Button,Divider,Drawer,Fab,IconButton,InputBase,List,ListItem,ListItemIcon,ListItemText,Menu,MenuItem,Toolbar,Tooltip,Typography,MobileStepper} from "@material-ui/core"
import {pink,green} from '@material-ui/core/colors';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles, Theme, createStyles,StyleRules,createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import ErrorIcon from '@material-ui/icons/Error';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
const muiTheme = createMuiTheme({typography: {useNextVariants: true,},});
type TPrimaryAppBarStyleFields = {
root: any,
menuButton: any,
title: any,
sectionDesktop: any,
sectionMobile: any,
fabMargin: any,
processBar: any,
drawerList: any,
}
const primaryAppBarStyleShape: TPrimaryAppBarStyleFields = {
  root: PropTypes.string.isRequired,
  menuButton: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sectionDesktop: PropTypes.string.isRequired,
  sectionMobile: PropTypes.string.isRequired,
  fabMargin: PropTypes.string.isRequired,
  processBar: PropTypes.string.isRequired,
  drawerList: PropTypes.string.isRequired,
}
type TPrimaryAppBarComponentProps = {
  //The Material UI withStyles HOC automatically includes the field classes into props, and TypeScript compiler somehow understands the trick; really amazing technology.  
  classes: TPrimaryAppBarStyleFields,
  title:string,
  processBar:boolean,
}
class PrimaryAppBarComponent extends React.Component<TPrimaryAppBarComponentProps> {
  public static propTypes = {
    //classes: PropTypes.object.isRequired,
    classes: PropTypes.shape(primaryAppBarStyleShape).isRequired,
    title:PropTypes.string.isRequired,
    processBar:PropTypes.bool.isRequired,
  }
  public state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    drawerOpen: false,
  };
  private handleProfileMenuOpen = (event:any) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  private handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };
  private handleMobileMenuOpen = (event:any) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };
  private handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  public render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const renderDesktopMenu = (
      <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen} onClose={this.handleMenuClose}>
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );
    const renderMobileMenu = (
      <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen} onClose={this.handleMobileMenuClose}>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
    const drawerSideList = (
      <div className={classes.drawerList}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              {this.props.title}
            </Typography>
            {/*<div className={classes.grow} />*/}
            <div style={{flexGrow: 1}} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true" onClick={this.handleProfileMenuOpen} color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton color="inherit">
                <Badge badgeContent={11} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
          <Toolbar className={classes.processBar}>
          <Button variant="contained" size="small" color="secondary">Post</Button>
          <Button variant="contained" size="small" color="primary">Save</Button>
          <Button variant="contained" color="inherit">Login</Button>
          <Fab size="small" color="secondary" aria-label="Add" className={classes.fabMargin}>
            <AddIcon />
          </Fab>
        </Toolbar>
        </AppBar>
        {renderDesktopMenu}
        {renderMobileMenu}
        {this.props.processBar && (
            <>
              <Toolbar className={classes.processBar} >
                  <Tooltip title="Business Document Selected"><SearchIcon /></Tooltip>
                  <LooksOneIcon color="secondary" />
                  <LooksTwoIcon />
                  <ErrorIcon color="error"/>
                  <Looks3Icon />
                  <Looks4Icon />
              </Toolbar>
              <DotsMobileStepper theme={muiTheme}/>
            </>
        )}
        <Drawer anchor="left" open={this.state.drawerOpen} onClose={this.toggleDrawer}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
            {drawerSideList}
          </div>
        </Drawer>
        <h6>Section 1</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ad quos animi ea laboriosam nobis. Deleniti, velit similique nesciunt aliquam nulla optio harum libero ullam officia placeat sed laboriosam? Vel?</p>
        <h6>Section 2</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ad quos animi ea laboriosam nobis. Deleniti, velit similique nesciunt aliquam nulla optio harum libero ullam officia placeat sed laboriosam? Vel?</p>
        <h6>Section 3</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ad quos animi ea laboriosam nobis. Deleniti, velit similique nesciunt aliquam nulla optio harum libero ullam officia placeat sed laboriosam? Vel?</p>
        <h6>Section 4</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ad quos animi ea laboriosam nobis. Deleniti, velit similique nesciunt aliquam nulla optio harum libero ullam officia placeat sed laboriosam? Vel?</p>
        <h6>Section 5</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ad quos animi ea laboriosam nobis. Deleniti, velit similique nesciunt aliquam nulla optio harum libero ullam officia placeat sed laboriosam? Vel?</p>
        <h6>Section 6</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ad quos animi ea laboriosam nobis. Deleniti, velit similique nesciunt aliquam nulla optio harum libero ullam officia placeat sed laboriosam? Vel?</p>
        <h6>Section 7</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ad quos animi ea laboriosam nobis. Deleniti, velit similique nesciunt aliquam nulla optio harum libero ullam officia placeat sed laboriosam? Vel?</p>
      </div>
    )
  }
  // This is the (closure) way to call a function with parameters from an event handler
  // private toggleDrawer = (open:boolean) => () => {
  //   this.setState({drawerOpen : open,});
  // };
  private toggleDrawer = () => {
    //We can simply call setState here without a callback, since we don't want to do anything after the drawer is opened or closed 
    this.setState({drawerOpen : !this.state.drawerOpen});
  };
}
class DotsMobileStepper extends React.PureComponent<{theme:Theme},{activeStep:number}> {
  public static propTypes = {
    theme: PropTypes.object.isRequired,
  }
  public state = {activeStep: 0,};
  private handleNext = () => this.setState((state) => ({activeStep: state.activeStep + 1}))
  private handleBack = () => this.setState((state) => ({activeStep: state.activeStep - 1}))
  public render() {
    return (
      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={this.state.activeStep}
        style={{padding:1,maxHeight:20}}
        nextButton={
          <Button color="secondary" size="small" onClick={this.handleNext} disabled={this.state.activeStep === 5}>
            Next
            {this.props.theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button color="secondary" size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
            {this.props.theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    )
  }
}
// ================ Style ====================
// The createStyles is required only for TypeScript (see https://material-ui.com/guides/typescript/)
// This is slightly faster than inline styling, since these objects are permanently created at compile time.
//
// type PrimaryAppBarStyleFieldNames = "root" | "menuButton" | "title" | "sectionDesktop" |
// "sectionMobile" | "fabMargin" | "processBar" | "drawerList"
//const primaryAppBarStyleFields: StyleRules<PrimaryAppBarStyleFields>
// StyleRules cannot be used here since this style definition is dynamic and has a reference to the theme object.  
const primaryAppBarStyles = (theme:Theme) => createStyles({
  root: { width: '100%',},
  drawerList: { width: "auto",/*250,*/ },
  menuButton: { marginLeft: -12, marginRight: 20, },
  title: {
    display: 'block', //Now display is enabled in any screen sizes
    // Title display was disabled by default. 
    // display: 'none',
    // Title was displayed only larger screens than small
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  processBar: { minHeight: 20, },
  sectionDesktop: { display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: { display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  fabMargin: { margin: theme.spacing.unit, },
});
// ===========================================
// ts-ignore
export const PrimaryAppBar = withStyles(primaryAppBarStyles)(PrimaryAppBarComponent);
