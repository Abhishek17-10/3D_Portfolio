
const Button = ({name, isBean = false, containerClass}) => {
    return (
        <button className={`btn $${containerClass}`}>
            {name}
        </button>
    )
}
export default Button
