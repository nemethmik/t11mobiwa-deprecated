/* tslint:disable:max-classes-per-file comment-format ordered-imports member-ordering jsx-boolean-value object-literal-sort-keys interface-over-type-literal no-console jsx-no-lambda */
import * as React from "react"
import {AppBar,Button,IconButton,Typography,Toolbar,TextField,Grid,InputAdornment,NativeSelect,Input,Select,InputLabel,MenuItem,FormControl,FormHelperText,Dialog,DialogTitle,DialogActions,DialogContent,GridList,GridListTile,GridListTileBar,Slide} from "@material-ui/core"
import {MuiThemeProvider,createMuiTheme} from "@material-ui/core/styles"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {pink,green,lightGreen} from '@material-ui/core/colors';
import axios from "axios"
import ZoomInIcon from "@material-ui/icons/ZoomIn"
const muiTheme = createMuiTheme({typography: {useNextVariants: true,},});
export class PixabayImageFinder extends React.Component {
  public render() : React.ReactNode {
    return (
      <>
        <AppBar position="sticky">
            <Toolbar style={{minHeight:40,maxHeight:40}}>
              {/*<IconButton color="inherit" ><MenuIcon /></IconButton>*/}
              <Typography variant="h6" noWrap color="inherit">Pixabay Finder</Typography>
            </Toolbar>
            <Toolbar>
              <a href="https://pixabay.com/">
                <img src="https://pixabay.com/static/img/public/leaderboard_b.png" width="100%" alt="Pixabay"/>
              </a>
            </Toolbar>
        </AppBar>
        <SearchBar/>
      </>
     )
  }
}
type TPixabayImage = {
  id: number,
  pageURL: string,
  type: "photo" | "video",
  tags: string,
  previewURL: string,
  previewWidth: number,
  previewHeight: number,
  webformatURL: string,
  webformatWidth: number,
  webformatHeight: number,
  largeImageURL: string,
  fullHDURL: string,
  imageURL: string,
  imageWidth: number,
  imageHeight: number,
  imageSize: number,
  views: number,
  downloads: number,
  favorites: number,
  likes: number,
  comments: number,
  user_id: number,
  user: string,
  userImageURL: string,
}
type TImageSearchBarState = {
  searchText: string,
  numberofImagesToGet: number,
  images:TPixabayImage[],
}
class SearchBar extends React.Component<{},TImageSearchBarState>{
  private static readonly pixabayAPI = "https://pixabay.com/api/?key=126338-8e2f836ed7b71bbd3fd183c37"
  public state = {
    searchText: "",
    numberofImagesToGet: 15,
    images:[],
  }
  private handleNumberOfImagesSelected = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const n = parseInt(e.target.value,10) 
    this.setState({numberofImagesToGet: n})
    this.queryImagesFromPixabay(this.state.searchText,n)
  }
  private queryImagesFromPixabay(searchText: string, numberofImagesToGet: number) {
    if(searchText) {
      const q = SearchBar.pixabayAPI + "&safesearch=true&image_type=photo&per_page=" + numberofImagesToGet + "&q=" + encodeURIComponent(searchText)
      // const q = "https://pixabay.com/api/?key=126338-8e2f836ed7b71bbd3fd183c37&q=yellow+flowers&image_type=photo"
      console.log("Query String",q)
      // axios.get(q).then((v)=>{this.setState({images:v.data.hits})})
      fetch(q).then((r:Response)=> {
        //console.log("FETCH(1)",r)
        return r.json()
      }).then((v:any)=>{
        //console.log("FETCH(2)",v)
        this.setState({images:v.hits})
      }).catch((reason)=>{console.log("Query:" + q, reason)})
    } else {this.setState({images:[]})} 
  }
  private onSearchTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({searchText: e.target.value})
    this.queryImagesFromPixabay(e.target.value,this.state.numberofImagesToGet)
  }
  public render() {
    //console.log("Images:",this.state.images," numberofImagesToGet=" + this.state.numberofImagesToGet)
    return (
      <div>
        <TextField label="Search" value={this.state.searchText} style={{marginTop:8}}
          onChange={this.onSearchTextChange}
          InputProps={{
            /*startAdornment:(<InputAdornment position="start"><SearchIcon /></InputAdornment>),*/
            endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
          }} helperText="Start typing search string" fullWidth={true}
        />
        <FormControl fullWidth={true} style={{marginTop:8,backgroundColor:"lightGreen"}}>
          <InputLabel htmlFor="numberofImagesToGet">Number of Images to Fetch: </InputLabel>
          <Select value={this.state.numberofImagesToGet} autoWidth
            onChange={this.handleNumberOfImagesSelected} 
            input={<Input id="numberofImagesToGet" />}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
          <FormHelperText>Select the number of images to fetch from Pixabay</FormHelperText>
        </FormControl>
        {this.state.images.length ? <ImageList images={this.state.images}/> : null}
      </div>
  )}
}
type TImageListState = {
  openImageDialog:boolean,
  imageDetails:TPixabayImage,
}
type TImageListProps = {
  images:TPixabayImage[]
}
class ImageList extends React.Component<TImageListProps,TImageListState> {
  public state: TImageListState
  constructor(props:TImageListProps) {
    super(props)
    this.state = {
      openImageDialog: false, 
      imageDetails: props.images[0],
    }
  }
  private handleClickOpen = (imageDetails:TPixabayImage) => {
    this.setState({openImageDialog: true, imageDetails});
  }
  private handleClose = () => {
    this.setState({openImageDialog: false});
  }
  private transition(props:any) {
    return <Slide direction="up" {...props} />;
  }
  public render() {
    return (
      <div>
        <GridList cols={3}>
          {this.props.images.map(i => (
            <GridListTile key={i.id}>
              <img src={i.largeImageURL} alt={i.tags} />
               <GridListTileBar title={i.tags} subtitle={<span>by: {i.user}</span>}
                actionIcon={
                  <IconButton onClick={()=>this.handleClickOpen(i)}>
                    <ZoomInIcon color="secondary" />
                  </IconButton>}/>
            </GridListTile>
          ))}
        </GridList>
        <Dialog open={this.state.openImageDialog} TransitionComponent={this.transition}
          keepMounted onClose={this.handleClose} fullScreen
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description">
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Pixabay Image Details
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogTitle id="alert-dialog-slide-title">
          {this.state.imageDetails.tags} by {this.state.imageDetails.user}
          </DialogTitle>
          <DialogContent>
            <img src={this.state.imageDetails.largeImageURL} width="100%"/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}