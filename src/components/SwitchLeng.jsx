function SwitchLeng(props) {
    const { leng, toggleLeng } = props
    return (
        <div className="switch">
            <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" onChange={toggleLeng} checked={leng === "ESP"} />
            <label htmlFor="language-toggle"></label>
            <span className="off">ENG</span>
            <span className="on">ESP</span>
        </div>
    );
}

export default SwitchLeng;