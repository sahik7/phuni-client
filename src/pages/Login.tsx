import { useForm } from "react-hook-form"

function Login() {

    const { register, handleSubmit } = useForm()

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>
        </form>
    )
}

export default Login