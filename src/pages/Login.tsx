function Login() {
    return (
        <div>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>
        </div>
    )
}

export default Login