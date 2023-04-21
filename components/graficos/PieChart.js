import { Chart } from 'react-google-charts'
import { useEffect, useState } from 'react'
import _ from 'lodash'

//Aqui dentro ficaria os dados vindo no Banco de dados
const data = [
    { Localizacao: "Campinas", temperatura: 20, data: "21/2/2022" },
    { Localizacao: "Hortolandia", temperatura: 30, data: "22/2/2022" },
]

const loadData = (data) => {
    const values = _.groupBy(data, (value) => {
        return value.Localizacao
    })

    const result = _.map(values, (value, key) => {
        return [
            key,
            _.sumBy(values[key], (v) => v.temperatura)
        ]
    })

    return [["Cidade", "Temperatura"], ...result]
}


function getRandomNumber() {
    //return Math.random() * 50;
    let temperatura = Math.floor(Math.random() * 50)
    return temperatura
}
/*
function GetingData(){
    return loadData(data)
}
*/
function getData() {
    return [
        ["Label", "Value"],
        ["Campinas", getRandomNumber()],
        ["Hortolândia", getRandomNumber()],
    ];
}

function PieChart() {
    const [chartData, setChartData] = useState([])
    const [datas, setDatas] = useState(loadData(data));


    // O useEffect ficara responsavel por sempre atualizar os dados vindo do banco
    useEffect(() => {
        //setChartData(loadData(data))
        setChartData(getData())
        const id = setInterval(() => {
            setDatas(getData());
            //setDatas(loadData(data));
        }, 800);

        return () => {
            clearInterval(id);
        };

    }, [])

    const options = {
        chart: {
          title: "Daods",
          subtitle: "Dados sub",
        },
        hAxis: {
          title: "Temp",
          minValue: 0,
        },
        vAxis: {
          title: "City",
        },
        bars: "horizontal",
        axes: {
          y: {
            0: { side: "right" },
          },
        },
        
      };

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Chart chartType="PieChart" data={datas} options={options} className="lg:w-full md:w-full sm:w-full w-[18rem] h-full"/>
        </div>
    )
}

export default PieChart