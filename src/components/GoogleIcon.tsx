const GoogleIcon = (props: { icon: string, fontSize?: string}) => {
    return (
        <span className={`material-symbols-outlined ${props.fontSize}` } >
            {props.icon}
        </span>
    )
}

export default GoogleIcon