import { Button } from "antd"
import { useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/features/hooks"

function Login() {


    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: "A-0001",
            password: "admin123"
        },
    })

    const [login, { error }] = useLoginMutation()
    console.log(error)

    const onSubmit = async (data) => {
        console.log(data)
        const userInfo = {
            id: data.userId,
            password: data.password
        }
        const rest = await login(userInfo).unwrap();
        dispatch(set)

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register("userId")} />
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