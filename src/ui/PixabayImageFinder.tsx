/* tslint:disable:max-classes-per-file comment-format ordered-imports member-ordering jsx-boolean-value object-literal-sort-keys interface-over-type-literal */
import * as React from "react"
import {AppBar,IconButton,Typography,Toolbar} from "@material-ui/core"
import {MuiThemeProvider,createMuiTheme} from "@material-ui/core/styles"
import MenuIcon from '@material-ui/icons/Menu';
const muiTheme = createMuiTheme({typography: {useNextVariants: true,},});
export class PixabayImageFinder extends React.Component {
  public render() : React.ReactNode {
    //className={classes.menuButton} aria-label="Menu"
    return (
      <MuiThemeProvider theme={muiTheme}>
        <AppBar>
          <Toolbar>
            <IconButton color="inherit" ><MenuIcon /></IconButton>
            <Typography color="inherit">Pixabay Finder</Typography>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
     )
  }
}
