import { useForm } from "react-hook-form";

const PHForm = ({ onSubmit }) => {

    const { handleSubmit } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>PHForm submit</h1>
        </form>
    );
};

export default PHForm;