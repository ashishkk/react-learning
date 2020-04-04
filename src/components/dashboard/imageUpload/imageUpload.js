import React, {Component} from 'react';

class ImageUpload extends Component{
    constructor(){
        super();
        this.state = {
            file: '',
            imgaPreview:'',
            fileList: []
        }
    }

    changeHandle = (e) => {
        // console.log("file", e.target.files[0])
        let reader = new FileReader();
        console.log("reader", reader)
        let file = e.target.files[0];
        reader.onload = () => {
            this.setState({
                file:file,
                imgaPreview:reader.result
            })
        }

        reader.readAsDataURL(file)
    }

    uploadHandler = () => {
        let {fileList, imgaPreview}=  this.state;
        fileList.push(imgaPreview);
        this.setState({fileList:fileList})
    }
    
    render(){
        console.log("imagespreview", this.state.fileList )
        return(
        <div>
            Image Upload
            <input type='file' onChange={this.changeHandle}/>
            <button onClick={this.uploadHandler}>Upload</button>
            {/* <img src={this.state.imgaPreview} height='300' width='300' /> */}
            <ul>
                {this.state.fileList.map((image, i) => {
                    const blob = new Blob([image], {type:'images/png'});
                    const url = URL.createObjectURL(blob)
                    return (
                        <div key={i}>
                            <img src={url} height='300' width='300'/>
                        </div>
                        )
                })}
            </ul>
           
        </div>
        )
    }
}
export default ImageUpload;