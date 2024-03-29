import { Button, Row } from "antd"
import { FieldValues, useForm, useFormContext } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/features/hooks"
import { IUser, setUser } from "../redux/features/auth/authSlice"
import { verifyToken } from "../utils/verifyToken"
import { useNavigate } from "react-router-dom"
import { toast } from 'sonner';
import PHForm from "../components/form/PHForm"
import PHInput from "../components/form/PHInput"


function Login() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [login] = useLoginMutation()

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
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
        <Row justify="center" align="middle" style={{ height: "100vh" }}>

            <PHForm onSubmit={onSubmit}>
                <div>
                    < PHInput type="text" name="id" label="ID:" />
                </div>
                <div>
                    <PHInput type="text" name="password" label="Password" />
                </div>
                <Button htmlType="submit">Login</Button>
            </PHForm>
        </Row>
    )
}

export default Login