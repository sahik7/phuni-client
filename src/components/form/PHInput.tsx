import { useFormContext } from "react-hook-form";

const PHInput = () => {

    const { register } = useFormContext()
    return (
        <div>
            <input type="text" id="password" {...register("password")} />
        </div>
    );
};

export default PHInput;