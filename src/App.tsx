/* tslint:disable:max-classes-per-file comment-format ordered-imports no-console */
import * as React from "react"
//import './App.css';
//import logo from './logo.svg';
//import Button from "@material-ui/core/Button"
import {PrimaryAppBar} from "./ui/PrimaryAppBar"
import {ClemexApp} from "./ui/SimplePageLayout"
import {PixabayImageFinder} from "./ui/PixabayImageFinder"
export class App extends React.Component {
  public render() {
    // fetch("https://github.com/nemethmik",{mode: "no-cors"}).then((r:Response)=>r.text()).then((r:string)=>console.log(r)).catch((e:Error)=>console.log("Error",e))
    return (
      <>
      {/*<Button variant="contained" color="primary">Hello T11 Mobile Warehouse</Button>*/}
      {/*<PrimaryAppBar title="T11 MobiWa" processBar={true}/>*/}
      {/*<ClemexApp/>*/}
      <PixabayImageFinder/>
      </>
    )
  }
}
