import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHttp } from '../hooks/http.hook';
import PhoneInput from '../phoneInput/PhoneInput';
import { useState } from 'react';

export const FastOrderForm = ({totalPrice, products}) => {

    const {request} = useHttp();

    return(
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: ""
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .required('Обязательное поле')
                        .min(5, 'Минимум 5 символов'),
                    email: Yup.string()
                        .email('Неправильный адрес почты')
                        .required('Обязательное поле'),
                    phone: Yup.string()
                            .transform((value) => value.replace(/\D/gm, ''))
                            .min(12, 'Введите номер полностью')
                            .required('Обязательное поле')
                })
            }
            onSubmit={(value, actions) => {
                value.phone = `+${value.phone.replace(/\D/gm, '').slice(0, 12)}`;
                value.products = products.map(item => ({id: item.id, count: item.count}));
                value.totalPrice = totalPrice;
                request("http://localhost:3001/orders", 'POST', JSON.stringify(value))
                    .then(actions.resetForm())
            }}
        >
            <Form>
                <table>
                    <tbody>
                        <tr className="form-delivery">
                            <td className="form-label">
                                ФИО
                            </td>
                            <td>
                                <Field type="text" name="name" className="form-input" />
                                <ErrorMessage name='name' className='error' component='div'/>
                            </td>
                        </tr>
                        <tr className="form-delivery">
                            <td className="form-label">
                                Email
                            </td>
                            <td>
                                <Field type="email" name="email" className="form-input" />
                                <ErrorMessage name='email' className='error' component='div'/>
                            </td>
                        </tr>
                        <tr className="form-delivery">
                            <td className="form-label">
                                Телефон
                            </td>
                            <td>
                                <PhoneInput/>
                                <ErrorMessage name='phone' className='error' component='div'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="form-footer">
                    <button type="submit" className="btn btn-dark">Оформить заказ</button>
                    <div className="form-terms">Подтверждая заказ я принимаю условия 
                        <br />
                        <a href="#">согласия пользователя</a>
                    </div>
                </div>
            </Form>
        </Formik>
    )
    
}

export const LoginForm = () => {
    const {request} = useHttp();

    const [eror, setError] = useState(false);

    return (    
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={
                Yup.object({
                    email: Yup.string()
                        .email('Неправильный адрес почты')
                        .required('Обязательное поле'),
                    password: Yup.string()
                        .required('Обязательное поле')
                })
            }
            onSubmit={(value) => {
                console.log(value);
                request('http://localhost:3001/users')
                    .then(user => {  
                        user.some(item => {
                            if (item.email === value.email && item.password === value.password) {
                                console.log(item.name);
                                setError(false)
                                return item.id;
                            } else {
                                console.log(user);
                                setError(true)
                                return null
                            }
                        })
                    })
            }}
        >
        <Form>
        {eror ? <div className='error'>Неправильная комбинация почты и пароля</div> : null}
            <table>
                <tbody>
                    <tr className="form-delivery">
                        <td className="form-label">
                            Email
                        </td>
                        <td>
                            <Field type="email" name="email" className="form-input" />
                            <ErrorMessage name='email' className='error' component='div'/>
                        </td>
                    </tr>
                    <tr className="form-delivery">
                        <td className="form-label">
                            Пароль
                        </td>
                        <td>
                            <Field type="password" name="password" className="form-input" />
                            <ErrorMessage name='password' className='error' component='div'/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="form-footer">
                <button type='submit' className="btn btn-dark">Войти</button>
                <div className="form-terms">
                    <a href="#">Забыли пароль?</a>
                </div>
            </div>
        </Form>

    </Formik>)
}


