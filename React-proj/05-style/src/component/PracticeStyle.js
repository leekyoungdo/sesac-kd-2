import "../styles/prac.scss"

function PracticeStyle () {
    return (
        <>
            <h1>실습 1</h1>
            <div className="larva">
            <div className="body body1"></div>
            <div className="eye eye-white"></div>
            <div className="eye eye-black"></div>
            <div className="body body2"></div>
            <div className="body body3"></div>
            <div className="body body4"></div>
            <div className="body body5"></div>

            {/*  process.env.PUBLIC_URL: /public 폴더 경로 */}
            <img
            className="grass"
            src={process.env.PUBLIC_URL + '/image (1).png'}
            alt="잔디"
            />
            </div>
        </>
    )
}

export default PracticeStyle;