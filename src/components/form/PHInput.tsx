import { useFormContext } from "react-hook-form";

const PHInput = ({ type, name }) => {

    const { register } = useFormContext()
    return (
        <div>
            <input type={type} id={name} {...register(name)} />
        </div>
    );
};

export default PHInput;