export const NewUserOrderForm = ({totalPrice, products}) => {    

    const {request} = useHttp();

    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
                callCheckbox: '',
                city: '',
                email: '',
                textarea: '',
                deliveryType: 'novapost',
                deliveryAdres: 'some addres 1',
                payment: 'novapost'

            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                            .required('Обязательное поле')
                            .min(5, 'Минимум 5 символов'),
                    phone: Yup.string()
                            .transform((value) => value.replace(/\D/gm, ''))
                            .min(12, 'Введите номер полностью')
                            .required('Обязательное поле'),
                    city: Yup.string()
                            .required('Обязательное поле'),
                    email: Yup.string()
                            .email('Неправильный адрес почты')
                            .required('Обязательное поле'),
                    textarea: Yup.string()
                            .min(10, 'Минимум 10 символов'),
                    deliveryType: Yup.string().required('Обязательное поле'),
                    deliveryAdres: Yup.string().required('Обязательное поле'),
                    payment: Yup.string().required('Обязательное поле')
            })}
            onSubmit={(value, actions) => {
                value.phone = `+${value.phone.replace(/\D/gm, '').slice(0, 12)}`;
                value.products = products.map(item => ({id: item.id, count: item.count}));
                value.totalPrice = totalPrice;
                request("http://localhost:3001/orders", 'POST', JSON.stringify(value))
                    .then(actions.resetForm())
            }}
        >  
            <Form className="new-customer">
                <table>
                    <tbody>
                        <tr>
                            <td className="form-label">ФИО</td>
                            <td>
                                <Field className="form-input" type="text" name="name" />
                                <ErrorMessage name='name' className='error' component='div'/>
                            </td>
                        </tr>
                        <tr>
                            <td className="form-label">Телефон</td>
                            <td>
                                <PhoneInput/>
                                <ErrorMessage name='phone' className='error' component='div'
                                />
                                <label htmlFor="form-checkbox" className="form-checkbox">
                                    <Field className="form-checkbox" id="form-checkbox" name="callCheckbox" type="checkbox"/>
                                    Не звонить для подтверждения заказа
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="form-label">
                                Город
                            </td>
                            <td>
                                <Field type="text"
                                    name="city" 
                                    className="form-input"
                                    placeholder="название города или почтовый индекс" 
                                />
                                <ErrorMessage name='city' className='error' component='div'/>
                            </td>
                        </tr>
                        <tr>
                            <td className="form-label">
                                E-mail
                            </td>
                            <td>
                                <Field type="email" 
                                    className="form-input" 
                                    name="email"    
                                />
                                <ErrorMessage name='email' className='error' component='div'/>
                            </td>
                        </tr>
                        <tr>
                            <td className="form-label">
                                Коментарий
                            </td>
                            <td>
                                <Field as='textarea'
                                    className="form-input" 
                                    name="textarea"
                                />
                                <ErrorMessage name='name' className='textarea' component='div'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="devider"></div>
                <table>
                    <tbody>
                        <tr className="form-delivery">
                            <td className="form-label form-label--bold">
                                Доставка 
                            </td>
                            <td>
                                <Field as="select" 
                                    name="deliveryType" 
                                    id="delivery"
                                    className="form-input"
                                >
                                    <option value="novapost">
                                        Новая почта - доставка в отделение
                                    </option>
                                    <option value="novapost-cur">
                                        Новая почта - доставка куръером
                                    </option>
                                    <option value="ukrpost">
                                        Укрпочта - доставка в отделение 
                                    </option>
                                    <option value="pickup">
                                        Самовывоз
                                    </option>
                                </Field>
                                <ErrorMessage name='deliveryType' className='error' component='div'/>
                            </td>
                        </tr>
                        <tr className="form-delivery">
                            <td className="form-label">Отделение</td>
                            <td>
                                <Field as="select" name="deliveryAdres" 
                                    id="delivery-type"
                                    className="form-input"
                                >
                                    <option value="some addres 1">some addres 1</option>
                                    <option value="some addres 2">some addres 2</option>
                                    <option value="some addres 3">some addres 3</option>
                                    <option value="some addres 4">some addres 4</option>
                                    <option value="some addres 5">some addres 5</option>
                                </Field>
                                <ErrorMessage name='deliveryAdres' className='error' component='div'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="devider"></div>
                <table>
                    <tbody>
                    <tr className="form-delivery">
                            <td className="form-label form-label--bold">
                                Оплата
                            </td>
                            <td>
                                <Field as="select" name="payment" 
                                    id="payment"
                                    className="form-input"
                                >
                                    <option value="novapost">
                                        Оплата онлайн картой
                                    </option>
                                    <option value="novapost-cur">
                                        Наложный платёж при получении
                                    </option>
                                </Field>
                                <ErrorMessage name='payment' className='error' component='div'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="devider"></div>
                <div className="form-footer">
                    <button 
                        type='submit'  
                        className="btn btn-dark"
                    >
                        Оформить заказ
                    </button>
                    <div className="form-terms">Подтверждая заказ я принимаю условия 
                        <br />
                        <a href="#">согласия пользователя</a>
                    </div>
                </div>
            </Form>       
        </Formik>
    )
}