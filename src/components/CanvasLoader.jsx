import {Html, useProgress}  from "@react-three/drei";

export const CanvasLoader = () => {
    const {progress} = useProgress();
    return (
        <Html
        as ="div"
        center
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        }}>
            <span className="canvas-loader"/>
            <p style={{fontSize:14, color:"#f1f1f1", fontWeight:400, marginTop:20}}>
                {progress !==0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    )
}


