export const pieData = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Kullanıcıların En Çok Aradığı Ürün Grupları",
  },
  credits: {
    enabled: false,
  },

  series: [
    {
        name: 'Oran %',
        colorByPoint: true,
        data: [
            {
                name: 'Bilgisayar',
                y: 20
            },
            {
                name: 'Cep Telefonu',
                y: 43
            },
            {
                name: 'Beyaz Eşya',
                y: 17
            },
            {
                name: 'Spor Ayakkabı',
                y: 10
            },
            {
                name: 'Oyun Konsolu',
                y: 10
            }
        ]
    }
]
};

export const stockData = {
  title: {
    text: "n11.com Günlük Site Trafik Eğrisi",
  },
  credits: {
    enabled: false,
  },

  yAxis: {
    title: {
      text: "Ziyaretçi Sayısı",
    },
  },

  xAxis: {
    categories: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
    crosshair: true,
    title: {
      text: "Saat",
    },
  },

  series: [
    {
      name: "Ortalama Ziyaretçi",
      data: [43934, 656, 6165, 81827, 112143, 142383],
    },
  ],
};

export const columnData = {
  chart: {
    type: "column",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "n11.com Yıllık Ürün Satış Miktarları",
  },
  xAxis: {
    categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Miktar",
    },
  },
  tooltip: {
    valueSuffix: " Adet",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Yurt İçi",
      data: [406292, 260000, 107000, 68300, 27500, 14500],
    },
    {
      name: "Yurtdışı",
      data: [51086, 136000, 5500, 141000, 107180, 77000],
    },
  ],
};
