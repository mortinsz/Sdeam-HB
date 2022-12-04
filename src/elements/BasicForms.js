import * as Yup from "yup";

const BasicForms = Yup.object().shape({
    email: Yup.string()
        //Проверяем, корректный ли адрес.
        //Если нет, то выводится сообщение в скобках
        .email("Email некорректен")
        //не сабмитим, если поле не заполнено
        .required("Обязательное поле"),
    login: Yup.string()
        //минимальная длина - 2 символа
        .required("Обязательное поле"),
    password: Yup.string()
        .min(8, "Пароль должен быть длинее 8 символов")
        .required("Обязательное поле"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
});
export default BasicForms;