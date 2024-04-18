import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createLogin } from "../../../redux/auth/operations";
import { AppDispatch } from "../../../redux/store";
import {
  ErrorMessageInput,
  Form,
  Input,
  NavigationLink,
} from "../../../shared/components/FormInput/Form.styled";
import { FormInput } from "../../../shared/components/FormInput/FormInput";
import dubai from "../../../shared/components/img/Dubai.png";
import {
  Account,
  CustomButton,
  Dubai,
  HeaderText,
  MainContainer,
  Sign
} from "../Auth.styled";
import { schema } from "./utils/yup";

interface LoginFormType {
  email: string;
  password: string;
}

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const { email, password } = data;
    const res = await dispatch(createLogin({ email, password }));

    if (createLogin.fulfilled.match(res)) {
      navigate("/main");
    }
  };

  return (
    <MainContainer>
      <Dubai src={dubai} alt="Dubai" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <HeaderText>Login</HeaderText>

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

        <CustomButton disabled={!isValid}>Login</CustomButton>
        <Account>
          Do not have account?
          <NavigationLink to="registration">
            <Sign> Sign Up</Sign>
          </NavigationLink>
        </Account>
      </Form>
    </MainContainer>
  );
};
