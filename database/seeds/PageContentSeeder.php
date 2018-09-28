<?php

use Illuminate\Database\Seeder;

class PageContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('page_content')->insert([
            [
                'title' => 'about',
                'content' => serialize($this->getAboutContent())
            ],
            [
                'title' => 'payment',
                'content' => serialize($this->getPaymentContent())
            ],
            [
                'title' => 'warranty',
                'content' => serialize($this->getWarrantyContent())
            ],
        ]);
    }


    public function getAboutContent()
    {
        return [
            "paragraphList" => [
                "Любой владелец автомобиля периодически сталкивается с необходимостью покупки автозапчастей. "
                . "Некоторые отправляются в магазин запчастей, кто-то предпочитает авторынок, "
                . "другие доверяют сервисной станции, но те, кто экономит свое время и хочет "
                . "получить максимальный выбор при минимальных ценах - выбирает интернет-магазин автозапчастей "
                . "Advanced Auto Center. Это удобно, быстро и практично. Вы можете купить запчасти, не выходя из дома, "
                . "и оформить доставку в любую область и город или лично забрать их на складе.",

                "Очевидно, что проще всего купить запчасти в Киеве - городе, где находится знаменитый "
                . "интернет-магазин Advanced Auto Center. Здесь всегда и широком ассортименте есть автозапчасти ВАЗ, "
                . "автозапчасти Ланос, автозапчасти Сенс, автозапчасти УАЗ, автозапчасти Chevrolet (Шевроле), "
                . "автозапчасти ГАЗ к легковым автомобилям и грузовикам ГАЗ, автозапчасти для Трактора, "
                . "а также расходные материалы, автохимия, аксессуары, масла и прочие эксплуатационные жидкости "
                . "и аксессуары к автомобильной технике таких брендов как ОАО ГАЗ, ЗМЗ, АвтоВАЗ, БАТЭ, Кострома, "
                . "Герцог, ТЗА, БРТ, СОАТЭ, Лузар, Пекар, SM, KYB, SCT, BOSCH и др. отечественного "
                . "и импортного производства.",

                "В нашем интернет-магазине вы сможете подобрать необходимые детали по каталожному номеру, "
                . "названию или даже фотографии! Менеджеры компании отлично ориентируются в ассортименте и "
                . "всегда помогут вам подобрать нужные запчасти для вашего авто, оформят заказ и организуют доставку. "
                . "На всю продукцию, предлагаемую в интернет-магазине Advanced Auto Center, "
                . "предоставляются сертификаты качества."
            ]
        ];
    }


    public function getPaymentContent()
    {
        return [
            "paragraph1" => [
                "title" => "Оплата осуществляется:",

                "list" => [
                    "наличными (только в нашем магазине по адресу г. Киев ул. М.Коцюбинского, 14)",

                    "наложенным платежом (при отправке Новой Почтой)",

                    "банковским переводом или с помощью интернет-банкинга"
                ],

            ],

            "paragraphList" => [
                "Оплата через кассу банка производится следующим образом: после того, как наш менеджер отправит "
                . "Вам счет (после обработки Вашего заказа нашими менеджерами на Ваш мобильный телефон придет "
                . "уведомление о том, что на указанный Вами e-mail отправлен счет), Вы оплачиваете его в отделении "
                . "любого банка. В примечании к платежу обязательно укажите номер заказа или номер счета "
                . "(иначе Ваш заказ будет обрабатываться дольше), "
                . "или номера счетов если вы оплачиваете несколько счетов. "
                . "Ваш заказ будет отправлен сразу же после поступления платежа на наш расчетный счет.",

                "Отправка осуществляется следующими курьерскими службами: Новая почта, Автолюкс",

                "Доставка оплачивается Вами отдельно - при получении товара. Стоимость доставки зависит от "
                . "таких параметров: расстояние, вес посылки, габариты посылки, страховочная стоимость посылки. "
                . "Узнать стоимость доставки посылки вы сможете у конкретного перевозчика в Вашем городе. "
                . "Доставка осуществляется только по территории Украины. Из-за загруженности складов перевозчиков "
                . "сроки отгрузки товара могут увеличиваться на 1-2 дня.",

                "Если оплата поступит до 12:45 (при доставке \"Новой почтой\") или до 11:45 "
                . "(при доставке другими курьерскими службами), Ваш заказ будет отправлен в этот же день, "
                . "если позже - отправление заказа переносится на следующий день. Обработка заказа осуществляется "
                . "на протяжении всего графика работы интернет-магазина. Менеджер сам свяжется с Вами после "
                . "того как Ваш платеж поступит на наш расчетный счет. Звонить менеджеру сразу после оплаты не нужно, "
                . "поскольку банковский перевод занимает какое-то время. В нашем магазине нет понятия "
                . "\"минимальный заказ\", т.е. Вы можете оформить заказ на любую сумму. Внешний вид товара "
                . "может отличаться от фотографии на сайте (например, это может произойти по причине "
                . "изменения упаковки производителем). При получении посылки на складе перевозчика обязательно "
                . "проверяйте целостность упаковки и товара.",

                "Стоимость доставки зависит от таких параметров: расстояние, вес, ГАБАРИТ "
                . "(свыше 150 см, так же ШИНЫ, ДИСКИ, АКБ). ГАБАРИТНЫЕ отправки ТОЛЬКО на отделения без "
                . "ограничения по весу. Стоимость доставки просчитывает перевозчик.",

                "После поступления оплаты, с Вами свяжется менеджер (исключение, постоянные клиенты или "
                . "с пометкой отправка без созвона) для проверки данных отправки. Не согласованные заказы "
                . "отправляются после контакта с клиентом.",

                "Вопросы касательно качества, комплектаций, наличий, повреждений, пересортицы, "
                . "проверяются исключительно на перевозчике. Претензии касательно полученной посылки вне перевозчика, "
                . "магазину не выдвигаются, кроме вопросов гарантийного случая.",

                "На почтоматы отправка не осуществляется."
            ]
        ];
    }


    public function getWarrantyContent()
    {
        return [
            "paragraph1" => [
                "title" => "Гарантия признается действительной при следующих условиях:",

                "list" => [
                    "наличие документа, подтверждающего приобретение запчастей;",

                    "сохранность товарного вида и наличие заводской упаковки (при наличии таковой от производителя);",

                    "наличие сертификата СТО на проведение данного вида работ;",

                    "заключение о неработоспособности детали;",

                    "запасная часть соответствует спецификации автомобиля "
                    . "(неоригинальная запчасть является заменителем оригинальной);",

                    "автомобиль эксплуатировался нормальным образом и обслуживание производилось "
                    . "в соответствии с рекомендациями фирмы – производителя автомобиля;",

                    "автомобиль не подвергался эксплуатационным перегрузкам."
                ]
            ],

            "paragraph2" => [
                "title" => "Гарантия на запчасти не распространяется в следующих случаях:",

                "list" => [
                    "износ запчасти;",

                    "повреждение запчасти в результате ДТП или небрежной эксплуатации;",

                    "неисправности запчасти топливной системы или системы выпуска вследствие "
                    . "применения некачественного топлива;",

                    "повреждения подвески и рулевого управления, возникшие из-за небрежного вождения, "
                    . "сопряженного с ударными нагрузками на автомобиль на неровностях дороги;",

                    "внешние повреждения стекол кузова и приборов освещения;",

                    "дефекты, неисправности, коррозия запчастей, возникшие в результате воздействия химического, "
                    . "кислотного или щелочного загрязнения воздуха, продуктов жизнедеятельности животных и птиц, "
                    . "химических веществ, применяемых для борьбы с обледенением дорог, града, молнии и др. "
                    . "природных явлений;",

                    "эксплуатационный износ и естественное изменение(старение) запчастей — щетки стеклоочистителя, "
                    . "приводные ремни, тормозные колодки, диски сцепления, свечи зажигания и т.п.;",

                    "расходные запчасти и материалы – масло, фильтры, лампы, предохранители и т.п."
                ]
            ],

            "paragraphList" => [
                "Возврату (обмену) оригинальные электрические запчасти не подлежат, "
                . "за исключением гарантийных случаев.",

                "Заказчик вправе требовать гарантийного обмена запчасти в период гарантийного срока при "
                . "соблюдении всех требований, установленных настоящим Положением.",

                "Обмен (возврат) запчастей осуществляется лишь при наличии товарного вида."
            ]
        ];

    }
}
