import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { pushParam, popParam } from '../../redux/slices/Params';
import { update } from '../../redux/slices/Products';
import styles from './styles/SortByProps.module.scss';
import getCurrentProducts from './api/getProducts.js';

const SortByProps = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
    } = useForm()

    const sendProps = () => {};

    const filters = [
        {ttl: 'ПО СВЕТУ', name: 'light', variants: ['нежные', 'яркие']},
        {ttl: 'ПО ЦВЕТУ', name: 'cost', variants: ['белый', 'желтый', 'зеленый', 'красный', 'оранжевый', 'розовый', 'синий']},
        {ttl: 'ПО ФОРМАТУ', name: 'format', variants: ['букет', 'в вазе', 'в конверте', 'в корзине', 'в шляпной коробке', 'в ящике']},
        {ttl: 'СТОИМОСТЬ', name: 'Cost', variants: ['нежные', 'нежные']},
        {ttl: 'ПО ЦВЕТКУ', name: 'flowers', variants: ['Альстромерия', 'Астильба', 'Альстромерия', 'Астильба', 'Альстромерия', 'Альстромерия', 'Альстромерия', 'Альстромерия', 'Астильба', 'Астильба', 'Астильба', 'Астильба', 'Астильба', 'Альстромерия']},
    ]

    // Redux state
    const types = useSelector((state: any) => state.prodTypes);
    const sortBy = useSelector((state: any) => state.sortby);
    const props = useSelector((state: any) => state.Params);

    React.useEffect(() => {
        const obj = { types, sortBy, props };

        // Make request
        try {
            getCurrentProducts(obj)
            .then((res: any) => {
                dispatch(update(res));
            })
        } catch (err) {
            console.error(err)
        }
    }, [props])
    
    const updateParams = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.currentTarget.previousElementSibling?.classList.toggle(styles.active);

        // take targetElem props
        const name = event?.currentTarget.name;
        const inputValue = event?.currentTarget.nextElementSibling?.innerHTML;
        
        // UPD State for Params
        if (event?.currentTarget.previousElementSibling?.classList.contains(styles.active)) {
            dispatch(pushParam({[name]: inputValue}))
        } else {
            dispatch(popParam({[name]: inputValue}))
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
                                    <input className={styles.checkbox} type={'checkbox'} {...register(`${topic.name}`, { onChange: updateParams })}/>
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