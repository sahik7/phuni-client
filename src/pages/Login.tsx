import { Button } from "antd"
import { useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"

function Login() {

    const { register, handleSubmit } = useForm()

    const [login, { data, error }] = useLoginMutation()
    console.log(data)
    console.log(error)

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register("user-id")} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" {...register("password")} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    )
}

export default Login