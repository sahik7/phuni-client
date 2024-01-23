import { Input } from "antd";
import { Controller } from "react-hook-form";

const PHInput = ({ type, name, label }) => {
    return (
        <div>
            {label ? label : null}
            <Controller
                name={name} render={({ field }) =>
                    <Input {...field} type={type} id={name} />
                }
            />
        </div>
    );
};

export default PHInput;