import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import './Modal.css'

function Modal() {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >

            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>

                    <div className="feedBackModal">

                        <form className="feedBackModal__form">

                            <div className="feedBackModal__title">Добавить предложение к заказу</div>
                            <div className="feedBackModal__caption">Использовать шаблон</div>

                            <textarea placeholder="Здравствуйте! Я..." className="feedBackModal__txtarea"></textarea>

                            <label className="feedBackModal__label">
                                <input className="feedBackModal__checkbox" type="checkbox" />
                                <div className="feedBackModal__fakeCheckBox"></div>
                                <div className="feedBackModal__text feedBackModal__text_b">Оплата на банковскую карту через <span>“Сделку без риска”</span></div>
                            </label>

                            <div className="feedBackModal__text feedBackModal__text_card feedBackModal__text_g">
                                Выберите карту для оплаты
                            </div>
                            <input className="feedBackModal__input feedBackModal__input_card" type="text" />

                            <label className="feedBackModal__label">
                                <input className="feedBackModal__checkbox" type="checkbox" />
                                <div className="feedBackModal__fakeCheckBox"></div>
                                <div className="feedBackModal__text">Уведомите меня, если исполнителем задания выберут другого</div>
                            </label>

                            <label className="feedBackModal__label">
                                <input className="feedBackModal__checkbox" type="checkbox" />
                                <div className="feedBackModal__fakeCheckBox"></div>
                                <div className="feedBackModal__text">Указать время актуальности предложения</div>
                            </label>

                            <div className="feedBackModal__divider"></div>

                            <label className="feedBackModal__label" title="Заказчики увидят, что вы застрахованы, и будут выбирать вас чаще. В случае ущерба страховая компания выплатит за вас до 100 тыс. сомов.">
                                <input className="feedBackModal__checkbox" type="checkbox" />
                                <div className="feedBackModal__fakeCheckBox"></div>
                                <div className="feedBackModal__text">
                                    Подключить страховку
                                </div>
                            </label>

                            <div className="feedBackModal__subtitle">Стоимость вашей работы</div>
                            <div className="feedBackModal__subtitle_text feedBackModal__text_g">Заказчик указал стоимость - 1950 сом.</div>

                            <input className="feedBackModal__input feedBackModal__input_price" value="5000 сом" type="text" />

                            <div className="feedBackModal__footer">

                                <button className="feedBackModal__btn" onClick={handleClose} autoFocus>
                                    Отправить
                                </button>

                            </div>

                        </form>

                    </div>

                </DialogContent>

            </Dialog >

        </div >
    )
}

export default Modal
