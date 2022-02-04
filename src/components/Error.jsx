const Error = ({ msg }) => {
    return (
        <div className="bg-red-400 p-4 mb-5 rounded-md">
            <p className="font-bold text-center uppercase">
                { msg }
            </p>
        </div>
    )
}

export default Error
