import React from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Guest>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className="mb-4 text-success">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="form-control"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
