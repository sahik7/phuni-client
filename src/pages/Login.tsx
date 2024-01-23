import { Button } from "antd"
import { FieldValues, useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/features/hooks"
import { IUser, setUser } from "../redux/features/auth/authSlice"
import { verifyToken } from "../utils/verifyToken"
import { useNavigate } from "react-router-dom"
import { toast } from 'sonner';
import PHForm from "../components/form/PHForm"


function Login() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: "A-0001",
            password: "admin123"
        },
    })

    const [login] = useLoginMutation()

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("logging in ")
        try {
            const userInfo = {
                id: data.userId,
                password: data.password
            }
            const rest = await login(userInfo).unwrap();

            const user = verifyToken(rest.data.accessToken) as IUser
            dispatch(setUser({ user: user, token: rest.data.accessToken }))
            toast.success("logged in", { id: toastId, duration: 2000 })
            navigate(`/${user.role}/dashboard`)
        } catch (error) {
            toast.error("something went wrong", { id: toastId, duration: 2000 })
        }
    }

    return (
        <PHForm onSubmit={onSubmit}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register("userId")} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" {...register("password")} />
            </div>
            <Button htmlType="submit">Login</Button>
        </PHForm>
    )
}

export default Login