const Alert = ({alert: {msg, error}}) => {
    return (
        <div className={`${error ? 'bg-red-500' : 'bg-indigo-600'} text-center p-3 uppercase rounded text-white font-bold text-sm mg-10`}>
            {msg}
        </div>
    )
}

export default Alert; 