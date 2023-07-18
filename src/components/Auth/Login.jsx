import * as SC from "./Login.styled";
import { useFormik } from "formik";
import { useLoginMutation } from "redux/auth/authAPI";

export const Login = () => {
  const [login] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <SC.LoginWrapper>
      <SC.AuthTitle>Вхід</SC.AuthTitle>
      <SC.LoginForm onSubmit={formik.handleSubmit}>
        <SC.LoginInput
          id="email"
          name="email"
          type="text"
          placeholder="Логін"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <SC.LoginInput
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <SC.LoginButton type="submit">Увійти</SC.LoginButton>
      </SC.LoginForm>
    </SC.LoginWrapper>
  );
};
