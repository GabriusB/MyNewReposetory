const ButtonsColor1 = ({getColor, getText}) => {
    return (
        <div style={{backgroundColor:getColor}}>
            <h2>{getText}</h2>
        </div>
    );
};
export default ButtonsColor1;