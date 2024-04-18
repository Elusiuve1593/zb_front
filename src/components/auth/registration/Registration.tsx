import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRegistration } from "../../../redux/auth/operations";
import { AppDispatch } from "../../../redux/store";
import {
    ErrorMessageInput,
    Form,
    Input,
} from "../../../shared/components/FormInput/Form.styled";
import { FormInput } from "../../../shared/components/FormInput/FormInput";
import dubai from "../../../shared/components/img/Dubai.png";
import {
    CustomButton,
    Dubai,
    HeaderText,
    MainContainer,
    MarginError,
} from "../Auth.styled";
import { schema } from "./utils/yup";

interface RegistrationFormType {
  email: string;
  password: string;
  confirmPass: string;
}

export const Registration = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<RegistrationFormType>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<RegistrationFormType> = async (data) => {
    const { email, password } = data;
    const res = await dispatch(createRegistration({ email, password }));

    if (createRegistration.fulfilled.match(res)) {
      navigate("/");
    }
  };

  return (
    <MainContainer>
      <Dubai src={dubai} alt="Dubai" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <HeaderText>Registration</HeaderText>

        <FormInput label="E-mail" hasError={Boolean(errors?.email)}>
          <Input
            {...register("email")}
            name="email"
            placeholder=""
            type="text"
            defaultValue=""
          />
        </FormInput>
        {errors.email && (
          <ErrorMessageInput>{errors.email.message}</ErrorMessageInput>
        )}

        <FormInput label="Password" hasError={Boolean(errors?.password)}>
          <Input
            {...register("password")}
            name="password"
            placeholder=""
            type={"text"}
            defaultValue=""
          />
        </FormInput>
        {errors.password && (
          <ErrorMessageInput>{errors.password.message}</ErrorMessageInput>
        )}

        <FormInput
          label="Repeat the password"
          hasError={Boolean(errors?.password)}
          isLast
        >
          <Input
            {...register("confirmPass")}
            name="confirmPass"
            placeholder=""
            type={"text"}
            defaultValue=""
          />
        </FormInput>
        {errors.confirmPass && (
          <ErrorMessageInput>
            <MarginError>{errors.confirmPass.message}</MarginError>
          </ErrorMessageInput>
        )}

        <CustomButton disabled={!isValid}>Registration</CustomButton>
      </Form>
    </MainContainer>
  );
};
