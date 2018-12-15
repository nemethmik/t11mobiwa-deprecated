/* tslint:disable:max-classes-per-file comment-format ordered-imports member-ordering jsx-boolean-value object-literal-sort-keys interface-over-type-literal jsx-no-lambda no-console */
import * as React from 'react'
import * as PropTypes from "prop-types"
import {createMuiTheme,Theme,StyleRules, withStyles,MuiThemeProvider} from '@material-ui/core/styles';
import {purple,green,blue} from '@material-ui/core/colors';
import {AppBar, Grid, Button, ListItem, ListItemIcon, ListItemText, WithStyles, TextField, Typography,Toolbar,Paper } from '@material-ui/core';

export type SimplePageLayoutProperties = {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    main: React.ReactNode;
}
export class SimplePageLayout extends React.PureComponent<SimplePageLayoutProperties> {
  public render(): React.ReactNode {
     return (
        <div id="layout">
            <AppBar position="static">
                {this.props.header}
            </AppBar>
            <Grid container spacing={8}>
                <Grid item xs=  {2}>
                    {this.props.sidebar}
                </Grid>
                <Grid item xs={10}>
                    {this.props.main}
                </Grid>        
            </Grid>
        </div>
      );
  }
}
const themeOverrides = {MuiPaper: {root: {padding: '10px'}}}
const lightTheme = createMuiTheme({
  palette: { type: 'light', primary: blue },
  overrides: themeOverrides, 
  typography: {useNextVariants: true,},
});
const darkTheme = createMuiTheme({
  palette: { type: 'dark', primary: blue },
  overrides: themeOverrides, 
  typography: {useNextVariants: true,},
});
export type AppProperties = { }
export type AppState = { theme: Theme };
export class ClemexApp extends React.PureComponent<AppProperties, AppState> {
  public state: AppState = { theme: lightTheme }
  private setLightTheme = () => { this.setState({ theme: lightTheme }); }
  private setDarkTheme = () => { this.setState({ theme: darkTheme }); }
  public render(): React.ReactNode {
    const header = (
      <Toolbar>
        <div style={{flex:1}}>
            <Typography variant="h5">TypeScript React Template Application</Typography>
            <Typography variant="subtitle1">brought to you by</Typography>
        </div>
        <a href="https://github.com/clemex/typescript-react-template">
            <Button>Fork me on GitHub!</Button>
        </a>
      </Toolbar>
    );
    const sidebar = (
      <Paper elevation={4}>
          <ListItem button onClick={this.setLightTheme}>
            <ListItemText primary="light"/>
          </ListItem>
          <ListItem button onClick={this.setDarkTheme}>
            <ListItemText primary="dark"/>
          </ListItem>
        </Paper>);   

    const main = (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Counter/>
        </Grid>
       <Grid item xs={12}>
          <CounterForm value={100}/>
        </Grid>        
      </Grid>);

    return (
      <MuiThemeProvider theme={this.state.theme}>
        <SimplePageLayout
          main={main}
          sidebar={sidebar}
          header={header}
        />
      </MuiThemeProvider>
    );
  }
}

type CounterDisplayStyleKeys = "root" | "anotherStyle"
export const counterDisplaystyles: StyleRules<CounterDisplayStyleKeys> = {
  root: {backgroundColor: 'lightGray',fontWeight: 'bold',padding: 5},
  anotherStyle: {padding: 5}
}
const CounterDisplayStyleShape = {
  root: PropTypes.string.isRequired,
  anotherStyle: PropTypes.string.isRequired,
}
export type TCounterDisplayProps = {
  value: number;
  label: string;
}
export class CounterDisplay extends React.PureComponent<TCounterDisplayProps & WithStyles<CounterDisplayStyleKeys>> {
  public static propTypes = {
    classes: PropTypes.shape(CounterDisplayStyleShape).isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.number.isRequired,
  }
  public render(): React.ReactNode {
     return (
        <Typography className={this.props.classes.root} variant="h6">
          The current counter is:{this.props.label} = {this.props.value}
        </Typography>
    )
  }
}
export const CounterDisplayWithStyles = withStyles(counterDisplaystyles)(CounterDisplay);

export class Counter extends React.PureComponent {
  public render() {
    return (
       <Paper elevation={4}>
        <div>
          <CounterDisplayWithStyles value={11} label="Label XXX"/>
          <TextField label="label" value="10"/>
        </div>
        <div>
          <LabeledButton label="Increment" click={()=>console.log("Increment")} />
          <LabeledButton label="Decrement" click={()=>console.log("Decrement")} />
        </div>
        <div>
           <LabeledButton label="Undo" click={()=>console.log("Undo")} />
           <LabeledButton label="Redo" click={()=>console.log("Redo")} />
        </div>
      </Paper>
    );
  }
}
export type ButtonProperties = {
  label?: string;
  click: () => void;
}
export class LabeledButton extends React.PureComponent<ButtonProperties> {
  public render(): React.ReactNode {
      return (
          <Button onClick={this.props.click}>
              {this.props.label}
          </Button>
      );
  }
}
export type CounterFormData = {value: number;}
export type CounterFormProps = {value: number;}
export class CounterForm extends React.PureComponent<CounterFormProps> {
  public render() {
    const inputLabel = "Input value"
    return (
      <Paper elevation={4}>
        <Typography variant="subtitle1">A Form with Validation (Max 100)</Typography>
        <form>
          <div>
            <TextField
              name='value'
              label={inputLabel}                     
            />
            <div>
            <button type="submit" disabled={false}>
              Submit
            </button>
            <button type="button" disabled={false}>
              Clear
            </button>
            </div>
          </div>
        </form>
      </Paper>
    );
  }
}
