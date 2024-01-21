import { useForm } from "react-hook-form"

function Login() {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => { }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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