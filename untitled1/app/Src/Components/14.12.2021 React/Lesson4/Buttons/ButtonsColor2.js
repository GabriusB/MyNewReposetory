const ButtonsColor2 = ({buttonColor, text, changeColor, number, changeText}) => {
    return (
        <div style={{backgroundColor:buttonColor}}>
            <h5>{text}</h5>
            <button onClick={() => {changeText(number);
                changeColor(number)}
            }
                    style={{backgroundColor:buttonColor}}>Change
            </button>
        </div>
    );
};
export default ButtonsColor2;