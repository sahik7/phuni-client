import { FormProvider, useForm } from "react-hook-form";

const PHForm = ({ onSubmit, children }) => {

    const { handleSubmit } = useForm()

    return <FormProvider>
        <form onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    </FormProvider>
};

export default PHForm;