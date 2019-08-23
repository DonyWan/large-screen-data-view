export default {
    title: {
        // text: '漏斗图',
        // subtext: '纯属虚构'
    },
    tooltip: {
        trigger: "item",
        formatter: "{b} : {c}"
    },

    legend: {
        data: ["展现", "点击", "访问", "咨询", "订单"],
        textStyle: {
            color: 'white',
        }
    },
    series: [
        // {
        //     name: "预期",
        //     type: "funnel",
        //     left: "10%",
        //     width: "80%",
        //     label: {
        //         show: true
        //         // normal: {
        //         //     formatter: '{b}预期'
        //         // },
        //         // emphasis: {
        //         //     position:'inside',
        //         //     formatter: '{b}预期: {c}%'
        //         // }
        //     },
        //     labelLine: {
        //         normal: {
        //             show: false
        //         }
        //     },
        //     itemStyle: {
        //         normal: {
        //             opacity: 0.7
        //         }
        //     },
        //     data: [
        //         { value: 60, name: "访问" },
        //         { value: 40, name: "咨询" },
        //         { value: 20, name: "订单" },
        //         { value: 80, name: "点击" },
        //         { value: 100, name: "展现" }
        //     ]
        // },
        {
            // name: "实际",
            type: "funnel",
            left: "10%",
            width: "80%",
            maxSize: "80%",
            label: {
                normal: {
                    position: "inside",
                    formatter: "{d}%",
                    textStyle: {
                        color: "#fff"
                    }
                },
                emphasis: {
                    position: "inside",
                    formatter: "{b}: {c}"
                    // formatter:"{a}:{b}:{c}:{d}:"
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: "#fff",
                    borderWidth: 2
                }
            },
            data: [
                { value: 30, name: "访问" },
                { value: 10, name: "咨询" },
                { value: 5, name: "订单" },
                { value: 50, name: "点击" },
                { value: 80, name: "展现" }
            ]
        }
    ],

    // color: ['#4edebd', '#55bfe6', '#938cd0', '#6877f6', '#4c5bbc', '#34c189']
}