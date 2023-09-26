import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { pushParam, popParam } from '../../redux/slices/Params';
import styles from './styles/SortByProps.module.scss';


const SortByProps = () => {
    const dispatch = useDispatch();
    const filters = [
        {ttl: 'ПО СВЕТУ', name: 'light', variants: ['нежные', 'яркие']},
        {ttl: 'ПО ЦВЕТУ', name: 'cost', variants: ['белый', 'желтый', 'зеленый', 'красный', 'оранжевый', 'розовый', 'синий']},
        {ttl: 'ПО ФОРМАТУ', name: 'format', variants: ['букет', 'в вазе', 'в конверте', 'в корзине', 'в шляпной коробке', 'в ящике']},
        {ttl: 'СТОИМОСТЬ', name: 'Cost', variants: ['нежные', 'нежные']},
        {ttl: 'ПО ЦВЕТКУ', name: 'flowers', variants: ['Альстромерия', 'Астильба', 'Альстромерия', 'Астильба', 'Альстромерия', 'Альстромерия', 'Альстромерия', 'Альстромерия', 'Астильба', 'Астильба', 'Астильба', 'Астильба', 'Астильба', 'Альстромерия']},
    ]

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const sendProps = () => {

    };

    const changeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.currentTarget.previousElementSibling?.classList.toggle(styles.active);
        const name = event?.currentTarget.name;
        const value = event?.currentTarget.nextElementSibling?.innerHTML;

        console.log(event?.currentTarget.innerText);
        
        

        if (event?.currentTarget.previousElementSibling?.classList !== styles.active) {
            dispatch(pushParam({
                [name]: event?.currentTarget.nextElementSibling?.innerHTML,
            }))
        }
    };

    return (
        <form className={styles.block} onSubmit={handleSubmit(sendProps)}>
        {filters.map(topic => {
            return (
                <div className="">
                    <h2 className={styles.title}>{topic.ttl}</h2>
                    <div className={styles.inputs}>
                        {topic.variants.map((vari) => {
                            return (
                                <label className={styles.label}>
                                    <div className={styles.fakeCheckbox}></div>
                                    <input className={styles.checkbox} type={'checkbox'} {...register(`${topic.name}`, { onChange: changeHandler })}/>
                                    <span className={styles.inputText}>{vari}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>
            );
        })}
        </form>
    );
};

export default SortByProps;