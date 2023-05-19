import classes from './ImageRender.module.css'

const ImageRender = (props)=>{
    return(
        <div className={classes.card}>
            <img src={props.source} alt='apiImageData' />
        </div>
    )
};
export default ImageRender;