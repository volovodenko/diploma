<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transporter;
use \GuzzleHttp\Client;
use App\DeliveryMethod;


class TransporterController extends Controller
{

    private $urlNovaPoshta = "https://api.novaposhta.ua/v2.0/json/";
    private $urlAutoLux = "http://api.autolux.ua/office/offices_by_territorial_units"
    . "/?access_token=";


    public function getTransporters(){
        $transporters = Transporter::all();

        return response($transporters, 200);
    }

    public function getCities(Client $client, Request $request)
    {

        $transporter = $request->transporter;
        $citiesList = [];

        switch ($transporter) {
            case 'Новая почта':
                $citiesList = $this->getCitiesNovaPoshta($client);
                break;

            case 'Автолюкс':
                $citiesList = $this->getCitiesAutoLux($client);
                break;
        }

//        sleep(5);

        return response($citiesList, 200);

    }

    public function getWarehouses(Client $client, Request $request)
    {

        $transporter = $request->transporter;
        $cityRef = $request->cityRef;
        $warehousesList = [];

        switch ($transporter) {
            case 'Новая почта':
                $warehousesList = $this->getWarehousesNovaPoshta($client, $cityRef);
                break;
        }

//        sleep(5);

        return response($warehousesList, 200);

    }


    protected function getCitiesNovaPoshta($client)
    {

        $data = "{\r\n\"modelName\": \"Address\",\r\n\"calledMethod\": \"getCities\","
            . "\r\n\"apiKey\": \"8e71cbca3a3811006e5c589e48a4b58e\"}";

        $res = $client->request("POST", $this->urlNovaPoshta, ['body' => $data]);

        $resCitiesList = json_decode($res->getBody())->data;

        $citiesList = array_map(function ($item) {
            $data = new \stdClass();

            $data->title = $item->DescriptionRu;
            $data->id = $item->Ref;

            return $data;

        }, $resCitiesList);

        return $citiesList;
    }


    protected function getWarehousesNovaPoshta($client, $cityRef)
    {

        $data = "{\r\n\"modelName\": \"AddressGeneral\",\r\n\"calledMethod\": \"getWarehouses\","
            . "\r\n\"apiKey\": \"8e71cbca3a3811006e5c589e48a4b58e\",\r\n\"methodProperties\": {"
            . "\r\n\"CityRef\": \"{$cityRef}\",\r\n\"Language\": \"ru\"\r\n}\r\n}";

        $res = $client->request("POST", $this->urlNovaPoshta, ['body' => $data]);

        $resWarehousesList = json_decode($res->getBody())->data;

        $warehousesList = array_map(function ($item) {
            $data = new \stdClass();

            $data->title = $item->DescriptionRu;
            $data->id = $item->Ref;

            return $data;

        }, $resWarehousesList);


        return $warehousesList;
    }


    protected function getCitiesAutoLux($client)
    {
        //получить инфо с access_token (с моего промежуточного серева)
        $options['timeout'] = 300;
        $res1 = $client->request("GET", "https://intense-stream-77990.herokuapp.com/", $options);

        $accessToken = json_decode($res1->getBody())->access_token;

        $res2 = $client->request("GET", $this->urlAutoLux . $accessToken);

        $resCitiesList = json_decode($res2->getBody());

        $citiesList = [];

        foreach ($resCitiesList as $item => $value) {
            $city = new \stdClass();

            $city->id = $value->id;
            $city->title = $value->name_ru;

            $city->warehouses = [];


            foreach ($value->offices as $office => $data) {
                if ($data->company_name === 'Архив') {
                    continue;
                }

                $company = new \stdClass();

                $company->id = $data->id;
                $company->title = $data->address_ru;

                array_push($city->warehouses, $company);
            }

            array_push($citiesList, $city);

        }

        return $citiesList;
    }


    public function getDeliveryMethods()
    {
        $deliveryMethods = DeliveryMethod::all();

        return response($deliveryMethods, 200);
    }
}
