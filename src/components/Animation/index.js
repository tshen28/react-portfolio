import './index.scss';

const Animation = ({ letterClass, strArr, idx}) => {
    return (
        <span>
            { 
                strArr.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>))
            }
        </span>
    )
}

export default Animation;